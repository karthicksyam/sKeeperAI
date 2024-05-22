import React, { useState } from "react";
import "../WorkOrderComp/WorkOrder.css";
// import "../WorkOrderComp/WOForm";
import profileicon from "../../../assets/profle-icon.png";
import WOForm from "./WOForm/WOForm";
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";
import WOTable from "./WOTable/WOTable";

const WorkOrder = () => {
  const [rows, setRows] = useState([
    {
      custName: "placeholderName1",
      material: "placeholderMaterial1",
      date: "placeholderDate1",
      status: "processing",
    },
    {
      custName: "placeholderName2",
      material: "placeholderMaterial2",
      date: "placeholderDate2",
      status: "processed",
    },
  ]);

  const [rowToEdit, setRowToEdit] = useState(null);

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, index) => index !== targetIndex));
  };

  const handleEditRow = (index) => {
    setRowToEdit(index);
    setModalOpen(true);
  };

  const handleSubmit = (newRow) => {
    setRows([...rows, newRow]);
  };

  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <div className="display-container">
        <div className="header-container">
          <h1 className="header-text">Work Orders</h1>
          <div className="add-button">
            <button className="btn" onClick={() => setModalOpen(true)}>
              Add
            </button>
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
              <div className="email-text">
                <h3>email@example.com</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="workorder-display-container">
          <WOTable
            rows={rows}
            deleteRow={handleDeleteRow}
            editRow={handleEditRow}
          />
          {modalOpen && (
            <WOForm
              closeModal={() => {
                setModalOpen(false);
              }}
              onSubmit={handleSubmit}
              defaultValue={rowToEdit !== null && rows[rowToEdit]}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkOrder;
