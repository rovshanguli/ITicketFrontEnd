import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Slider from 'react-slick/lib/slider';
import '../../assets/sass/sliders/innovationsslider.scss'

function InnovationsSlider() {


    const [events, setEvent] = useState([]);

    useEffect(() => {
        loadEvents();
    }, []);

    const loadEvents = async () => {
        const result = await axios.get("https://localhost:44351/api/event/getallevents");
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

    return (

        <div className='innovations'>
            <div className='container'>
                <div className="row">
                    <h1 className='innoname'>Yeniliklər</h1>


                    <Slider {...settings}>
                        {events.map(card =>
                            <div className='px-3' key={card.toString()}>
                                <Link to="/detail" className="event-list-item tns-item" target="" aria-hidden="true" tabIndex="-1">
                                    <div className="relative h-full">
                                        <div className="image">
                                            <img src={`data:image/jpeg;base64,${card.backImage}`} data-src="https://cdn.iticket.az/event/poster_bg/BTlzxK9BDAGN6c7aU3PavCgAiV485WD6QY4bCpS6.jpg" alt="SAGOPA KAJMER" className="bg ls-is-cached lazyloaded" />
                                            <img src={`data:image/jpeg;base64,${card.image}`} data-src="https://cdn.iticket.az/event/poster/S2B19912lKPMAoivVwJjBZTw9Z3mcya3jJn8o4Un.png" alt="SAGOPA KAJMER" className=" ls-is-cached lazyloaded" />
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

export default InnovationsSlider