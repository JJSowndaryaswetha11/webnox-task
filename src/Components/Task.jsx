import React from 'react';
import '../Styles/Task.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandsBubbles, faBroom, faHouse } from '@fortawesome/free-solid-svg-icons';

function Task() {
  return (
    <div className='task-container'>
        <div className="card-cart">
          {/* card-1 */}
          <div className="card card-1" style={{ width: '18rem', height: '250px' }}>
            <div className="card-body body-1">
              {/* Icon */}
              <div className="card-icon">
                <FontAwesomeIcon 
                  icon={faHandsBubbles} 
                  style={{ color: "#74C0FC", fontSize: "2rem" }} 
                />
              </div>
              {/* Heading */}
              <div className="heading">
                <h5>Professional Cleaning</h5>
              </div>
              {/* Paragraphs */}
              <div className="card-text">
                <p className="first-heading">House keeping is responsible for</p>
                <p className="second-heading">minor security in hotel ecosystem for</p>
                <p className="third-heading">food and cleaner through</p>
              </div>
            </div>
          </div>
          {/* Card 2 */}
          <div className="card card-2" style={{ width: '18rem', height: '250px' }}>
            <div className="card-body body-2">
              {/* Icon */}
              <div className="card-icon">
                <FontAwesomeIcon 
                  icon={faBroom} 
                  style={{ color: "#74C0FC", fontSize: "2rem" }} 
                />
              </div>
              {/* Heading */}
              <div className="heading">
                <h5>Fast and efficient</h5>
              </div>
              {/* Paragraphs */}
              <div className="card-text">
                <p className="first-heading">Our aim is to clean the house</p>
                <p className="second-heading">Your Aim will help! the through digital</p>
                <p className="third-heading">innovation world submit</p>
              </div>
            </div>
          </div>
          <div className="card card-3" style={{ width: '18rem', height: '250px' }}>
            <div className="card-body body-3">
              {/* Icon */}
              <div className="card-icon">
                <FontAwesomeIcon icon={faHouse} style={{ color: "#74C0FC", fontSize: "2rem" }} />
              </div>
              {/* Heading */}
              <div className="heading">
                <h5>Renew Your look</h5>
              </div>
              {/* Paragraphs */}
              <div className="card-text">
                <p className="first-heading">House keeping is responsible for</p>
                <p className="second-heading">minor security in hotel ecosystem for</p>
                <p className="third-heading">food and cleaner through</p>
              </div>
            </div>
          </div>
        </div>
        <div className="section-2">
          <div className='first-para'>
            <h4>A clean house is a  <br />happy place!</h4>
            <p>washla has met the demands of growing<br /> World</p>
          </div>
          <div className='second-para'>
            <p>Lorem ipsum dolor, sit amet consec adipisicing elit. Repellendus, eum! <br />
            Lorem ipsum dolor, sit amet consec adipisicing elit.</p>
          </div>
          <div className='third-para'>
          <p>Lorem ipsum dolor, sit amet consec adipisicing elit. Repellendus, eum! <br />
          Lorem ipsum dolor, sit amet consec adipisicing elit</p>
          </div>
        </div>
      </div>
  );
}

export default Task;
