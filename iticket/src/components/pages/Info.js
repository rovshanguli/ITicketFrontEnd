import React from 'react'
import { Link } from 'react-router-dom'
import Support from '../Infos/Support.js'
import '../../assets/sass/infos/info.scss'
import Terms from '../Infos/Terms.js'
import ETicket from '../Infos/ETicket.js'
import Refund from '../Infos/Refund.js'
import Privacy from '../Infos/Privacy.js'
import About from '../Infos/About.js'
import Contact from '../Infos/Contacts.js'
import Faq from '../Infos/Faq.js'

function Info() {
    return (
        <div className='container'>
            <div className='row justify-content-between'>
               
                <div className='col-lg-8 col-md-9 col-sm-12  mt-4'>
                    <Faq/>
                    <About/>
                    <Support/>
                    <Refund/>
                    <Terms/>
                    <ETicket/>
                    <Privacy/>
                    <Contact/>
                </div>
                <div className='col-lg-3 col-md-6 col-sm-12 mt-4 sidebar'>
                    <ul>
                        <li className='p-2'>
                            <Link to={"/"}>Ən Çox Verilən Suallar</Link>
                        </li>
                        <li className='p-2'>
                            <Link to={"/"}>Dəstək</Link>
                        </li>
                        <li className='p-2'>
                            <Link to={"/"}>Şərtlər və Qaydalar</Link>
                        </li>
                        <li className='p-2'>
                            <Link to={"/"}>Elektron Bilet</Link>
                        </li>
                        <li className='p-2'>
                            <Link to={"/"}>Biletin Qaytarılması və Dəyişdirilməsi</Link>
                        </li>
                        <li className='p-2'>
                            <Link to={"/"}>Məxfilik</Link>
                        </li >
                        <li className='p-2' >
                            <Link to={"/"}>Haqqımızda</Link>
                        </li>
                        <li className='p-2'>
                            <Link to={"/"}>Əlaqə</Link>
                        </li>
                    </ul>
                </div>
            </div>


        </div>
    )
}

export default Info