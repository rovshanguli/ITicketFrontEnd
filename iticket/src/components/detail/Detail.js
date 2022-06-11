import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

// import Favorites from "../pages/Favorites.js"
import moment from 'moment';
import { SeatsioSeatingChart } from '@seatsio/seatsio-react';


import '../../assets/sass/details/detail.scss'
import { Form } from 'react-bootstrap';

function Detail() {
    const { id } = useParams();
    const [data, setData] = useState();
    const [soldSeat, setSoldSeats] = useState([]);
    const navigate = useNavigate();
    const BorderTicket = async id => {
        // console.log(id);
    }
    BorderTicket(id);

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
        "C-30",

        "D-1",
        "D-2",
        "D-3",
        "D-4",
        "D-5",
        "D-6",
        "D-7",
        "D-8",
        "D-9",
        "D-10",
        "D-11",
        "D-12",
        "D-13",
        "D-14",
        "D-15",
        "D-16",
        "D-17",
        "D-18",
        "D-19",
        "D-20",
        "D-21",
        "D-22",
        "D-23",
        "D-24",
        "D-25",
        "D-26",
        "D-27",
        "D-28",
        "D-29",
        "D-30",

        "E-1",
        "E-2",
        "E-3",
        "E-4",
        "E-5",
        "E-6",
        "E-7",
        "E-8",
        "E-9",
        "E-10",
        "E-11",
        "E-12",
        "E-13",
        "E-14",
        "E-15",
        "E-16",
        "E-17",
        "E-18",
        "E-19",
        "E-20",
        "E-21",
        "E-22",
        "E-23",
        "E-24",
        "E-25",
        "E-26",
        "E-27",
        "E-28",
        "E-29",
        "E-30",

        "F-1",
        "F-2",
        "F-3",
        "F-4",
        "F-5",
        "F-6",
        "F-7",
        "F-8",
        "F-9",
        "F-10",
        "F-11",
        "F-12",
        "F-13",
        "F-14",
        "F-15",
        "F-16",
        "F-17",
        "F-18",
        "F-19",
        "F-20",
        "F-21",
        "F-22",
        "F-23",
        "F-24",
        "F-25",
        "F-26",
        "F-27",
        "F-28",
        "F-29",
        "F-30",

        "G-1",
        "G-2",
        "G-3",
        "G-4",
        "G-5",
        "G-6",
        "G-7",
        "G-8",
        "G-9",
        "G-10",
        "G-11",
        "G-12",
        "G-13",
        "G-14",
        "G-15",
        "G-16",
        "G-17",
        "G-18",
        "G-19",
        "G-20",
        "G-21",
        "G-22",
        "G-23",
        "G-24",
        "G-25",
        "G-26",
        "G-27",
        "G-28",
        "G-29",
        "G-30",
        "G-31",
        "G-32",

        "H-1",
        "H-2",
        "H-3",
        "H-4",
        "H-5",
        "H-6",
        "H-7",
        "H-8",
        "H-9",
        "H-10",
        "H-11",
        "H-12",
        "H-13",
        "H-14",
        "H-15",
        "H-16",
        "H-17",
        "H-18",
        "H-19",
        "H-20",
        "H-21",
        "H-22",
        "H-23",
        "H-24",
        "H-25",
        "H-26",
        "H-27",
        "H-28",
        "H-29",
        "H-30",
        "H-31",
        "H-32",

        "I-1",
        "I-2",
        "I-3",
        "I-4",
        "I-5",
        "I-6",
        "I-7",
        "I-8",
        "I-9",
        "I-10",
        "I-11",
        "I-12",
        "I-13",
        "I-14",
        "I-15",
        "I-16",
        "I-17",
        "I-18",
        "I-19",
        "I-20",
        "I-21",
        "I-22",
        "I-23",
        "I-24",
        "I-25",
        "I-26",
        "I-27",
        "I-28",
        "I-29",
        "I-30",
        "I-31",
        "I-32",

        "J-1",
        "J-2",
        "J-3",
        "J-4",
        "J-5",
        "J-6",
        "J-7",
        "J-8",
        "J-9",
        "J-10",
        "J-11",
        "J-12",
        "J-13",
        "J-14",
        "J-15",
        "J-16",
        "J-17",
        "J-18",
        "J-19",
        "J-20",
        "J-21",
        "J-22",
        "J-23",
        "J-24",
        "J-25",
        "J-26",
        "J-27",
        "J-28"










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

    let a = []
    for (let i = 1; i < 29; i++) {
        a.push('J-' + i)
    }
    // console.log(a);
    //Helpers End
    const Favorites = async od => {
        debugger
        navigate('/favorites', { state: { id: od, name: 'salam blaaaaaaaaaaa' } })
    }
    return (
        <div>
            <div className='event-image'>
                <img src={`data:image/jpeg;base64,${data?.detailImage}`} alt="" className='imag' />
                <div className='deat'>
                    <span className='pricedet'>{data?.price} ₼-dan</span>
                    <button className='buthearth' onClick={() => Favorites(data?.id)}><i className="far fa-heart"></i></button>
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
            <div className="container">
                <div className="row infa mt-5">
                    <div className='col-lg-6 col-md-9 col-sm-12 loca'>
                        <h4 className='hallside'>Məkan</h4>
                        <h6 className='hallo'>{data?.hall.name}</h6>
                    </div>
                    <div className='col-lg-3 col-md-3 col-sm-12 loca'>
                        <h4 className='hallside'>Tarix</h4>
                        <h6 className='hallo'>{moment(data?.date).format("DD/MM/YYYY")}</h6>
                    </div>
                    <div className='col-lg-3 col-md-3 col-sm-12 loca'>
                        <h4 className='hallside'>Qiymət</h4>
                        <h6 className='hallo'>{data?.price} ₼</h6>
                    </div>

                </div>
                <div className="row imha">
                    <div className='col-lg-12 col-md-12 col-sm-12 poca'>
                        <div className='roca'>
                            <Form>
                                <div className="hoca">
                                    <div className='halna' >
                                        <h4 className='halla'>{data?.name}</h4>
                                    </div>
                                    <div className='prico mt-2'>
                                        <h6> Qiymət:</h6>
                                        <h6>{data?.price} ₼</h6>
                                    </div>
                                    <div className='plusminus mt-2'>
                                        <button className='minus'>-</button>
                                        <Form.Control className='inpo' type="number" defaultValue={1} min={1} max={10} />
                                        <button className='plus'>+</button>
                                    </div>
                                    <button className='subo mt-2' type='submit'>Əlavə Edin</button>
                                </div>
                            </Form>
                        </div>


                    </div>
                </div>
            </div>
        </div >

    )
}

export default Detail