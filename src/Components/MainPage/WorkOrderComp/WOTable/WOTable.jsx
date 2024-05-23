import React from "react";

const WOTable = () => {
  return (
    <div>
      <h2>Work Order Table</h2>
      <table>
        <thead>
          <tr>
            <th>Printing Machine Nmber</th>
            <th>Operator</th>
            <th>Salesman</th>
            <th>TDS</th>
            <th>WO#</th>
            <th>Customer Name</th>
            <th>Date</th>
            <th>Circumference</th>
            <th>Customer Item Packing</th>
            <th>Order Qty (kg/pcs)</th>
            <th>Width</th>
            <th>Length</th>
            <th>Micron</th>
            <th>Roll Weight/Pcs</th>
            <th>No. of Rolls</th>
            <th>W Direction</th>
            <th>Printing Roll Size</th>
            <th>Micron</th>
            <th>Lamination Roll Size</th>
            <th>Micron</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};

export default WOTable;
