import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { SeatsioSeatingChart } from '@seatsio/seatsio-react';


import '../../assets/sass/details/detail.scss'
import { Form } from 'react-bootstrap';

function Detail() {
    const { id } = useParams();
    const [data, setData] = useState();
    const [soldSeat, setSoldSeats] = useState([]);
    
    

    // Implementation
    useEffect(() => {
        function fetchSampleData() {
            let method = 'get' // ex. get | post | put | delete , etc
            return axios[method](`/api/Event/GetById/${id}`)
                .then((response) => {
                    // success
                    //-> save response to state, notification
                    setData(response.data) // pass to finish
                })
                .catch((error) => {
                    // failed
                    //-> prepare, notify, handle error

                    return false // pass to finish
                })
                .then((resultBoolean) => {
                    // do something after success or error

                    return resultBoolean // for await purpose
                });
        }
        function fetchResult() {
            let success = fetchSampleData()
            if (success) {
                setData(success.data)
            } else {
            }
        }

        function loadSoldSeats() {
            let method = 'get' // ex. get | post | put | delete , etc
            return axios[method](`https://localhost:44351/api/Order/GetByEventId/${id}`)
                .then((response) => {
                    // success
                    //-> save response to state, notification
                     // pass to finish
                    setSoldSeats(response.data)
                })
                .catch((error) => {
                    // failed
                    //-> prepare, notify, handle error
    
                    return false // pass to finish
                })
                .then((resultBoolean) => {
                    // do something after success or error
    
                    return resultBoolean // for await purpose
                });
        }
        fetchResult()
        loadSoldSeats()
    }, [id]);

    //Helpers start
    let selectedSeats = [];
    if (JSON.parse(localStorage.getItem('seats')) != null) {
        selectedSeats = JSON.parse(localStorage.getItem('seats'))
    }
    const { format: formatPrice } = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "AZN"
    });

    let seats = [
        "A-1",
        "A-2",
        "A-3",
        "A-4",
        "A-5",
        "A-6",
        "A-7",
        "A-8",
        "A-9",
        "A-10",
        "A-11",
        "A-12",
        "A-13",
        "A-14",
        "A-15",
        "A-16",
        "A-17",
        "A-18",
        "A-19",
        "A-20",
        "A-21",
        "A-22",
        "A-23",
        "A-24",
        "A-25",
        "A-26",
        "A-27",
        "A-28",
        "A-29",
        "A-30",

        "B-1",
        "B-2",
        "B-3",
        "B-4",
        "B-5",
        "B-6",
        "B-7",
        "B-8",
        "B-9",
        "B-10",
        "B-11",
        "B-12",
        "B-13",
        "B-14",
        "B-15",
        "B-16",
        "B-17",
        "B-18",
        "B-19",
        "B-20",
        "B-21",
        "B-22",
        "B-23",
        "B-24",
        "B-25",
        "B-26",
        "B-27",
        "B-28",
        "B-29",
        "B-30",

        "C-1",
        "C-2",
        "C-3",
        "C-4",
        "C-5",
        "C-6",
        "C-7",
        "C-8",
        "C-9",
        "C-10",
        "C-11",
        "C-12",
        "C-13",
        "C-14",
        "C-15",
        "C-16",
        "C-17",
        "C-18",
        "C-19",
        "C-20",
        "C-21",
        "C-22",
        "C-23",
        "C-24",
        "C-25",
        "C-26",
        "C-27",
        "C-28",
        "C-29",
        "C-30"


    ];
    
    let soldSeats = [];
    soldSeat.forEach(seat => {
        soldSeats.push(seat.seatId)
    });

    if (soldSeats.length > 0) {
        soldSeats.forEach(soldseat => {
            for (let i = 0; i < seats.length; i++) {
                if (seats[i] === soldseat) {
                    seats.splice(i, 1)
                }
            }
        });
    }

    console.log(soldSeat);
    //Helpers End
    return (

        <div>
            <div className='event-image'>
                <img src={`data:image/jpeg;base64,${data?.detailImage}`} alt="" className='imag' />
                <div className='deat'>
                    <span className='pricedet'>{data?.price} ₼-dan</span>
                    <button className='buthearth'><i className="far fa-heart"></i></button>
                </div>
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
                                    <p>{moment(data?.date).format("DD/MM/YYYY")}</p>
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
                                    <p>{moment(data?.date).format("HH:MM")}</p>
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
                                    <p>{data?.hall.name}</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <div className='mt-5 seathall' >

                <Form>

                    <SeatsioSeatingChart
                        isObjectVisible={
                            function (obj) {
                                if (obj.category.label === 'Ground Floor') {
                                    return true;
                                }
                                return false;
                            }
                        }

                        onObjectSelected={
                            function (obj) {
                                // add the selected seat id to the array
                                selectedSeats.push(obj);

                                localStorage.setItem("seats", JSON.stringify(selectedSeats));

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
                        // unavailableCategories= {[2]}
                        selectionValidators={[
                            { type: 'noOrphanSeats', highlight: false }
                        ]}
                        selectableObjects={seats}
                        workspaceKey="publicDemoKey"
                        id={`seathall`}

                        selectedObjectsInputName={'selectedSeatsField'}
                        priceFormatter={(price) => formatPrice(price)}
                        openDraftDrawing={false}
                        event="smallTheatreEvent3"
                        region="eu"
                        language="en"
                    />
                </Form>


            </div>
        </div >

    )
}

export default Detail