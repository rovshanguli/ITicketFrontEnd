import React from 'react'
import { Button, Form } from 'react-bootstrap'
import '../../../../assets/sass/basket/borderticket.scss'

function BorderTicket() {
    return (
        <div className='container'>
            <div className="row mt-5 ticketsonline">
                <div>
                    <h2>Səbət</h2>
                </div>

                <div className="col-lg-8 col-md-8 col-sm-12 ">
                    <div className='war'>
                        <div className='ticket d-flex mt-5 '>
                            <div className='tickdeta'>
                                <div className='imagetick'>
                                    <img className='tickimage' src="https://cdn.iticket.az/event/poster_square/7kDqsUsbCSkwH53iswfcKTTMwtidBegKNmysgLt7.jpg" alt="" />
                                </div>
                                <div>
                                    <div><span className='spans'>Azərsun Arena</span><span className='spans'>21.05.2022</span><span className='spans'>-19:30</span></div>
                                    <div><b className='tickname'>Qarabağ FK – Neftçi PFK</b></div>
                                    <div className='seattick'><p>Sektor:H1</p> <p>Sıra: 8</p> <p>Yer: 15</p></div>

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


                                <Button className='tickord' type="submit">
                                    Sifariş Yarat
                                </Button>
                            </Form>
                        </div>

                    </div>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12 ">
                    <div className='war'>
                        <div className='ticket d-flex mt-5 '>
                            <div className='tickdeta'>
                                <div className='imagetick'>
                                    <img className='tickimage' src="https://cdn.iticket.az/event/poster_square/7kDqsUsbCSkwH53iswfcKTTMwtidBegKNmysgLt7.jpg" alt="" />
                                </div>
                                <div>
                                    <div><span className='spans'>Azərsun Arena</span><span className='spans'>21.05.2022</span><span className='spans'>-19:30</span></div>
                                    <div><b className='tickname'>Qarabağ FK – Neftçi PFK</b></div>
                                    <div className='seattick'><p>Sektor:H1</p> <p>Sıra: 8</p> <p>Yer: 15</p></div>

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

            </div>

        </div>


    )
}

export default BorderTicket