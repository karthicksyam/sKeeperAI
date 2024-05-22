import React from 'react'
import "../DashboardComp/Dashboard.css"
import profileicon from "../../../assets/profle-icon.png"; 

const Dashboard = () => {
  return (
    <div>
        <div className="header-display--combo">
          <div className="header-container">
            <h1 className="header-text">Dashboard</h1>
            <div className="header-contents">
              {/* <div className="question-icon">
                <img src={questionicon} alt="" />
              </div>
              <div className="settings-icon">
                <img src={settingsicon} alt="" />
              </div> */}
              <div className="profile-icon">
                <img src={profileicon} alt="" />
              </div>
              <div className="username-email--container">
                <div className="username-text">
                  <h3>Username</h3>
                </div>
                <div className="email-text">
                  <h3>email@example.com</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="display-container">
            <div className="display-container--one">
              <div className="graph-display">Graph</div>
              <div className="text-display">Text</div>
            </div>
          
          </div>
        </div>
    </div>
  )
}

export default Dashboard