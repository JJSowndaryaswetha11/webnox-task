import React from 'react'
import '../Styles/Service.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandsBubbles, faBroom, faHouse } from '@fortawesome/free-solid-svg-icons';
function Service() {
  return (
   <>
   <div className="service-container">
    {/* service-heading */}
    <div className="service-heading">
        <p className="service-heading-para">why choose us</p>
        <h4 className="service-heading1">Our Great Services</h4>
        <p className="service-heading-para1">Lorem ipsum dolor sit amet consectetur adipisicing sit amet consectetur adipisicing</p>
    </div>
    <div className="service-cards">
        <div className="service-card1">
            <div className="card-icons">
                            <FontAwesomeIcon 
                              icon={faHandsBubbles} 
                              style={{ color: "black", fontSize: "2rem" }} 
                            />
                          </div>
            <h4 className="service-card-heading1">Windows Cleaning</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, optio?</p>
        </div>
        <div className="service-card2">
        <div className="card-icons">
                            <FontAwesomeIcon 
                              icon={faHandsBubbles} 
                              style={{ color: "black", fontSize: "2rem" }} 
                            />
                          </div>
            <h4 className="service-card-heading1">Office cleaning</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, optio?</p>
        </div>
        <div className="service-card3">
        <div className="card-icons">
                            <FontAwesomeIcon 
                              icon={faHandsBubbles} 
                              style={{ color: "black", fontSize: "2rem" }} 
                            />
                          </div>
            <h4 className="service-card-heading1">Home cleaning</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, optio?</p>
        </div>
    </div>
   </div>
   </>
  )
}

export default Service