import React from 'react';
import '../../assets/sass/infos/about.scss';
import { Link } from 'react-router-dom'


function About() {
  return (

    <div className='row justify-content-between container'>

      <div className='col-lg-8 col-md-9 col-sm-12  mt-4'>
        <div>
          <h2 className='mt-5'>Haqqımızda</h2>
          <div className='about mt-5'>

            <div className='about-title'>
              <img className='abouttitle' src={require('../../assets/img/info/about-title.png')} alt="about-title" />
            </div>
            <div className='image mt-4'>
              <img className='about-photo' src={require('../../assets/img/info/theatre.jpg')} alt="about-title" />
            </div>
            <div className='mt-4'>
              <p className='abouttext'>
                <b>ITicket.az</b>- 2016-cı ildən etibarən öz fəaliyyətinə başlamışdır. iTicket.az həm onlayn həm də offlayn olaraq konsertlərə, teatrlara, idman və əyləncə tədbirlərinə bilet satışını reallaşdırır. Bakı şəhərində 20-yə yaxın satış nöqtəsi iTicket.az idarəçiliyi altında fəaliyyət göstərir. iTicket.az IV İslam Həmrəyliyi Oyunları, 2017, 2018 və 2019 Formula 1 Azərbaycan Qran-Pri yarışları, 2017 Voleybol üzrə qadınlararası Avropa Çempionatı, UEFA Çempionlar Liqasının qrup mərhələsi, Bakıda velosiped idmanının “BMX Racing” növü üzrə 2018-ci il dünya çempionatı, ЖАРА'18 və 19 musiqi festivalı və AFFA kimi tədbirlərin rəsmi əməkdaşı və bilet satışı üzrə təchizatçısıdır. iTicket.az bilet alışı prosessinin daha səmərəli və rahat etmək üçün öz məhsul və xidmətlərini təkmilləşdirmək üçün çalışır.
              </p>

            </div>
            <div className='mt-4'>
              <p className='abouttext'><b> Şirkətin adı</b>- «İTİCKET» MMC</p>
              <p className='abouttext'></p>
              <p className='abouttext'><b>VÖEN</b>- 1701956271 </p>
              <p className='abouttext'><b>Dövlət Reyestr Çıxarışın nömrəsi</b>- 1601020018130100</p>
              <p className='abouttext'><b>Ünvan</b>- Azərbaycan, Bakı, Səməd Vurğun 34, AF Mall 14-cü mərtəbə, ofis 36 AZ1014</p>

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
            <Link to={"/eticket"} >Elektron Bilet</Link>
          </li>
          <li className='p-2'>
            <Link to={"/refund"}>Biletin Qaytarılması və Dəyişdirilməsi</Link>
          </li>
          <li className='p-2'>
            <Link to={"/privacy"}>Məxfilik</Link>
          </li >
          <li className='p-2' style={{backgroundColor:'black',borderRadius:'20px'}}>
            <Link style={{color:'white'}} to={"/about"}>Haqqımızda</Link>
          </li>
          <li className='p-2'>
            <Link to={"/contact"}>Əlaqə</Link>
          </li>
        </ul>
      </div>
    </div>

  )
}

export default About