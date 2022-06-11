import React from 'react';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../../../assets/sass/basket/borderticket.scss';
import Swal from 'sweetalert2';

function BorderTicket() {

    let tickets = JSON.parse(localStorage.getItem('seats'));
    let seats = tickets.seats
    console.log(seats);
    if (seats == null) {
        seats = []
    }

    function orders(e) {
        e.preventDefault();
        seats.forEach(ticket => {
            createOrder()
            async function createOrder() {
                await axios.post('/api/Order/CreateOrder', {
                    seatId: ticket,
                    eventId: tickets.id
                }, { 'Content-Type': 'multipart/form-data' })
                    .then(function (response) {
                        Swal.fire(
                            'Created',
                            'success',
                        )
                        localStorage.setItem("seats", JSON.stringify([]));
                    })
                    .catch(function (error) {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Something went wrong!',
                            footer: '<a href="">Why do I have this issue?</a>'
                        })

                    });
            }
        });
        
    }


    return (
        <div className='container'>
            <div className="row mt-5 ticketsonline">
                <div>
                    <h2>Səbət</h2>
                </div>
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-12">
                        {seats.map(seat =>
                            <div key={seat} className="col-12">
                                <div className='war'>
                                    <div className='ticket d-flex mt-5 '>
                                        <div className='tickdeta'>
                                            <div className='imagetick'>
                                                <img className='tickimage' src="https://cdn.iticket.az/event/poster_square/7kDqsUsbCSkwH53iswfcKTTMwtidBegKNmysgLt7.jpg" alt="" />
                                            </div>
                                            <div>
                                                <div><span className='spans'>Azərsun Arena</span><span className='spans'>21.05.2022</span><span className='spans'>-19:30</span></div>
                                                <div><b className='tickname'>Qarabağ FK – Neftçi PFK</b></div>
                                                <div className='seattick'><p>Sektor:H1</p> <p>{seat}</p> <p>Yer: 15</p></div>
                                            </div>
                                        </div>
                                        <div className='tickbuttons'>
                                            <div className='tickbuton'>
                                                <b> 5 ₼</b>
                                            </div>
                                            <button className='delet'><i className="far fa-trash-alt"></i></button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        )}
                    </div>

                    <div className='col-lg-3 col-md-3 col-sm-12 '>
                        <div className='waro mt-5'>
                            <div className='container'>
                                <Form className='mt-5'>

                                    <Form.Group className="mb-4" controlId="formBasicText">

                                        <Form.Control type="text" placeholder="Ad" />

                                    </Form.Group>
                                    <Form.Group className="mb-4" controlId="formBasicText">

                                        <Form.Control type="text" placeholder="Soy Ad" />

                                    </Form.Group>

                                    <Form.Group className="mb-4" controlId="formBasicNumber">

                                        <Form.Control type="number" placeholder="Telefon Nömrəsi" />
                                    </Form.Group>
                                    <Form.Group className="mb-4" controlId="formBasicEmail">

                                        <Form.Control type="email" placeholder="Email" />
                                    </Form.Group>
                                    <Form.Group className="mb-4" controlId="formBasicCheckbox">

                                        <Form.Check type="checkbox" label=" Şərtləri və qaydaları qəbul edirəm." />
                                    </Form.Group>

                                    <Link to='' onClick={(e) => orders(e)}>
                                        <Button className='tickord' type="submit" >
                                            Sifariş Yarat
                                        </Button>
                                    </Link>

                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default BorderTicket