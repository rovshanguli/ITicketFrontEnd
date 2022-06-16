import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/sass/infos/privacy.scss'

function Privacy() {
  return (

    <div className='row justify-content-between container'>
      <div className='col-lg-8 col-md-9 col-sm-12  mt-4'>
        <h2 className='mt-5'>Məxfilik</h2>
        <div className='privacy mt-5'>

          <div className='mt-4'>
            <b className='privacytext'>I. Şəxsi məlumatdan necə istifadə edirik</b>
            <p className='privacytext'>Sizin şəxsi məlumatlar bu Məxfilik Siyasəti və iTicket.az veb-səhifəsinin təşkilatçı və ya məkanla müqavilə əlaqələrinə əsasən xüsusi tədbirlə bağlı aldığınız biletlər üçün yalnız iTicket.az ilə paylaşılır. Şəxsi məlumatlarınız veb-səhifədə apardığınız əməliyyatlarla bağlı lazım olduqda tərəfimizdən sizinlə telefon və ya elektron poçt vasitəsi ilə əlaqə saxlamaq üçün istifadə olunur. Apardığınız əməliyyatlarla əlaqədar olmayan məlumatlarla bağlı tam razılığınız olmadan şəxsi məlumatlarınızdan istifadə edilməyəcək və üçüncü tərəfə ötürülməyəcək.</p>
          </div>
          <div className='mt-4'>
            <b className='privacytext'>II. Sosial şəbəkə plaginləri</b>
            <p className='privacytext'>Veb-səhifəmiz bir çox sosial şəbəkələr üçün sosial plaginlərdən ibarətdir. Sosial plagindən (məsələn, “Bəyənmək/Tövsiyyə etmək kimi) ibarət veb-səhifəyə daxil olduqda istifadəçinin brauzeri sosial şəbəkə serverlərinə bağlanır və sosial plaginlər üçün tələb olunan məzmun yüklənir. İstifadəçi öz sosial şəbəkə hesabına daxil olduqda, sosial şəbəkə həmin ziyarəti istifadəçinin sosial şəbəkə hesabındakı səhifəsinə bağlaya bilər. İstifadəçi həmin məlumatın sosial şəbəkəyə ötürülməsini istəmədikdə, veb-səhifəmizə baş çəkməzdən əvvəl həmin sosial şəbəkədən çıxmalıdır.  </p>
          </div>

          <div className='mt-4'>
            <b className='privacytext'>III. Veb brauzer kukiləri</b>
            <p className='privacytext'>Veb-səhifəmiz istifadəçi təcrübəsini artırmaq üçün “kukilər”dən istifadə edir. İstifadəçinin veb brauzeri həmin kukiləri qeyd edib saxlamaq məqsədilə, o cümlədən bəzən onlar barədə məlumatı izləmək məqsədilə onları sərt diskə yerləşdirir. İstifadəçi kukilərdən imtina etmək üçün öz veb brauzerini tənzimləməyi və ya təyin etməyi seçə bilər, ya da kukilərin göndərildiyi zaman bu barədə xəbərdar edilməsini seçə bilər. Bunu edərkən nəzərə alın ki, veb-səhifənin bəzi hissələri lazımi şəkildə işləməyə bilər.</p>
          </div>


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
          <li className='p-2'>
            <Link to={"/refund"}>Biletin Qaytarılması və Dəyişdirilməsi</Link>
          </li>
          <li className='p-2' style={{backgroundColor:'black',borderRadius:'20px'}} >
            <Link to={"/privacy"}  style={{color:'white'}}>Məxfilik</Link>
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

export default Privacy