import React from "react";
import "../DashboardComp/Dashboard.css";
import profileicon from "../../../assets/profle-icon.png";
import pet12 from "../../../assets/PET12.png";
import bopp30 from "../../../assets/BOPP30.png";

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
              {/* <div className="email-text">
                <h3>email@example.com</h3>
              </div> */}
            </div>
          </div>
        </div>
        <div className="display-container">
          <div className="display-container--one">
            <div className="graph-display">
              <img src={pet12} alt="" />
              <img src={bopp30} alt="" />
            </div>
            <div className="table-display">
              <table>
                <thead>
                  <tr>
                    <td>
                      <h3>Month</h3>
                    </td>
                    <td>
                      <h3>Predictions</h3>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2024-05-01</td>
                    <td>7316.3</td>
                  </tr>
                  <tr>
                    <td>2024-06-01</td>
                    <td>5394.3</td>
                  </tr>
                  <tr>
                    <td>2024-07-01</td>
                    <td>5363.5</td>
                  </tr>
                  <tr>
                    <td>2024-08-01</td>
                    <td>3931.1</td>
                  </tr>
                  <tr>
                    <td>2024-09-01</td>
                    <td>5396.6</td>
                  </tr>
                </tbody>
              </table>
              <table>
                <thead>
                  <tr>
                    <td>
                      <h3>Month</h3>
                    </td>
                    <td>
                      <h3>Predictions</h3>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2024-05-01</td>
                    <td>80.85</td>
                  </tr>
                  <tr>
                    <td>2024-06-01</td>
                    <td>80.85</td>
                  </tr>
                  <tr>
                    <td>2024-07-01</td>
                    <td>130.85</td>
                  </tr>
                  <tr>
                    <td>2024-08-01</td>
                    <td>87.85</td>
                  </tr>
                  <tr>
                    <td>2024-09-01</td>
                    <td>154.50</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
