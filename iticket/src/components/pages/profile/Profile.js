import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../../../assets/sass/profile/profile.scss'


function Profile() {
  return (
    <div className='row justify-content-between container'>
      <div className='col-lg-8 col-md-9 col-sm-12  mt-4'>
        <h2 className='mt-5'>Şəxsi Məlumatlar</h2>
        <div className='profile mt-5'>
          <Form>
            <div className='mt-4 profilemenu'>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='proflab'>E-poçt</Form.Label>
                <Form.Control type="email" placeholder="" />
              
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label className='proflab'>Ad</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>
              
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label className='proflab'>Soy Ad</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>

            

            </div>
            <div className='mt-4 profilemenu'>
            <Form.Group className="mb-3" controlId="formBasicNumber">
                <Form.Label className='proflab'>Telefon Nömrəsi</Form.Label>
                <Form.Control type="number" placeholder="" />
              
              </Form.Group>

              <Form.Group className="mb-3 birthday" controlId="formBasicDatetime">
                <Form.Label className='proflab'>Doğum Günü</Form.Label>
                <Form.Control  type="date" placeholder="" />
              </Form.Group>
              
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Label className='proflab'>Cins</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>
            </div>

            <div className='mt-4 '>
              <div className='profilebut'>
              <Button className='profilebutton' type="submit">
               Dəyişiklikləri Yadda Saxla
              </Button>
              </div>
           
            </div>
          </Form>



        </div>
      </div>
      <div className='col-lg-3 col-md-6 col-sm-12 mt-4 profilesidebar'>
        <ul>
          <li className='p-2' style={{ backgroundColor: 'black', borderRadius: '20px' }}>
            <Link to={"/profile"} style={{ color: 'white' }} >Profil</Link>
          </li>
          <li className='p-2'>
            <Link to={"/myorders"}>Mənim Sifarişlərim</Link>
          </li>
          <li className='p-2'>
            <Link to={"/updatepassword"}>Şifrəni Yenilə</Link>
          </li>
          <li className='p-2'>
            <Link to={"/logout"}>Çıxış</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Profile