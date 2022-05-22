import React from 'react'
import { Link } from 'react-router-dom'
import '../../../../assets/sass/profile/myorders.scss'

function MyOrders() {
    return (
        <div className='row justify-content-between container'>
            <div className='col-lg-8 col-md-9 col-sm-12  mt-4'>
                <h2 className='mt-5'>Sifarişlər</h2>
                <div className='orders mt-5'>
                    <Link className='orderlink' to={'/order'}>
                        <div className='mt-4 ordermenu'>


                            <div className='ordertitle'><b>Rovshan və Ümiddinyonun əsərləri</b></div>
                            <div className='orderstatus'><b>ləğv edilib</b></div>
                            <div className='orderdate'><p>datetime</p></div>
                            <div className='orderprice'><b>price ₼</b></div>


                        </div>
                    </Link>

                    <Link className='orderlink' to={'/order'}>
                        <div className='mt-4 ordermenu'>


                            <div><b>Rovshan və Ümiddinyonun əsərləri</b></div>
                            <div><b>ləğv edilib</b></div>
                            <div><p>datetime</p></div>
                            <div><b>price ₼</b></div>


                        </div>
                    </Link>







                </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12 mt-4 ordersidebar'>
                <ul>
                    <li className='p-2' >
                        <Link to={"/profile"}  >Profil</Link>
                    </li>
                    <li className='p-2' style={{ backgroundColor: 'black', borderRadius: '20px' }}>
                        <Link to={"/myorders"} style={{ color: 'white' }}>Mənim Sifarişlərim</Link>
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

export default MyOrders