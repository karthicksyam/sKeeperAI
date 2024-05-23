import React, { useEffect, useState } from "react";
import "../WOTable/WOTable.css";

const WOTable = () => {
  let wodata;
  // const [wodata, SetWOdata] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/WorkOrders")
      .then((resp) => resp.json)
      .then((resp) => {
        console.log(resp);
        // wodata = resp;
        // SetWOdata(resp);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  // console.log(res);
  // for (let i = 0; i <= 19; i++) {
  //   console.log(wodata(i));
  // }
  console.log(wodata);

  return (
    <div>
      <h2>Work Order Table</h2>
      <div className="work-order--table">
        <table>
          <thead>
            <tr>
              <th>WO No.</th>
              <th>Customer</th>
              <th>Customer Product Details</th>
              <th>Date</th>
              <th>Machine Order Type</th>
              <th>Area</th>
              <th>Regional Location</th>
              <th>Micron</th>
              <th>Printing Material 1</th>
              <th>Weight</th>
              <th>Lamination Material 2</th>
              <th>Weight</th>
              <th>Material 3</th>
              <th>Weight</th>
              <th>Order in Rolls</th>
              <th>Order in pcs</th>
              <th>Order in kg</th>
              <th>Remarks Curve</th>
              <th>Unit</th>
              <th>No of Printing colours</th>
              <th>Printing Method</th>
              <th>Core ID (mm)</th>
              <th>Roll OD (cm)</th>
              <th>Customer Roll weight</th>
              <th>Jumbo roll width</th>
              <th>Total Weight needed</th>
              <th>add3waste</th>
              <th>Status</th>
              <th>Sellable Qty</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {wodata &&
              wodata.map((item) => (
                <tr key={item.orders_id}>
                  <td>{item.wo_no}</td>
                  <td>{item.customer}</td>
                  <td>{item.customer_product_details}</td>
                  <td>{item.wo_date}</td>
                  <td>{item.machine_ordertype}</td>
                  <td>{item.area_or_del}</td>
                  <td>{item.regional_location}</td>
                  <td>{item.cooler}</td>
                  <td>{item.product_width}</td>
                  <td>{item.product_length}</td>
                  <td>{item.micron}</td>
                  <td>{item.printing_material_1}</td>
                  <td>{item.lamination_material_2}</td>
                  <td>{item.material_3}</td>
                  <td>{item.material_1_kg}</td>
                  <td>{item.material_2_kg}</td>
                  <td>{item.material_3_kg}</td>
                  <td>{item.order_in_rolls}</td>
                  <td>{item.order_in_pcs}</td>
                  <td>{item.order_in_kg}</td>
                  <td>{item.remarks_curve}</td>
                  <td>{item.unit}</td>
                  <td>{item.no_of_printing_colours}</td>
                  <td>{item.printing_method}</td>
                  <td>{item.lamination}</td>
                  <td>{item.rewinding_method}</td>
                  <td>{item.customer_packing_method}</td>
                  <td>{item.core_id_mm}</td>
                  <td>{item.roll_od_cm}</td>
                  <td>{item.cust_roll_weight}</td>
                  <td>{item.jumbo_roll_width}</td>
                  <td>{item.total_weight_needed_kg}</td>
                  <td>{item.add3waste}</td>
                  <td>{item.status}</td>
                  <td>{item.sellable_qty}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WOTable;
