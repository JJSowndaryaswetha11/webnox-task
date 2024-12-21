import React from 'react'
import '../Styles/Records.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay,faFaceSmile, faHome, faAward, faSprayCanSparkles } from '@fortawesome/free-solid-svg-icons';


function Records() {
  return (
   <>
   <div className="records-container">
    <div className="record-section1">
         <div className="play-icons">
                                    <FontAwesomeIcon 
                                      icon={faPlay} 
                                      style={{ color:'#74C0FC' , fontSize: "2rem" }} 
                                    />
                                  </div>
        <p className='record-para'>Lorem ipsum dolor sit amet.</p>
        <h5 className='record-heading'>Lorem, ipsum dolor dcjhdcbb?</h5>
        <button className='record-button'>Request callback</button>
    </div>
    {/* section-2 */}
    <div className="record-section2">
        <div className="record-icon1">
            <div className="record-icon">
            <FontAwesomeIcon 
                icon={faFaceSmile}style={{ color:'#74C0FC', fontSize: "2rem" }}  />
            </div>
            <div className="record-para1">
                <h4>385</h4>
                <p>Lorem ipsum dolor</p>
            </div>
        </div>
        {/* 2 */}
        <div className="record-icon1">
            <div className="record-icon">
            <FontAwesomeIcon 
                icon={faHome}style={{ color:'#74C0FC', fontSize: "2rem" }}  />
            </div>
            <div className="record-para1">
                <h4>842</h4>
                <p>Lorem ipsum dolor</p>
            </div>
        </div>
        {/* 3 */}
        <div className="record-icon1">
            <div className="record-icon"> <FontAwesomeIcon 
                icon={faAward}style={{ color:'#74C0FC', fontSize: "2rem" }}  /></div>
            <div className="record-para1">
                <h4>489</h4>
                <p>Lorem ipsum dolor </p>
            </div>
        </div>
        {/* 4 */}
        <div className="record-icon1">
            <div className="record-icon">
            <FontAwesomeIcon 
                icon={faSprayCanSparkles}style={{ color:'#74C0FC', fontSize: "2rem" }}  />
            </div>
            <div className="record-para1">
                <h4>1344</h4>
                <p>Lorem ipsum dolor</p>
            </div>
        </div>
    </div>
   </div>
   </>
  )
}

export default Records