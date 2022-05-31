import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment'
import { SeatsioSeatingChart } from '@seatsio/seatsio-react'
// import Seatmap from 'react-seatmap';
// import SeatPicker from "react-seat-picker";
import '../../assets/sass/details/detail.scss'

function Detail(props) {
    const { id } = useParams();

    const [detailimagen, setDetailimage] = useState();
    const [eventdate, setEventdate] = useState();
    const [eventtime, setEventtime] = useState();

    const [eventhall, setEventhall] = useState();
    function initPromise() {

        const response = axios.get(`/api/Event/GetById/${id}`)
        return new Promise(function (res, rej) {
            res(response);

        })

    }

  



    useEffect(() => {

        initPromise()
            .then(function (result) {
                // "initResolve"
                return result.data;
            })
            .then(function (result) {
                debugger
                setDetailimage(result.detailImage)
                setEventdate(result.date)
                setEventtime(result.date)
                setEventhall(result.hall.name)
            });

       
    });

    const { format: formatPrice } = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    });
    return (
        <div>
            <div className='event-image'>
               
                <img src={`data:image/jpeg;base64,${detailimagen}`} alt="" className='imag' />
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4 col-md-6 col-sm-12 mt-5'>

                        <div className='info-detail'>
                            <span className='icon-info'><i className="fas fa-calendar-alt ico"></i></span>
                            <div className='inf'>
                                <div className='title'>
                                    <b>Event Date</b>
                                </div>
                                <div className='text'>
                                    <p>{moment(eventdate).format("DD/MM/YYYY")}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12 mt-5'>

                        <div className='info-detail'>
                            <span className='icon-info'><i className="far fa-clock ico"></i></span>
                            <div className='inf'>
                                <div className='title'>
                                    <b>Event Time</b>
                                </div>
                                <div className='text'>
                                    <p>{moment(eventtime).format("HH:MM")}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-12 mt-5'>

                        <div className='info-detail'>
                            <span className='icon-info'><i className="fas fa-map-marker-alt ico"></i></span>
                            <div className='inf'>
                                <div className='title'>
                                    <b>Venue</b>
                                </div>
                                <div className='text'>
                                    <p>{eventhall}</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <div className='mt-5 seathall' >
                <SeatsioSeatingChart
                    workspaceKey="publicDemoKey"
                    pricing={[
                        {
                            category: 1,
                            ticketTypes: [
                                {
                                    ticketType: "adult",
                                    price: 30,
                                    label: "For adults",
                                    description: "Includes hot meal and a drink"
                                },
                                {
                                    ticketType: "child",
                                    price: 20,
                                    label: "For children",
                                    description: "Includes burger and fries"
                                }
                            ]
                        },
                        {
                            category: 2,
                            ticketTypes: [
                                {
                                    ticketType: "adult",
                                    price: 40,
                                    label: "For adults",
                                    description: "Includes hot meal and a drink"
                                },
                                {
                                    ticketType: "child",
                                    price: 30,
                                    label: "For children",
                                    description: "Includes burger and fries"
                                }
                            ]
                        },
                        { category: 3, price: 50 }
                    ]}
                    priceFormatter={(price) => formatPrice(price)}
                    openDraftDrawing="true"
                    event="smallTheatreEvent"
                    region="eu"
                    language="en"
                />
            </div>
        </div>

    )
}

export default Detail