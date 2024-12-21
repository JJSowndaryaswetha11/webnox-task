import React from 'react'
import '../Styles/Team.css'

function Team() {
  return (
    <>
    <div className="team-container">
        <div className="team-heading">
            <p className="team-heading1">MEET OUR</p>
            <h6 className="team-heading2">Team</h6>
            <p className="team-heading3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, fugit.</p>
        </div>
        <div className="team-members">
            <div className="team-member1">
                <div className="team-card1">
                <img src="./Images/member-1.jpg" alt="" width={300} height={400} />
               <div className="team-para1">
            <h6 className="team-name1">
             Monica Gordon
            </h6>
              <p className="team-work"> House Cleaning</p>
               </div>
                </div>
            </div>
            <div className="team-member1">
                <div className="team-card1">
                    <img src="./Images/background-2.jpg" alt="" width={300} height={400} />
                    <div className="team-para1">
                    <h6 className="team-name1">
             Loura Gordon
            </h6>
              <p className="team-work">Cleaner</p>
               </div>
                </div>
            </div>
            <div className="team-member1">
                <div className="team-card1">
                <img src="./Images/member-2.jpg" alt="" width={300} height={400} />
                <div className="team-para1">
                <h6 className="team-name1">
             Sara Gordon
            </h6>
              <p className="team-work"> House Cleaner</p>
               </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Team