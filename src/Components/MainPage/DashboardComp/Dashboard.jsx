import React, { useState, useEffect } from "react";
import axios from "axios";
import "../DashboardComp/Dashboard.css";
import profileicon from "../../../assets/profle-icon.png";
import pet12 from "../../../assets/PET12.png";
import bopp30 from "../../../assets/BOPP30.png";

const Dashboard = () => {
  const [data, setData] = useState({ forecastsBOPP30: [], forecastsPET12: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:5000/dashboard");
      setData(response.data);
      setLoading(false);
    } catch (error) {
      setError("An error ocurred while fetching");
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

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
              <Table data={data.forecastsBOPP30} title="BOPP30 Forecasts" />
              <Table data={data.forecastsPET12} title="PET12 Forecasts" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Table = ({ data, title }) => (
  <div>
    <h2>{title}</h2>
    <table>
      <thead>
        <tr>
          <th>Time Period</th>
          <th>Predicted Mean</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.time_period}</td>
            <td>{item.predicted_mean}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default Dashboard;
