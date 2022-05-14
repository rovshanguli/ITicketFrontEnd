import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/sass/infos/terms.scss'

function Terms() {
  return (
    <div className='row justify-content-between container'>
      <div className='col-lg-8 col-md-9 col-sm-12  mt-4'>
        <h2 className='mt-5'>Şərtlər Və Qaydalar</h2>
        <div className='terms mt-5'>
          <div>
            <b className='termstext'>Ümumi qaydalar və şərtlər</b>
            <p className='termstext'>iTicket.az veb-səhifəsindən istifadə etməklə siz aşağıdakı “Şərtlərə” və Azərbaycan Respublikasının qanunvericiliyi əsasında tənzimlənən bütün mövcud qanun və qaydalara riayət edəcəyinizi açıq şəkildə bildirirsiniz.  </p>
          </div>
          <div className='mt-4'>
            <b className='termstext'>Ticarət nişanları</b>
            <p className='termstext'>iTicket.az veb-səhifəsində olan loqotiplər iTicket.az veb-səhifəsinə məxsus qeydiyyatdan keçmiş əmtəə nişanlarıdır və heç bir halda iTicket.az şirkətinin qabaqcadan yazılı icazəsi olmadan istifadə edilə bilməz.</p>
          </div>
          <div className='mt-4'>
            <b className='termstext'>Müəlliflik hüququ</b>
            <p className='termstext'>Bu veb-səhifənin məzmunu və proqram təminatı iTicket.az şirkətinin mülkiyyəti hesab olunur və müəlliflik hüquqları ilə qorunur. Bu qayda və şərtlərin məhdud lisenziya təminatında açıq şəkildə ifadə olunanlar istisna olmaqla, yerdə qalan heç bir halda iTicket.az öz ticarət nişanları, müəlliflik hüquqları və ya digər özəl məlumatları ilə bağlı hər hansı zidd ifadə və ya nəzərdə tutulan hüquqa yol vermir.</p>
          </div>

          <div className='mt-4'>
            <b className='termstext'>İcazə verilən istifadə</b>
            <p className='termstext'>Sizə yalnız bu veb-səhifəsindəki səhifələrə baş çəkmək, onlara baxmaq və onların nüsxəsini öz şəxsi istifadəniz üçün saxlamaq hüququ verilir və siz şəxsi istifadə məqsədi ilə tədbirlərə və reklam xarakterli məlumata baxmaqdan, və ya şəxsi istifadəniz üçün biletləri almaqdan və ya iTicket.az tərəfindən xüsusilə nəzərdə tutulmuş şəxsi məqsəd üçün satmaqdan başqa, yerdə qalan digər heç bir halda hər hansı məqsədlə veb-səhifəsindəki materialın surətini çoxalda, yükləyə, dərc edə, dəyişdirə və ya digər bir şəkildə yaya bilməzsiniz.</p>
          </div>
          <div className='mt-4'>
            <b className='termstext'>Qeyd: İcazəsiz bilet satışı, veb-səhifədəki hər hansı robot, hörümçək və ya digər avtomatlaşdırılmış cihazdan icazəsiz istifadə daxil olmaqla, və bundan savayı, veb-səhifəsində qanunsuz və/və ya icazəsiz istifadə araşdırılacaq və buna qarşı müvafiq qanuni tədbirlər görüləcəkdir.</b>
          </div>


        </div>
      </div>
      <div className='col-lg-3 col-md-6 col-sm-12 mt-4 sidebar'>
                <ul>
                    <li className='p-2'>
                        <Link to={"/faq"} >Ən Çox Verilən Suallar</Link>
                    </li>
                    <li className='p-2'>
                        <Link to={"/support"} >Dəstək</Link>
                    </li>
                    <li className='p-2' style={{ backgroundColor: 'black', borderRadius: '20px' }}>
                        <Link to={"/terms"} style={{color:'white'}} >Şərtlər və Qaydalar</Link>
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

export default Terms