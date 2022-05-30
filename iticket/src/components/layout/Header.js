import React, { useState } from 'react'
import axios from 'axios';
import { Navbar, Container, Nav, Form, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Autocomplete, TextField } from '@mui/material';
import '../../assets/sass/layout/header.scss'





const style = {
  search: {
    position: 'absolute',
    top: '10%',

    // transform: 'translate(-50%, -50%)',
    width: "100%",
    height: "60px",
    bgcolor: 'background.paper',
    borderradius: '20px',
    boxShadow: 24,
    p: 4,
  },
  login: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "350px",
    height: "500px",
    bgcolor: 'background.paper',
    borderradius: '20px',
    boxShadow: 24,
    p: 4,
  },

  forgotstyle: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "350px",
    height: "250px",
    bgcolor: 'background.paper',
    border: 'px solid #000',
    boxShadow: 24,
    p: 4,
  },
  registerstyle: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "300px",
    height: "560px",
    bgcolor: 'background.paper',
    border: 'px solid #000',
    boxShadow: 24,
    p: 4,
  },
}




function Header() {

  const options = [
    { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { title: 'Goodfellas', year: 1990 },
    { title: 'The Matrix', year: 1999 },
    { title: 'Seven Samurai', year: 1954 },
  ]

  //Prop for api start
  const [fullname, setFullname] = useState();
  const [username, setUsername] = useState();
  const [number, setNumber] = useState();
  const [mail, setMail] = useState();
  const [password, setPassword] = useState();
  console.log(password);
  //Prop for Api End


  async function register(e) {
    debugger
    e.preventDefault();
    await axios.post('/api/account/register', {

    
      Email: mail,
      Password: password,
      FullName: fullname,
      UserName: username,
      PhoneNumber: number,
      

    }, { 'Content-Type': 'multipart/form-data' })
      .then(function (response) {

      })
      .catch(function (error) {
        

      });



  }



  const [searchOpen, setSearchOpen] = React.useState(false);
  const handleSearchOpen = () => setSearchOpen(true);
  const handleSearchClose = () => setSearchOpen(false);

  const [forgotOpen, setForgotOpen] = React.useState(false);
  const handleForgotOpen = () => {
    setForgotOpen(true)
    setLoginOpen(false)
  }
  const handleForgotClose = () => setForgotOpen(false);

  const [loginOpen, setLoginOpen] = React.useState(false);
  const handleLoginOpen = () => setLoginOpen(true);
  const [registerOpen, setRegisterOpen] = React.useState(false);
  const handleRegisterOpen = () => {
    setRegisterOpen(true)
    setLoginOpen(false)
  }
  const handleLoginClose = () => setLoginOpen(false);
  const handleRegisterClose = () => setRegisterOpen(false);


  return (
    <div >
      <div className='' >

        <Navbar expand="lg">
          <Container fluid>
            <NavLink className="nav-link navba" to="/"><img className='logo' src={require('../../assets/img/logoiticket.png')} alt="logo" /></NavLink>

            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <NavLink style={{ textDecoration: 'none', fontSize: '25px' }} className="nav-link px-3 navba" to="/allevents">Tədbirlər</NavLink>
                <NavLink style={{ textDecoration: 'none', fontSize: '25px' }} className="nav-link px-3 navba" to="/concerts">Konsertlər</NavLink>
                <NavLink style={{ textDecoration: 'none', fontSize: '25px' }} className="nav-link px-3 navba" to="/theatre"> Tamaşalar</NavLink>
                <NavLink style={{ textDecoration: 'none', fontSize: '25px' }} className="nav-link px-3 navba" to="/kids">Uşaqlar</NavLink>
                <NavLink style={{ textDecoration: 'none', fontSize: '25px' }} className="nav-link px-3 navba" to="/museums">Muzeylər</NavLink>
                <NavLink style={{ textDecoration: 'none', fontSize: '25px' }} className="nav-link px-3 navba" to="/films">Filmlər</NavLink>
              </Nav>
              <div className="basket d-flex justify-content-end">
                <NavLink style={{ textDecoration: 'none', fontSize: '25px' }} className="nav-link navba" to="/"><i className="far fa-heart"></i></NavLink>
                <NavLink style={{ textDecoration: 'none', fontSize: '25px' }} className="nav-link navba" to="/" onClick={handleSearchOpen}><i className="fas fa-search"></i></NavLink>
                <NavLink style={{ textDecoration: 'none', fontSize: '25px' }} className="nav-link navba" to="/basket"><i className="fas fa-shopping-basket"></i> <span>0</span></NavLink>
                <NavLink style={{ textDecoration: 'none', fontSize: '25px' }} className="nav-link navba" to="/" onClick={handleLoginOpen}> <i className="far fa-user-circle"></i> </NavLink>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className='col-12'>
          {/* Search Modal */}
          <Modal
            open={searchOpen}
            onClose={handleSearchClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"

          >
            <Box sx={style.search} style={{ backgroundColor: 'white' }}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                <Autocomplete
                  style={{ backgroundColor: 'white' }}
                  id="grouped-demo"
                  options={options}
                  groupBy={(option) => option.firstLetter}
                  getOptionLabel={(option) => option.title}
                  sx={{
                    width: 1300, ".MuiOutlinedInput-root": {
                      "&:focus": {
                        borderRadius: 50,
                        borderColor: "red",
                        borderWidth: 10,
                        bgcolor: "white"
                      }
                    }
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Typography>


            </Box>

          </Modal>
        </div>

        <Container>

          {/* Login Modal */}
          <Modal
            open={loginOpen}
            onClose={handleLoginClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style.login} className='overflow-hidden'>
              <div className='modal-size'>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  <span className='yellow'></span>
                  Login
                </Typography>
                <Typography component='span' id="modal-modal-body" sx={{ mt: 2 }}>
                  <Form>
                    <Form.Group className="mb-3 mt-5" controlId="formBasicEmail">

                      <Form.Control type="email" placeholder="Enter email" />

                    </Form.Group>
                    <Form.Group className="mb-3 mt-3" controlId="formBasicPassword">

                      <Form.Control outline="yellow" type="password" placeholder="Password" />
                    </Form.Group>
                    <Button className='login' onClick={handleForgotOpen}>Unutmusunuz?</Button>
                    <Button className="warning login mt-3" size="sm" type="submit"> Daxil Ol</Button>{' '}

                  </Form>
                  <p className='mt-5'>İTicket'də yenisiz?</p>
                  <Button className='regist' onClick={handleRegisterOpen}>Qeydiyyatdan Keçin</Button>
                </Typography>
              </div>


            </Box>

          </Modal>


          {/* Forgot Pass Modal */}
          <Modal
            open={forgotOpen}
            onClose={handleForgotClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >

            <Box sx={style.forgotstyle} className='overflow-hidden'>

              <div className='modal-size'>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  <span className='yellow'></span>
                  Şifrəni Sıfırla
                </Typography>
                <Typography component='span' id="modal-modal-description" sx={{ mt: 2 }}>
                  <Form>
                    <Form.Group className="mb-3 mt-5" controlId="formBasicForgotEmail">

                      <Form.Control type="email" placeholder="Enter email" />

                    </Form.Group>

                    <Button className="warning login" size="sm" type="submit"> Sıfırla</Button>{' '}

                  </Form>
                </Typography>
              </div>

            </Box>
          </Modal>

          {/* Register Modal */}
          <Modal
            open={registerOpen}
            onClose={handleRegisterClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style.registerstyle} className='overflow-hidden'>
              <div className='modal-size'>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  <span className='yellow'></span>
                  Register
                </Typography>
                <Typography component='span' id="modal-modal-body" sx={{ mt: 2 }}>
                  <Form onSubmit={(e) => register(e)}>

                  <Form.Group className="mb-3 mt-4" controlId="formBasicName">
                      <Form.Control type="text" onChange={(e) => setFullname(e.target.value)} placeholder="Ad / Soyad" />
                    </Form.Group>

                    <Form.Group className="mb-3 mt-4" controlId="formBasicSurname">
                      <Form.Control type="text" placeholder="İstifadəçi Adı" onChange={(e) => setUsername(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3 mt-4" controlId="formBasicMobilr">
                      <Form.Control type="string" placeholder="Mobile" onChange={(e) => setNumber(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3 mt-4" controlId="formBasicRegistEmail">
                      <Form.Control type="email" placeholder="Enter email" onChange={(e) => setMail(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3 mt-4" controlId="formBasicPassword">
                      <Form.Control outline="yellow" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>

                    <Button className="warning regist mt-4" size="sm" type="submit"> Qeydiyyat</Button>{' '}

                  </Form>


                </Typography>
              </div>

            </Box>
          </Modal>
        </Container>



      </div>
    </div>

  )
}

export default Header