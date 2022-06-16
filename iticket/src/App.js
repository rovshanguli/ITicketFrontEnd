
import '../src/App.scss';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/pages/Home';
import AllEvents from './components/pages/AllEvents';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Concerts from './components/pages/Concerts';
import Theatre from './components/pages/Theatre';
import Kids from './components/pages/Kids';
import Museums from './components/pages/Museums';
import Films from './components/pages/Films';

import About from './components/Infos/About';
import Contacts from './components/Infos/Contacts';
import ETicket from './components/Infos/ETicket';
import Faq from './components/Infos/Faq';
import Privacy from './components/Infos/Privacy';
import Refund from './components/Infos/Refund';
import Support from './components/Infos/Support';
import Terms from './components/Infos/Terms';
import Detail from './components/detail/Detail';
import Basket from './components/pages/basketpage/Basket';
import Profile from './components/pages/profile/Profile';
import MyOrders from './components/pages/profile/profileComponent/MyOrders';
import UpdatePassword from './components/pages/profile/profileComponent/UpdatePassword';
import Order from './components/pages/basketpage/basketcomponent/Order';
import LoadMore from './components/pages/LoadMore';
import Favorites from './components/pages/Favorites';
import Tourism from './components/pages/Tourism';
import ForgotPassword from './components/pages/profile/ForgotPassword';



function App() {
  if(localStorage.getItem('favorites') == null){
    localStorage.setItem('favorites',JSON.stringify([]))
  }
  return (
    
    <Router>
      <div>
        <Header />

    
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/allevents" element={<AllEvents />} />
          <Route exact path="/concerts" element={<Concerts />} />
          <Route exact path="/theatre" element={<Theatre />} />
          <Route exact path="/kids" element={<Kids />} />
          <Route exact path="/museums" element={<Museums />} />
          <Route exact path="/films" element={<Films />} />
          <Route exact path="/tourism" element={<Tourism />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contacts />} />
          <Route exact path="/eticket" element={<ETicket />} />
          <Route exact path="/faq" element={<Faq />} />
          <Route exact path="/privacy" element={<Privacy />} />
          <Route exact path="/refund" element={<Refund />} />
          <Route exact path="/support" element={<Support />} />
          <Route exact path="/terms" element={<Terms />} />
          <Route exact path="/detail/:id" element={<Detail />} />
          <Route exact path="/basket" element={<Basket />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/myorders" element={<MyOrders />} />
          <Route exact path="/updatepassword" element={<UpdatePassword />} />
          <Route exact path="/order" element={<Order />} />
          <Route exact path="/loadmore" element={<LoadMore />} />
          <Route exact path="/favorites" element={<Favorites />} />
          <Route exact path="/forgotpassword" element={<ForgotPassword />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;