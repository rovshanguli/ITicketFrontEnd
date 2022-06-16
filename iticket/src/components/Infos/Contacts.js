import React from 'react';
import '../../assets/sass/infos/contact.scss';
import { Link } from 'react-router-dom';
function Contacts() {
  return (

    <div className='row justify-content-between container'>

      <div className='col-lg-8 col-md-9 col-sm-12  mt-4'>
        <div>
          <h2 className='mt-5'>Əlaqə</h2>
          <div className='contact mt-5'>

            <div className='mt-4'>
              <b className='contacttext'>Ünvan</b>
              <p className='contacttext'>AF Mall 14-cü mərtəbə, ofis 36. Səməd Vurğun 34, AZ1014, Bakı, Azərbaycan</p>
            </div>
            <div className='mt-4'>
              <b className='contacttext'>Telefon</b>
              <p className='contacttext'>+994 51 455-50-07</p>
            </div>

            <div className='mt-4'>
              <b className='contacttext'>Bütün təklif və iradlarınız üçün:</b>
              <p className='contacttext'>info@iticket.az</p>
            </div>


          </div>
        </div>
      </div>
      <div className='col-lg-3 col-md-6 col-sm-12 mt-4 sidebar'>
        <ul>
          <li className='p-2'>
            <Link to={"/faq"}>Ən Çox Verilən Suallar</Link>
          </li>
          <li className='p-2'>
            <Link to={"/support"}>Dəstək</Link>
          </li>
          <li className='p-2'>
            <Link to={"/terms"}>Şərtlər və Qaydalar</Link>
          </li>
          <li className='p-2'>
            <Link to={"/eticket"}>Elektron Bilet</Link>
          </li>
          <li className='p-2'>
            <Link to={"/refund"}>Biletin Qaytarılması və Dəyişdirilməsi</Link>
          </li>
          <li className='p-2'>
            <Link to={"/privacy"}>Məxfilik</Link>
          </li >
          <li className='p-2' >
            <Link to={"/about"}>Haqqımızda</Link>
          </li>
          <li className='p-2' style={{backgroundColor:'black',borderRadius:'20px'}}>
            <Link style={{color:'white'}} to={"/contact"}>Əlaqə</Link>
          </li>
        </ul>
      </div>
    </div>



  )
}

export default Contacts