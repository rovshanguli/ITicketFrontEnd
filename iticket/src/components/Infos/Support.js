import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/sass/infos/support.scss'

function Support() {
    return (
        <div className='row justify-content-between container'>
            <div className='col-lg-8 col-md-9 col-sm-12  mt-4'>
                <h2 className='mt-5'>Dəstək</h2>
                <div className='supp mt-5'>
                    <p className='textsupp'>«Ən çox verilən suallar» bölməsində suallarınıza cavab tapa bilmədiyiniz halda +994 12 493 33 77 nömrəsi ilə əlaqə saxlayaraq «Müştəri xidmətləri» komandamızla əlaqə saxlayın. Bütün qeyd və təkliflərinizi elektron poçt ünvanımıza yaza bilərsiniz: info@iticket.az.</p>
                    <h4 className='texsupp'>MÜŞTƏRİ XİDMƏTLƏRİMİZ HƏR GÜN 24 SAAT XİDMƏTİNİZDƏDİR.</h4>
                </div>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-12 mt-4 sidebar'>
                <ul>
                    <li className='p-2'>
                        <Link to={"/faq"} >Ən Çox Verilən Suallar</Link>
                    </li>
                    <li className='p-2' style={{ backgroundColor: 'black', borderRadius: '20px' }}>
                        <Link to={"/support"}   style={{color:'white'}}>Dəstək</Link>
                    </li>
                    <li className='p-2'>
                        <Link to={"/terms"}>Şərtlər və Qaydalar</Link>
                    </li>
                    <li className='p-2' >
                        <Link to={"/eticket"} >Elektron Bilet</Link>
                    </li>
                    <li className='p-2'>
                        <Link to={"/refund"} >Biletin Qaytarılması və Dəyişdirilməsi</Link>
                    </li>
                    <li className='p-2'>
                        <Link to={"/privacy"} >Məxfilik</Link>
                    </li >
                    <li className='p-2' >
                        <Link to={"/about"}>Haqqımızda</Link>
                    </li>
                    <li className='p-2'>
                        <Link to={"/contact"}>Əlaqə</Link>
                    </li>
                </ul>
            </div>

        </div>

    )
}

export default Support