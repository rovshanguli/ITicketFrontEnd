import React from 'react';
import '../../assets/sass/infos/eticket.scss';
import { Link } from 'react-router-dom';

function ETicket() {
  return (

    <div className='row justify-content-between container'>

      <div className='col-lg-8 col-md-9 col-sm-12  mt-4'>
        <div>
          <h2 className='mt-5'>Elektron Bilet</h2>
          <div className='eticket mt-5'>
            <div>
              <p className='etickettext'>Bu xidmət növündən istifadə etməklə, siz vaxtınıza qənaət edə və biletlərin alınma prosessini maksimum rahat və sadə şəkildə həyata keçirə bilərsiniz.</p>
            </div>
            <div className='mt-4'>
              <b className='etickettext'>Bu xidmət növü nəyə görə rahatdır?</b>
              <p className='etickettext'>Elektron bilet istifadəçinin şəxsi kabinetində elektron şəkildə saxlanılır və bu o deməkdir ki, siz onu unuda yaxud itirə bilməzsiniz. Elektron biletin oğurlanması mümkün deyil. Dünyanın istənilən yerində sadəcə internetə daxil olmaqla, elektron bileti əldə edə bilərsiniz. Vaxta qənaət: kassaya getmək, kuryer xidmətlərindən istifadə etmək, biletin çatdırılmasını gözləməyə ehtiyac yoxdur.</p>
            </div>
            <div className='mt-4'>
              <b className='etickettext'>Elektron bileti necə sifariş etmək olar?</b>
              <p className='etickettext'>Biletin ödənişini istənilən bank kartı vasitəsi ilə həyata keçirə bilərsiniz. Onlayn ödənişdən sonra biletiniz avtomatik olaraq, qeydiyyat zamanı istifadə etdiyiniz elektron ünvanınıza göndəriləcək. Bundan əlavə, siz “Mənim sifarişlərim” bölməsinə daxil olub bileti çap edə bilərsiniz.</p>
            </div>

            <div className='mt-4'>
              <b className='etickettext'>Elektron bileti necə dəyişmək və ya qaytarmaq olar?</b>
              <p className='etickettext'>Elektron biletin qaytarılması və ya dəyişdirilməsi həm onlayn, həm də 28 Mall və Gənclik Mall ticarət mərkəzlərində yerləşən satış məntəqəsində “Biletin qaytarılması və dəyişdirilməsi” bölümündə qeyd olunan qaydalara əsasən geri qaytarıla bilər.</p>
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
          <li className='p-2' style={{backgroundColor:'black',borderRadius:'20px'}}>
            <Link to={"/eticket"} style={{color:'white'}}>Elektron Bilet</Link>
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
          <li className='p-2'>
            <Link to={"/contact"}>Əlaqə</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ETicket