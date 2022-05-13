import React from 'react'
import '../../assets/sass/infos/contact.scss'

function Contacts() {
  return (
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
  )
}

export default Contacts