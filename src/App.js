
import { Carousel } from 'bootstrap';
import Navbar from './Components/Navbar';
import Task from './Components/Task';
import './Styles/Navbar.css'
import CarouselComponent from './Components/CarouselComponent';
import Trust from './Components/Trust';
import Card from './Components/Card';
import Service from './Components/Service';
import Team from './Components/Team';
import Records from './Components/Records';
import News from './Components/News';
import Footer from './Components/Footer';

function App() {
  return (
   <>
    <div className='background-container'>
      <div className="carousel-component">
        <CarouselComponent/>
        <div className="main-heading">
        <p className="main-para">RENEW YOUR LOOK</p>
        <h1>A TRADITION OF <br />QUALITY CLEANING</h1>
        <button className="main-button">Contact us</button>

      </div>
      </div>
      <div className="navbar-whole">
        <Navbar/>
      </div>
      <Task/>
      <Trust/>
      <Card/>
      <Service/>
      <Team/>
      <Records/>
      <News/>
      <Footer/>
    </div>
     
   </>
  );
}

export default App;
