import React from 'react'
import '../../assets/sass/footer.scss'

function Footer() {
  return (

    <div className='foot row mt-4'>
      <div className='col-lg-3 col-md-6 col-sm-12 mt-5'>
        <div className='logo mt-2'>
          <img src={require('../../assets/img/logoiticket.png')} alt="" />
        </div>
        <div>
          <h4 className='call'>Dəstək Xidməti:</h4>
          <h3 className='num heade'><a className='number' href="/">+994514555007</a></h3>
        </div>

      </div>
      <div className='col-lg-3 col-md-6 col-sm-12 mt-5'>
        <h3 className='heade'>Məlumat</h3>
        <div>

          <ul>
            <li><a href="/">Ən Çox Verilən Suallar</a></li>
            <li><a href="/">Dəstək</a></li>
            <li><a href="/">Şərtlər Və Qaydalar</a></li>
            <li><a href="/">Elektron Bilet</a></li>
            <li><a href="/">Biletin Qaytarılması Və Ya Dəyişdirilməsi</a></li>
            <li><a href="/">Məxfilik</a></li>
          </ul>
        </div>

      </div>
      <div className='col-lg-3 col-md-6 col-sm-12 mt-5'>
        <h3 className='heade'>İTicket</h3>
        <div>

          <ul>
            <li><a href="/">Haqqımızda</a></li>
            <li><a href="/">Məkanlar</a></li>
            <li><a href="/">Biletlərin Satış Məntəqələri</a></li>
            <li><a href="/">Əlaqə</a></li>
          </ul>
        </div>

      </div>
      <div className='col-lg-3 col-md-6 col-sm-12 mt-5'>
        <h3 className='heade'>Təhlükəsizlik</h3>
        <div>

          <p>Bütün ödənişlər Visa, Visa Electron, Maestro və MasterCard-dan 3D Secure ilə qorunur.</p>
          <img className='visalog' src={require('../../assets/img/visalog.png')} alt="" />
        </div>

      </div>
      <p className='mmc'>ITICKET®, «İTİKET» MMC-nin qeydə alınmış əmtəə nişanıdır.</p>
    </div>

  )
}

export default Footer