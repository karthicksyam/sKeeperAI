import React from "react";
import "../InventoryComp/Inventory.css";
import profileicon from "../../../assets/profle-icon.png";

const Inventory = () => {
  return (
    <div>
      <div className="display-container">
        <div className="header-container">
          <h1 className="header-text">Inventory</h1>
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
              {/* <div className="email-text">
                <h3>email@example.com</h3>
              </div> */}
            </div>
          </div>
        </div>
        <div className="inv-display-container"></div>
      </div>
    </div>
  );
};

export default Inventory;
