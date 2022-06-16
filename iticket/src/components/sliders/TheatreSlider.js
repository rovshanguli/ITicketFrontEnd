import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Slider from 'react-slick/lib/slider';
import '../../assets/sass/sliders/theatreslider.scss'

function TheatreSlider() {

    const [events, setEvent] = useState([]);

    useEffect(() => {
        loadEvents();
    }, []);

    const loadEvents = async () => {
        const result = await axios.get("https://localhost:44351/api/event/GetByCateId/5");
        setEvent(result.data);
    }


    var settings = {
        dots: true,
        infinite: true,
        arrows: true,

        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        initialSlide: true,
        autoplay: true,
        cssEase: "linear",

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const Detail = async id => {
        console.log(id);
    }

    return (
        <div className='theatre'>
            <div className='container'>
                <div className="row mt-5">
                    <h1 className='theatrename'>Tamaşalar</h1>


                    <Slider {...settings}>
                        {events.map(card =>
                            <div className='px-3' key={card.toString()}>
                                <Link to={`/detail/${card.id}`} onClick={() => Detail(card.id)} className="event-list-item tns-item" target="" aria-hidden="true" tabIndex="-1">
                                    <div className="relative h-full">
                                        <div className="image">
                                            <img src={`data:image/jpeg;base64,${card.backImage}`} data-src={`data:image/jpeg;base64,${card.backImage}`} alt="" className="bg ls-is-cached lazyloaded" />
                                            <img src={`data:image/jpeg;base64,${card.image}`} data-src={`data:image/jpeg;base64,${card.image}`} alt="" className=" ls-is-cached lazyloaded" />
                                            <span className="btn"><span className="price">{card.price} ₼</span>-dan</span>
                                        </div>
                                        <div className="info">
                                            <div className="event-name">
                                                {card.name}
                                            </div>
                                            <div className="flex w-full items-center flex-1">
                                                <div className="event-date">
                                                    {card.date.substring(0, 10)}
                                                </div>
                                                <span className="separator">
                                                    
                                                </span>
                                                <div className="venue-name">
                                                   
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )}

                    </Slider>

                </div>
            </div>
        </div>






    )
}

export default TheatreSlider