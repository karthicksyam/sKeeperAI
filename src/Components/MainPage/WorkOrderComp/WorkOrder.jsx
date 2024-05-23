import React, { useState } from "react";
import "../WorkOrderComp/WorkOrder.css";
// import "../WorkOrderComp/WOForm";
import profileicon from "../../../assets/profle-icon.png";
import WOForm from "./WOForm/WOForm";
import WOTable from "./WOTable/WOTable";

const WorkOrder = () => {
  return (
    <div>
      <div className="display-container">
        <div className="header-container">
          <h1 className="header-text">Work Orders</h1>
          <div className="btn">Add</div>
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
        <div className="workorder-display-container">
          <WOTable />
          {/* <WOForm /> */}
        </div>
      </div>
    </div>
  );
};

export default WorkOrder;
