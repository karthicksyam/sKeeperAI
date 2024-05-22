import React from "react";
import "../WOTable/WOTable.css";
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";

const WOTable = ({ rows, deleteRow, editRow }) => {
  return (
    <div className="workorder-table--wrapper">
      <table className="workorder-table">
        <thead>
          <tr>
            <th>Customer Name</th>
            <th className="expand">Material</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => {

            const statusText = row.status.charAt(0).toUpperCase() + row.status.slice(1);

            return (
              <tr key={index}>
                <td>{row.custName}</td>
                <td className="expand">{row.material}</td>
                <td>{row.date}</td>
                <td>
                  <span className={`label label-${row.status}`}>
                    {statusText}
                  </span>
                </td>
                <td>
                  <span className="actions">
                    <BsFillTrashFill className="delete-btn" onClick={() => deleteRow(index)} />
                    <BsFillPencilFill onClick={()=>editRow(index)}/>
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default WOTable;
