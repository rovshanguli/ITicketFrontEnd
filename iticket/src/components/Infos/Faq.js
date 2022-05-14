import React from 'react'
import { Link } from 'react-router-dom';
import '../../assets/sass/infos/faq.scss'

function Faq() {
  const [visible, setVisible] = React.useState(false);
  const [where, setWhere] = React.useState(false);
  const [delivery, setDelivery] = React.useState(false);
  const [kids, setKids] = React.useState(false);
  const [minors, setMinors] = React.useState(false);
  const [promo, setPromo] = React.useState(false);
  const [mydetail, setMydetail] = React.useState(false);
  const [stolen, setStolen] = React.useState(false);
  const [returntick, setReturntick] = React.useState(false);
  const [canceled, setCanceled] = React.useState(false);
  const [outside, setOutside] = React.useState(false);
  const [venue, setVenue] = React.useState(false);
  const [reuqired, setRequired] = React.useState(false);

  return (
    <div className='row justify-content-between container'>
      <div className='col-lg-8 col-md-9 col-sm-12  mt-4' >
        <h2 className='mt-5'>Ən Çox Verilən Suallar</h2>
        <div className='faq mt-5'>
          <div className='faq-ques mt-3'>
            <button className='but' onClick={() => setVisible(!visible)} style={{ border: visible ? 'none' : '' }} > 1. Tədbirə giriş üçün Elektron Bileti çap etmək kifayətdirmi?</button>

            <div className='answer' style={{ display: visible ? 'block' : 'none' }}>
              <p>Bəli, elektron poçtunuza gələn e-bileti çap etməyiniz və yaxud mobil telefonunuzda göstərmək kifayətdir. Elektron biletlər çatdırılmır və ya fiziki biletlərlə əvəz olunmur.</p>
            </div>

          </div>
          <div className='faq-ques mt-3'>
            <button className='but' onClick={() => setWhere(!where)} style={{ border: where ? 'none' : '' }} > 2. Biletləri nağd ödənişlə haradan əldə etmək olar?</button>

            <div className='answer' style={{ display: where ? 'block' : 'none' }}>
              <p>Biletləri şəhərin bütün kassalarından, “28 Mall”, “Ganjlik Mall” ticarət mərkəzlərindən, həmçinin Heydər Əliyev Sarayının kassasından, ASAN Xidmət mərkəzlərindən və teatr kassalarından əldə edə bilərsiniz. Satış məntəqələri haqqında ətraflı məlumatla «Biletlərin satış məntəqələri» bölümündə tanış ola bilərsiniz.</p>
            </div>

          </div>
          <div className='faq-ques mt-3'>
            <button className='but' onClick={() => setDelivery(!delivery)} style={{ border: delivery ? 'none' : '' }} > 3. Çatdırılma xidməti:</button>

            <div className='answer' style={{ display: delivery ? 'block' : 'none' }}>
              <p>Çatdırılma xidməti, şənbə və bazar günləri istisna olmaqla, tədbir satışa çıxdığı andan tədbirə 5 gün qalanadək Bakı şəhəri daxilində 4-5 iş günü ərzində həyata keçirilir.</p>
            </div>

          </div>
          <div className='faq-ques mt-3'>
            <button className='but' onClick={() => setKids(!kids)} style={{ border: kids ? 'none' : '' }} > 4. Neçə yaşından etibarən uşaqlara “Uşaq tədbirlərinə” bilet alınmalıdır?</button>

            <div className='answer' style={{ display: kids ? 'block' : 'none' }}>
              <p>Uşaq tədbirləri üçün biletlər 3 yaşdan etibarən əldə olunmalıdır.
                Yaş məhdudiyyəti haqqında məlumatı tədbirin səhifəsində tapa bilərsiniz.</p>
            </div>

          </div>
          <div className='faq-ques mt-3'>
            <button className='but' onClick={() => setMinors(!minors)} style={{ border: minors ? 'none' : '' }} > 5. Böyüklər üçün nəzərdə tutulmuş tədbirlərə neçə yaşdan etibarən uşaqların girişinə icazə verilir?</button>

            <div className='answer' style={{ display: minors ? 'block' : 'none' }}>
              <p>Böyüklər üçün nəzərdə tutulmuş tədbirlərə 6 yaşdan kiçik uşaqlar buraxılmır. 6 yaşdan yuxarı uşaqlar yalnız böyüklərin müşayiəti ilə əlavə biletlə tədbirə daxil ola bilərlər.</p>
            </div>

          </div>
          <div className='faq-ques mt-3'>
            <button className='but' onClick={() => setPromo(!promo)} style={{ border: promo ? 'none' : '' }} >6. Saytdan sifariş etdikdə “Promo code” bölməsini doldurmaq mütləqdir?</button>

            <div className='answer' style={{ display: promo ? 'block' : 'none' }}>
              <p>Xeyr, “Promo kod” bölməsi yalnız təşkilatçılar öz tədbirinə müəyyən endirim təqdim etdikdə doldurulur.“Promo kod” tamaşaçılara tədbirin təşkilatçıları və ya iTicket.AZ tərəfindən təqdim edilməlidir.</p>
            </div>

          </div>
          <div className='faq-ques mt-3'>
            <button className='but' onClick={() => setMydetail(!mydetail)} style={{ border: mydetail ? 'none' : '' }} >7. Mən nə üçün qeydiyyatdan keçməliyəm?</button>

            <div className='answer' style={{ display: mydetail ? 'block' : 'none' }}>
              <p>Məlumatlarınızın qeydiyyatı bizə biletlər haqqında, bilet mövcudluğu və hər hansı bir sifarişinizin yeniləməsi haqqında məlumat verməyə imkan verir.</p>
            </div>

          </div>
          <div className='faq-ques mt-3'>
            <button className='but' onClick={() => setStolen(!stolen)} style={{ border: stolen ? 'none' : '' }} >8. Biletlərim itirildikdə, oğurlandıqda, zədələndikdə nə etməliyəm?</button>

            <div className='answer' style={{ display: stolen ? 'block' : 'none' }}>
              <p>Tədbirdən asılı olaraq fiziki Biletlər itirildikdə və ya oğurlandıqda biletin dəyərinin 15% - ni tutmaqla bərpa edilə bilər. E- biletləri onlayn hesabınızdan yenidən yükləyə bilərsiniz.
                Xahiş edirik, unutmayın ki, suyun, palçığın, istiliyin və ya günəş işığının təsiri biletinizə zərər verə bilər. Əgər biletin hər hansı bir hissəsi zədələnibsə, sizə tədbirin keçirilmə məkanına daxil olmağa imtina edilə bilər.</p>
            </div>

          </div>
          <div className='faq-ques mt-3'>
            <button className='but' onClick={() => setReturntick(!returntick)} style={{ border: returntick ? 'none' : '' }} >9. Biletləri geri qaytarmaq məcburiyyəti olduqda nə etməliyəm?</button>

            <div className='answer' style={{ display: returntick ? 'block' : 'none' }}>
              <p>Biletlərinizi diqqətlə seçin. Ödəniş biletlərin sifarişi təsdiqləndikdən dərhal sonra həyata keçiriləcək.
                Tədbirin baş tutmasına 48 saat və ya daha çox müddət qaldıqda bilet geri qaytarılarsa və ya dəyişdirilərsə, biletin dəyərinin 30%-i tutulur.
                Tədbirin baş tutmasına 48 saat və ya daha az müddət qaldıqda bilet geri qaytarılmır və ya dəyişdirilmir.
                Biletlərin yenidən satışı qadağandır və biletlərin ləğvi ilə nəticələnə bilər.</p>
            </div>

          </div>
          <div className='faq-ques mt-3'>
            <button className='but' onClick={() => setCanceled(!canceled)} style={{ border: canceled ? 'none' : '' }} >10. Tədbir təxirə salınarsa, məkanı dəyişərsə və ya ləğv olunarsa, biletlərimi dəyişə, qaytara bilərəmmi?</button>

            <div className='answer' style={{ display: canceled ? 'block' : 'none' }}>
              <p>Tədbir təxirə salınarsa və ya məkanı dəyişərsə, biletləriniz yeni zamana və ya yeni məkana etibarlı olacaqdır.
                Yeni tarix və ya məkan sizi qane etmədiyi təqdirdə, biletlərinizi qaytarıb ödənişinizi tam geri ala bilərsiniz.
                Tədbir ləğv olunarsa, ödənişiniz geri qaytarılacaqdır.</p>
            </div>

          </div>
          <div className='faq-ques mt-3'>
            <button className='but' onClick={() => setOutside(!outside)} style={{ border: outside ? 'none' : '' }} >11. Mən Azərbaycandan kənarda yaşayıram. Bilet ala bilərəm?</button>

            <div className='answer' style={{ display: outside ? 'block' : 'none' }}>
              <p>Bəli, ala bilərsiniz. Biletləri istənilən yer və zaman iTicket.AZ veb səhifəmiz və ya mobil əlavəmiz vasitəsilə onlayn əldə edə bilərsiniz.</p>
            </div>

          </div>
          <div className='faq-ques mt-3'>
            <button className='but' onClick={() => setVenue(!venue)} style={{ border: venue ? 'none' : '' }} >12. Məkana daxil olmaq üçün nə etməliyəm?</button>

            <div className='answer' style={{ display: venue ? 'block' : 'none' }}>
              <p>Məkana daxil olmaq üçün tamaşaçıların etibarlı bileti olmalıdır.
                Yaşı 16-dan az olan bilet sahibləri yalnız əlavə bilet və etibarlı şəxsiyyət vəsiqəsi olan böyüklərin (18+) müşayiəti ilə tədbirdə iştirak edə bilərlər.</p>
            </div>

          </div>
          <div className='faq-ques mt-3'>
            <button className='but' onClick={() => setRequired(!reuqired)} style={{ border: reuqired ? 'none' : '' }} >13. COVID-19 pasportum yoxdur? Tədbirdə iştirak edə bilərəm?</button>

            <div className='answer' style={{ display: reuqired ? 'block' : 'none' }}>
              <p>18 yaşdan yuxarı şəxslər COVID-19 vaksin sertifikatı, COVİD-19 immunitet sertifikatı və ya COVID-19 əks-göstəriş sertifikatı təqdim etməklə tədbirlərə daxil ola bilərlər.
                COVID-19 sertifikatı olmayan tamaşaçılar tədbirə buraxılmır və əldə etdikləri biletlər geri qaytarılmır.</p>
            </div>

          </div>



        </div>
      </div>

      <div className='col-lg-3 col-md-6 col-sm-12 mt-4 sidebar'>
      <ul>
          <li className='p-2' style={{backgroundColor:'black',borderRadius:'20px'}}>
            <Link to={"/faq"} style={{color:'white'}}>Ən Çox Verilən Suallar</Link>
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

export default Faq