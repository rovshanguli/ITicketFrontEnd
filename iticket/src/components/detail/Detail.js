import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment'

import { SeatsioSeatingChart } from '@seatsio/seatsio-react'


import '../../assets/sass/details/detail.scss'
import { Form } from 'react-bootstrap';

function Detail() {

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

    let selectedSeats = [];

    if (JSON.parse(localStorage.getItem('seats')) != null) {
        selectedSeats = JSON.parse(localStorage.getItem('seats'))
    }


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

                <Form>

                    <SeatsioSeatingChart

                        onObjectSelected={
                            function (obj) {
                                // add the selected seat id to the array
                                selectedSeats.push(obj);
                                localStorage.setItem("seats", JSON.stringify(selectedSeats));
                                console.log(selectedSeats);
                            }
                        }

                        onObjectDeselected={
                            function (obj) {
                                // remove the deselected seat id from the array
                                var index = -1;
                                for (let i = 0; i < selectedSeats.length; i++) {
                                    if (selectedSeats[i].label === obj.label) {
                                        index = i
                                    }
                                }
                                if (index !== -1) selectedSeats.splice(index, 1);
                                localStorage.setItem("seats", JSON.stringify(selectedSeats));
                                console.log(selectedSeats);
                            }
                        }

                        workspaceKey="publicDemoKey"
                        pricing={[
                            {
                                category: 1,
                                ticketTypes: [
                                    {
                                        ticketType: "event",
                                        price: 30,
                                        label: "For event",
                                        description: "Salam meleyki"
                                    }
                                ]
                            },
                            {
                                category: 2,
                                ticketTypes: [
                                    {
                                        ticketType: "event",
                                        price: 40,
                                        label: "For event",
                                        description: "Salam meleyki"
                                    }
                                ]
                            }

                        ]}
                        id={`seathall`}
                        selectedObjectsInputName={'selectedSeatsField'}
                        priceFormatter={(price) => formatPrice(price)}
                        openDraftDrawing={false}
                        event="smallTheatreEvent"
                        region="eu"
                        language="en"

                    />
                </Form>


            </div>
        </div >

    )
}

export default Detail