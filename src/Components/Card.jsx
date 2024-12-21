import React from 'react'
import '../Styles/Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandsBubbles, faBroom, faHouse } from '@fortawesome/free-solid-svg-icons';

function Card() {
  return (
    <>
    <div className="whole-card">
        <div className="image-card">
            <img src="./Images/background-2.jpg" alt="" width={'500px'} height={'300px'} />
            <div className="para-card">
             <div className="para-card-heading">
             <p className="para-card-para1">
            Maid for you
           </p>
           <h4 className="para-card-heading1">A cleaner place is a safer place</h4>
           <p className="para-card-para2">
            Sapiente voluptate alias consequuntur sunt quod amet rem consequatur numquam eius nisi? <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
           </p>
             </div>
             <div className="para-card-icon">
                <div className="para-card-icon1">
                   <div className="card-icon">
                                   <FontAwesomeIcon 
                                     icon={faHandsBubbles} 
                                     style={{ color: "#74C0FC", fontSize: "2rem" }} 
                                   />
                     </div> 
                     <div className="para-card-heading">
                        <h4>Professional Cleaning</h4>
                     </div>
                     <div className="para-card-paragraph">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, nemo! Tempora aut at velit dignissimos.</p>
                     </div>
                </div>
                <div className="para-card-icon1">
                <div className="card-icon">
                                   <FontAwesomeIcon 
                                     icon={faBroom} 
                                     style={{ color: "#74C0FC", fontSize: "2rem" }} 
                                   />
                     </div> 
                     <div className="para-card-heading">
                        <h4>Fast and efficient</h4>
                     </div>
                     <div className="para-card-paragraph">
                        <p>Lorem ipsum dolor sit amet consectetur <br />Lorem ipsum dolor sit amet.</p>
                     </div>

                </div>
             </div>
            </div>

        </div>
    </div>
    </>
  )
}

export default Card