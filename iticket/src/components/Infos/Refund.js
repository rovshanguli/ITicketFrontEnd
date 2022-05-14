import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/sass/infos/refund.scss'

function Refund() {
  return (
    <div  className='row justify-content-between container'>
      <div className='col-lg-8 col-md-9 col-sm-12  mt-4'>
        <h2 className='mt-5'>Biletin Qaytarılması və Dəyişdirilməsi</h2>
        <div className='refund mt-5'>

          <p className='refundtext'>Tədbirin baş tutmasına 48 saat və ya daha çox müddət qaldıqda bilet geri qaytarılarsa və ya dəyişdirilərsə, bilet dəyərinin 30%-i tutulur.</p>
          <p className='refundtext'>Tədbirin baş tutmasına 48 saat və ya daha az müddət qaldıqda bilet geri qaytarılmır və ya dəyişdirilmir.</p>
          <p className='refundtext'>Şəhər kassalarından alınmış biletlər 28 Mall və Gənclik Mall ticarət mərkəzlərində yerləşən satış məntəqələrimizində dəyişdirilir və ya qaytarılır. Əlaqə telefonu: (+994) 12 493 33 77.</p>
          <p className='refundtext'>iTicket.AZ veb-səhifəsindən alınmış elektron biletləri qaytarmaq və ya dəyişdirmək üçün +994 12 493 33 77 nömrəsi ilə əlaqə saxlaya bilərsiniz.</p>
        </div>
      </div>
      <div className='col-lg-3 col-md-6 col-sm-12 mt-4 sidebar'>
      <ul>
          <li className='p-2'>
            <Link to={"/faq"} >Ən Çox Verilən Suallar</Link>
          </li>
          <li className='p-2'>
            <Link to={"/support"}>Dəstək</Link>
          </li>
          <li className='p-2'>
            <Link to={"/terms"}>Şərtlər və Qaydalar</Link>
          </li>
          <li className='p-2' >
            <Link to={"/eticket"} >Elektron Bilet</Link>
          </li>
          <li className='p-2' style={{backgroundColor:'black',borderRadius:'20px'}}>
            <Link to={"/refund"}  style={{color:'white'}}>Biletin Qaytarılması və Dəyişdirilməsi</Link>
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

export default Refund