import React from 'react'
import { Link } from 'react-router-dom'
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
          <h3 className='num heade'><Link className='number' to="/">+994514555007</Link></h3>
        </div>

      </div>
      <div className='col-lg-3 col-md-6 col-sm-12 mt-5'>
        <h3 className='heade'>Məlumat</h3>
        <div>

          <ul>
            <li><Link to="/concerts">Ən Çox Verilən Suallar</Link></li>
            <li><Link to="/support">Dəstək</Link></li>
            <li><Link to="/">Şərtlər Və Qaydalar</Link></li>
            <li><Link to="/">Elektron Bilet</Link></li>
            <li><Link to="/">Biletin Qaytarılması Və Ya Dəyişdirilməsi</Link></li>
            <li><Link to="/">Məxfilik</Link></li>
          </ul>
        </div>

      </div>
      <div className='col-lg-3 col-md-6 col-sm-12 mt-5'>
        <h3 className='heade'>İTicket</h3>
        <div>

          <ul>
            <li><Link to="/">Haqqımızda</Link></li>
            <li><Link to="/">Məkanlar</Link></li>
            <li><Link to="/">Biletlərin Satış Məntəqələri</Link></li>
            <li><Link to="/">Əlaqə</Link></li>
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