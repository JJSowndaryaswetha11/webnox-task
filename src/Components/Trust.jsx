import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleGroup, faPhone, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import '../Styles/Trust.css';

function Trust() {
  return (
    <div className='trust-container'>
        <div className="trust-heading">
            <p className='trust-para1'>WHY CHOOSE US</p>
            <h4 className='trust-heading1'>Tradition of Trust</h4>
            <p className='trust-para2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, laborum! <br />Lorem, ipsum dolor.</p>
        </div>
        <div className="icon-container">
           <div className="first-icon">
            <div className="icon-circle">
            <FontAwesomeIcon icon={faPeopleGroup} style={{color: "#74C0FC", fontSize: '2em'}} />
            </div>
            <h4>Professional Team</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, neque?</p>
           </div>
           <div className="second-icon">
           <div className="icon-circle">
            <FontAwesomeIcon icon={faPhone} style={{color: "#74C0FC", fontSize: '2em'}} />
            </div>
            <h4>24/7 Support</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, neque?</p>
           </div>
           <div className="third-icon">
           <div className="icon-circle">
            <FontAwesomeIcon icon={faCheckCircle} style={{color: "#74C0FC", fontSize: '2em'}} />
            </div>
            <h4>Service Guarentee</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, neque?</p>
           </div>
        </div>
    </div>
  );
}

export default Trust;
