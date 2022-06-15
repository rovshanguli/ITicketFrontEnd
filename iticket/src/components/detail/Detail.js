import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// import Favorites from "../pages/Favorites.js"
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
        "J-28",

        "K-1",
        "K-2",
        "K-3",
        "K-4",
        "K-5",
        "K-6",
        "K-7",
        "K-8",
        "K-9",
        "K-10",
        "K-11",
        "K-12",

        "L-1",
        "L-2",
        "L-3",
        "L-4",
        "L-5",
        "L-6",
        "L-7",
        "L-8",
        "L-9",
        "L-10",
        "L-11",
        "L-12",

        "M-1",
        "M-2",
        "M-3",
        "M-4",
        "M-5",
        "M-6",
        "M-7",
        "M-8",
        "M-9",
        "M-10",


        "N-1",
        "N-2",
        "N-3",
        "N-4",
        "N-5",
        "N-6",
        "N-7",
        "N-8",
        "N-9",
        "N-10",
        "N-11",
        "N-12",
        "N-13",
        "N-14",
        "N-15",
        "N-16",
        "N-17",
        "N-18",

        "O-1",
        "O-2",
        "O-3",
        "O-4",
        "O-5",
        "O-6",
        "O-7",
        "O-8",
        "O-9",
        "O-10",
        "O-11",
        "O-12",
        "O-13",
        "O-14",
        "O-15",
        "O-16",
        "O-17",
        "O-18",
        "O-19",
        "O-20",
        "O-21",
        "O-22",
        "O-23",
        "O-24",
        "O-25",
        "O-26",
        "O-27",
        "O-28",
        "O-29",
        "O-30",
        "O-31",
        "O-32",

        "P-1",
        "P-2",
        "P-3",
        "P-4",
        "P-5",
        "P-6",
        "P-7",
        "P-8",
        "P-9",
        "P-10",
        "P-11",
        "P-12",
        "P-13",
        "P-14",
        "P-15",
        "P-16",
        "P-17",
        "P-18",
        "P-19",
        "P-20",
        "P-21",
        "P-22",
        "P-23",
        "P-24",
        "P-25",
        "P-26",
        "P-27",
        "P-28",
        "P-29",
        "P-30",
        "P-31",
        "P-32",
        "P-33",
        "P-34",
        "P-35",
        "P-36",
        "P-37",
        "P-38",
        "P-39",
        "P-40",
        "P-41",
        "P-42",
        "P-43",
        "P-44",
        "P-45",
        "P-46",
        "P-47",
        "P-48",
        "P-49",
        "P-50",

        "Q-1",
        "Q-2",
        "Q-3",
        "Q-4",
        "Q-5",
        "Q-6",
        "Q-7",
        "Q-8",
        "Q-9",
        "Q-10",
        "Q-11",
        "Q-12",
        "Q-13",
        "Q-14",
        "Q-15",
        "Q-16",
        "Q-17",
        "Q-18",
        "Q-19",
        "Q-20",
        "Q-21",
        "Q-22",
        "Q-23",
        "Q-24",
        "Q-25",
        "Q-26",
        "Q-27",
        "Q-28",
        "Q-29",
        "Q-30",
        "Q-31",
        "Q-32",
        "Q-33",
        "Q-34",
        "Q-35",
        "Q-36",
        "Q-37",
        "Q-38",
        "Q-39",
        "Q-40",
        "Q-41",
        "Q-42",
        "Q-43",
        "Q-44",
        "Q-45",
        "Q-46",
        "Q-47",
        "Q-48",
        "Q-49",
        "Q-50",
        "Q-51",
        "Q-52",
        "Q-53",
        "Q-54",
        "Q-55",
        "Q-56",
        "Q-57",
        "Q-58",
        "Q-59",
        "Q-60",
        "Q-61",
        "Q-62",
        "Q-63",
        "Q-64",
        "Q-65",
        "Q-66",
        "Q-67",
        "Q-68",
        "Q-69",
        "Q-70",
        "Q-71",
        "Q-72",

        "R-1",
        "R-2",
        "R-3",
        "R-4",
        "R-5",
        "R-6",
        "R-7",
        "R-8",
        "R-9",
        "R-10",
        "R-11",
        "R-12",
        "R-13",
        "R-14",
        "R-15",
        "R-16",
        "R-17",
        "R-18",
        "R-19",
        "R-20",
        "R-21",
        "R-22",
        "R-23",
        "R-24",
        "R-25",
        "R-26",
        "R-27",
        "R-28",
        "R-29",
        "R-30",
        "R-31",
        "R-32",
        "R-33",
        "R-34",
        "R-35",
        "R-36",
        "R-37",
        "R-38",
        "R-39",
        "R-40",
        "R-41",
        "R-42",
        "R-43",
        "R-44",
        "R-45",
        "R-46",
        "R-47",
        "R-48",
        "R-49",
        "R-50",
        "R-51",
        "R-52",
        "R-53",
        "R-54",
        "R-55",
        "R-56",
        "R-57",
        "R-58",
        "R-59",
        "R-60",
        "R-61",
        "R-62",
        "R-63",
        "R-64",
        "R-65",
        "R-66",
        "R-67",
        "R-68",
        "R-69",
        "R-70",
        "R-71",
        "R-72",
        "R-73",
        "R-74",
        "R-75",

        "S-1",
        "S-2",
        "S-3",
        "S-4",
        "S-5",
        "S-6",
        "S-7",
        "S-8",
        "S-9",
        "S-10",
        "S-11",
        "S-12",
        "S-13",
        "S-14",
        "S-15",
        "S-16",
        "S-17",
        "S-18",
        "S-19",
        "S-20",
        "S-21",
        "S-22",
        "S-23",
        "S-24",
        "S-25",
        "S-26",
        "S-27",
        "S-28",
        "S-29",
        "S-30",
        "S-31",
        "S-32",
        "S-33",
        "S-34",
        "S-35",
        "S-36",
        "S-37",
        "S-38",
        "S-39",
        "S-40",
        "S-41",
        "S-42",
        "S-43",
        "S-44",
        "S-45",
        "S-46",
        "S-47",
        "S-48",
        "S-49",
        "S-50",
        "S-51",
        "S-52",
        "S-53",
        "S-54",
        "S-55",
        "S-56",
        "S-57",
        "S-58",
        "S-59",
        "S-60",

        "T-1",
        "T-2",
        "T-3",
        "T-4",
        "T-5",
        "T-6",
        "T-7",
        "T-8",
        "T-9",
        "T-10",
        "T-11",
        "T-12",
        "T-13",
        "T-14",
        "T-15",
        "T-16",
        "T-17",
        "T-18",
        "T-19",
        "T-20",
        "T-21",
        "T-22",
        "T-23",
        "T-24",
        "T-25",
        "T-26",
        "T-27",
        "T-28",
        "T-29",
        "T-30",
        "T-31",
        "T-32",
        "T-33",
        "T-34",
        "T-35",
        "T-36",
        "T-37",
        "T-38",
        "T-39",
        "T-40",
        "T-41",
        "T-42",
        "T-43",
        "T-44",
        "T-45",
        "T-46",
        "T-47",
        "T-48",
        "T-49",
        "T-50",
        "T-51",
        "T-52",
        "T-53",
        "T-54"











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

    let basket = JSON.parse(localStorage.getItem('basket'))
    if (basket == null) {
        localStorage.setItem('basket', JSON.stringify([]))
    } else {
        basket.forEach(element => {
            if (data?.id === element.id) {
                let hearth = document.getElementById('hearth')
                hearth.style.color = 'yellow'
            }
        });
    }

    function addBasket(data) {
        let count = 0;
        let basket = JSON.parse(localStorage.getItem('basket'))
        if (basket != null) {
            for (let i = 0; i < basket.length; i++) {
                if (parseInt(basket[i].id) === parseInt(data.id)) {
                    basket.splice(i, 1)
                    let hearth = document.getElementById('hearth')
                    hearth.style.color = ''
                    count++
                }
            }
        }
        if (count === 0) {
            basket.push(data)
            let hearth = document.getElementById('hearth')
            hearth.style.color = 'yellow'
        }
        localStorage.setItem('basket', JSON.stringify(basket))

    }

    //Helpers End


    let seatsobj = {
        id: id,
        seats: selectedSeats
    }
    return (
        <div>
            <div className='event-image'>
                <img src={`data:image/jpeg;base64,${data?.detailImage}`} alt="" className='imag' />
                <div className='deat'>
                    <span className='pricedet'>{data?.price} ₼-dan</span>
                    <button className='buthearth' onClick={() => addBasket(data)} ><i style={{fontSize:'30px'}} id='hearth' className="far fa-heart"></i></button>
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
                        onObjectSelected={
                            function (obj) {
                                // add the selected seat id to the array
                                selectedSeats.push(obj.label);
                                localStorage.setItem("seats", JSON.stringify(seatsobj));
                            }
                        }
                        pricing={[
                            {
                                category: 1,
                                ticketTypes: [
                                    {
                                        ticketType: "event",
                                        price: data?.price,
                                        label: `${data?.name}`,
                                        description: "Səbətə əlavə olunsun?"
                                    }
                                ]
                            },
                            {
                                category: 2,
                                ticketTypes: [
                                    {
                                        ticketType: "event",
                                        price: data?.price + 20,
                                        label: `${data?.name}`,
                                        description: "Səbətə əlavə olunsun?"
                                    }
                                ]
                            }

                        ]}
                        onObjectDeselected={
                            function (obj) {
                                // remove the deselected seat id from the array
                                var index = -1;
                                for (let i = 0; i < selectedSeats.length; i++) {
                                    if (selectedSeats[i] === obj.label) {
                                        index = i
                                    }
                                }
                                if (index !== -1) selectedSeats.splice(index, 1);
                                localStorage.setItem("seats", JSON.stringify(seatsobj));
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
                        language="tr"
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