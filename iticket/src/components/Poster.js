import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/sass/postercomponent/poster.scss'

function Poster() {
    return (
        <div className='poster'>
            <div className="content-container mt-5" >
                <div className="app-block"><div className="content">
                    <div className="title">NÖVBƏTİ VİZUAL SƏYAHƏTİNİZİ TAPIN</div>
                    <div className="text">
                        iTicket.AZ tətbiqi bütün növ tədbirlərə (teatr, idman, konsertlər, sərgilər və s.) biletləri əldə etməyi asan və sürətli edir.
                    </div>
                    <div className="links">
                        <Link to={"/"}>
                            <img alt='' src={require('../assets/img/android.png')} srcSet="images/android@2x.png 2x" /></Link>
                        <span></span>
                        <Link to={"/"}>
                            <img alt='' src={require('../assets/img/ios.png')} srcSet="images/ios@2x.png 2x" /></Link>
                    </div>
                    <div className='logo'>
                        <Link to={"/"}>
                            <img alt='' className='logos' src={require('../assets/img/logoiticket.png')} srcSet="images/ios@2x.png 2x" /></Link>
                    </div>
                </div>
                    <div className="hidden  d-none d-lg-block lg:block lg:absolute lg:top-0 lg:left-0 lg:right-0 lg:bottom-0 lg:overflow-hidden lg:rounded-2xl">
                        <div className="download-text">
                            İNDİ YÜKLƏ İNDİ YÜKLƏ İNDİ YÜKLƏ İNDİ YÜKLƏ İNDİ YÜKLƏ
                        </div>
                    </div>
                    <img alt=''  src={require('../assets/img/app.png')} srcSet="images/app@2x.png 2x" className="hidden lg:block app-photo d-none d-lg-block" />
                </div>
            </div>
        </div>

    )
}

export default Poster