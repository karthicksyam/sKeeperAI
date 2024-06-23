import React, { useEffect, useState } from "react";
import "../WorkOrderComp/WorkOrder.css";
import axios from "axios";
// import "../WorkOrderComp/WOForm";
import profileicon from "../../../assets/profle-icon.png";
import WOForm from "./WOForm/WOForm";
import WOTable from "./WOTable/WOTable";

const WorkOrder = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://127.0.0.1:5000/WorkOrders");
      setData(response.data);
    } catch (error) {
      console.error("error fetching data", error);
    } finally {
      setLoading(false);
    }
    // axios
    //   .get("http://127.0.0.1:5000/WorkOrders")
    //   .then((response) => {
    //     setData(response.data);
    //     setLoading(false);
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching the data:", error);
    //     setLoading(false);
    //   });
  };

  const openModal = (data = null) => {
    setEditData(data);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditData(null);
  };

  return (
    <div>
      <div className="display-container">
        <div className="header-container">
          <h1 className="header-text">Work Orders</h1>
          <div className="btn" onClick={() => openModal()}>
            Add
          </div>
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
          <WOForm
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            fetchData={fetchData}
            initalData={editData}
          />
          <WOTable data={data} fetchData={fetchData} openModal={openModal} />
        </div>
      </div>
    </div>
  );
};

export default WorkOrder;
