import React from 'react'
import '../../assets/sass/infos/faq.scss'

function Faq() {
  const [visible, setVisible] = React.useState(false);
  return (
    <div>
      <h2 className='mt-5'>Ən Çox Verilən Suallar</h2>
      <div className='faq mt-5'>
        <div className='faq-ques'>
          <button className='but' onClick={() => setVisible(!visible)} > 1. Tədbirə giriş üçün Elektron Bileti çap etmək kifayətdirmi?</button>
        
            <div className='answer'  style={{display: visible ? 'block' : 'none'}}>
              <p>Bəli, elektron poçtunuza gələn e-bileti çap etməyiniz və yaxud mobil telefonunuzda göstərmək kifayətdir. Elektron biletlər çatdırılmır və ya fiziki biletlərlə əvəz olunmur.</p>
            </div>
          
        </div>

      </div>
    </div>
  )
}

export default Faq