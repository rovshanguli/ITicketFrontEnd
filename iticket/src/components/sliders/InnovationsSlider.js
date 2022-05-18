import React from 'react';
import { Link } from 'react-router-dom';

import Slider from 'react-slick/lib/slider';
import '../../assets/sass/sliders/innovationsslider.scss'

function InnovationsSlider() {

    const cards = [
        {
            bgimg: "https://cdn.iticket.az/event/poster_bg/BTlzxK9BDAGN6c7aU3PavCgAiV485WD6QY4bCpS6.jpg",
            img: "https://cdn.iticket.az/event/poster/S2B19912lKPMAoivVwJjBZTw9Z3mcya3jJn8o4Un.png",
            price: "5",
            name: "Sagopa Kajmer",
            date: "10 iyun 2022",
            hall: "Elektra Events Hall"
        },
        {
            bgimg: "https://cdn.iticket.az/event/poster_bg/NL4Oza9xgJ3FCtzsxbsu4OVosNfibm7PmPW1MT9o.jpg",
            img: "https://cdn.iticket.az/event/poster/gm1OcnrlYiLqvnK6Bi9s4ChzcBI7Yurwn8DiEh0X.png",
            price: "5",
            name: "Sagopa Kajmer",
            date: "10 iyun 2022",
            hall: "Elektra Events Hall"
        },
        {
            bgimg: "https://cdn.iticket.az/event/poster_bg/5srwI3Nfh5cGmZZlpOpk8lNYlbvmkmH5k12kIeqP.jpg",
            img: "https://cdn.iticket.az/event/poster/UhjNubJp8u7ul0zpFdm6asOqv4lSdOelvQjwdS7u.png",
            price: "5",
            name: "Sagopa Kajmer",
            date: "10 iyun 2022",
            hall: "Elektra Events Hall"
        },
        {
            bgimg: "https://cdn.iticket.az/event/poster_bg/BTlzxK9BDAGN6c7aU3PavCgAiV485WD6QY4bCpS6.jpg",
            img: "https://cdn.iticket.az/event/poster/S2B19912lKPMAoivVwJjBZTw9Z3mcya3jJn8o4Un.png",
            price: "5",
            name: "Sagopa Kajmer",
            date: "10 iyun 2022",
            hall: "Elektra Events Hall"
        },
        {
            
            bgimg: "https://cdn.iticket.az/event/poster_bg/BTlzxK9BDAGN6c7aU3PavCgAiV485WD6QY4bCpS6.jpg",
            img: "https://cdn.iticket.az/event/poster/S2B19912lKPMAoivVwJjBZTw9Z3mcya3jJn8o4Un.png",
            price: "5",
            name: "Sagopa Kajmer",
            date: "10 iyun 2022",
            hall: "Elektra Events Hall"
        },
        {
            
            bgimg: "https://cdn.iticket.az/event/poster_bg/hM2SYe16SbKWyutMq3rS2pgc5F8UIo6p3rQtaN0w.jpg",
            img: "https://cdn.iticket.az/event/poster/T2YvJQuPaX6wtcUSh83mvzVlaITkqUdNGs4vPCcR.png",
            price: "5",
            name: "Sagopa Kajmer",
            date: "10 iyun 2022",
            hall: "Elektra Events Hall"
        }

       
    ]
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
                        {cards.map(card =>
                            <div className='px-3' key={card.toString()}>
                                <Link to="/detail" className="event-list-item tns-item" target="" aria-hidden="true" tabIndex="-1">
                                    <div className="relative h-full">
                                        <div className="image">
                                            <img src={`${card.bgimg}`} data-src="https://cdn.iticket.az/event/poster_bg/BTlzxK9BDAGN6c7aU3PavCgAiV485WD6QY4bCpS6.jpg" alt="SAGOPA KAJMER" className="bg ls-is-cached lazyloaded" />
                                            <img src={`${card.img}`} data-src="https://cdn.iticket.az/event/poster/S2B19912lKPMAoivVwJjBZTw9Z3mcya3jJn8o4Un.png" alt="SAGOPA KAJMER" className=" ls-is-cached lazyloaded" />
                                            <span className="btn"><span className="price">{card.price} ₼</span>-dan</span>
                                        </div>
                                        <div className="info">
                                            <div className="event-name">
                                                {card.name}
                                            </div>
                                            <div className="flex w-full items-center flex-1">
                                                <div className="event-date">
                                                    {card.date}
                                                </div>
                                                <span className="separator">
                                                    •
                                                </span>
                                                <div className="venue-name">
                                                    {card.hall}
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