import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Form } from 'react-bootstrap'

import '../../../../assets/sass/basket/order.scss'

function Order() {
    return (
        <div className='row justify-content-between container'>
            <div className='col-lg-8 col-md-9 col-sm-12  mt-4'>
                <h2 className='mt-5'>Sifariş</h2>
                <div className='order mt-5'>

                    <div className='mt-4 ordertab'>

                        <div className='maxord'>
                            <div className='ordertita'><b>Rovshan və Ümiddinyonun əsərləri</b></div>
                            <div className='orderhallo'><b>Azərbaycan Dövlət Akademik Opera və Balet Teatrı</b></div>
                            <div className='ordersea'><p>Sıra: 1, Yer: 2</p></div>
                            <div className='orderprices'><b>Qiymət: ₼</b></div>
                        </div>

                        <div className='orderda'><b>21 may 2022</b> <b>19:00</b></div>


                    </div>

                    <div className='mt-4 cashtab'>
                        <h2 className='mt-5'>Çatdırılma Üsulu</h2>

                        <div className='etiko'>
                            <p>Elektron Bilet</p>
                        </div>

                    </div>

                    <div className='mt-4 cashtab'>
                        <h2 className='mt-5'>Kartınızı Qeyd Edin</h2>

                        <div className=''>
                            <Form.Group className="mb-3 cardcode" controlId="formBasicNumberCode">
                              
                                <Form.Control type="number" placeholder="XXXX-XXXX-XXXX-XXXX" />

                            </Form.Group>
                           
                        </div>
                        <div className='sendtick'>
                                <div>
                                <Button  className='canceltick' type="submit">
                                    Ləğv Et
                                </Button>
                                </div>
                          
                                <div>
                                <Button  className='endtick' type="submit">
                                    Sifarişi Tamamla
                                </Button></div>
                            </div>

                    </div>





                </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12 mt-4 ordersidebar'>
                <ul>
                    <li className='p-2' >
                        <Link to={"/profile"} >Profil</Link>
                    </li>
                    <li className='p-2' >
                        <Link to={"/myorders"}>Mənim Sifarişlərim</Link>
                    </li>
                    <li className='p-2'>
                        <Link to={"/updatepassword"}>Şifrəni Yenilə</Link>
                    </li>
                    <li className='p-2'>
                        <Link to={"/logout"}>Çıxış</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Order