import React from 'react';
import '../Styles/Navbar.css'
import Navbar from './Navbar';

const CarouselComponent = () => {
  return (
    <div className="carousel-container">
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="carousel-background">
            <img src="/Images/background.jpg" className="d-block w-100" alt="Background" />
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-background">
          <img src="/Images/background.jpg" className="d-block w-100" alt="Background" />
          </div>
        </div>
      </div>
      {/* Carousel controls */}
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      
    </div>
    </div>
  );
}

export default CarouselComponent;
