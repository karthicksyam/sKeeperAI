import React from "react";
import "../InventoryComp/Inventory.css";
import profileicon from "../../../assets/profle-icon.png";

const Data = [
  { customerid: "example1", request: "request1", placeholder: "pholder1" },
  { customerid: "example2", request: "request2", placeholder: "pholder2" },
  { customerid: "example3", request: "request3", placeholder: "pholder3" },
  { customerid: "example4", request: "request4", placeholder: "pholder4" },
];
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
              <div className="email-text">
                <h3>email@example.com</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="inv-display-container">
          <table className="inventory-table">
            <tr className="table-headerRow">
              <th>CustomerID</th>
              <th>Request</th>
              <th>Placeholder</th>
            </tr>
            {Data.map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.customerid}</td>
                  <td>{val.request}</td>
                  <td>{val.placeholder}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
