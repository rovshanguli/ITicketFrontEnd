
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
import Info from './components/pages/Info';



function App() {
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
          <Route exact path="/support" element={<Info />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
