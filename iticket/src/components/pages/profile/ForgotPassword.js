import React,{useState} from 'react';
import { Button, Form } from 'react-bootstrap';
import '../../../assets/sass/profile/forgotpassword.scss';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ForgotPassword() {
  const [password, setPassword] = useState();
  const [checkpass, setCheckpass] = useState();
  const { email } = useParams();
  const { token } = useParams();
  function reset(e) {
    debugger
    let obj ={
      password: password,
      email: email,
      token: token
    }
    e.preventDefault()
    if(password === checkpass){
      axios.post('/api/Account/ResetPassword',obj)
    }
  }

  return (
    <div className='row justify-content-between container'>
    <div className='col-lg-8 col-md-9 col-sm-12  mt-4'>
      <h2 className='mt-5'>Şifrəni Yenilə</h2>
      <div className='passwords mt-5'>
        <Form onSubmit={(e) => reset(e)}>
          <div className='mt-4 updatepassw'>
          

            <Form.Group className="mb-3"  onChange={(e) => setPassword(e.target.value)} controlId="formBasicPassword">
              <Form.Label className='labtext'>Yeni Şifrə</Form.Label>
              <Form.Control type="password" placeholder="" />
            </Form.Group>

            <Form.Group className="mb-3" onChange={(e) => setCheckpass(e.target.value)} controlId="formBasicConfirmPassword">
              <Form.Label className='labtext'>Yeni Şifrəni Təsdiqlə </Form.Label>
              <Form.Control type="password" placeholder="" />
            </Form.Group>


          </div>
          <div className='mt-4 '>
            <div className='passbut'>
              <Button className='passbutton' type="submit">
                Dəyişiklikləri Yadda Saxla
              </Button>
            </div>

          </div>
        </Form>








      </div>
    </div>
  
  </div>
  )
}

export default ForgotPassword