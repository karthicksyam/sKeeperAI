import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import "../WOTable/WOTable.css";

const headers = [
  "Key",
  "wo_no",
  "customer",
  "customer_product_details",
  "wo_date",
  "machine_ordertype",
  "area_or_del",
  "regional_location",
  "cooler",
  "product_width",
  "product_length",
  "micron",
  "printing_material_1",
  "lamination_material_2",
  "material_3",
  "material_1_kg",
  "material_2_kg",
  "material_3_kg",
  "order_in_rolls",
  "order_in_pcs",
  "order_in_kg",
  "remarks_curve",
  "unit",
  "no_of_printing_colors",
  "printing_method",
  "lamination",
  "rewinding_method",
  "customer_packing_method",
  "core_id_mm",
  "roll_od_cm",
  "cust_roll_weight",
  "jumbo_roll_width",
  "total_weight_needed_kg",
  "add3waste",
  "status",
  "sellable_qty",
];

const WOTable = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/WorkOrders")
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching the data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  const rows = Object.keys(data).map((key) => [key, ...data[key]]);

  // useEffect(() => {
  //   fetch("http://127.0.0.1:5000/WorkOrders")
  //     .then((resp) => resp.json)
  //     .then((resp) => {
  //       console.log(resp);
  //       wodata = resp;
  //       SetWOdata(resp);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // }, []);
  // console.log(res);
  // for (let i = 0; i <= 19; i++) {
  //   console.log(wodata(i));
  // }
  // console.log(wodata);

  return (
    <div>
      <h2>Work Order Table</h2>
      <div className="work-order--table">
        <table>
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell !== null ? cell : ""}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        {/* <DataTable
          columns={[
            {
              id: "wo_no",
              name: "Wo No",
              selector: (row) => row.wo_no,
            },
            {
              id: "customer",
              name: "Customer",
              selector: (row) => row.customer,
            },
            {
              id: "customer_product_details",
              name: "Customer Product Details",
              selector: (row) => row.customer_product_details,
            },
            {
              id: "wo_date",
              name: "WO Date",
              selector: (row) => row.wo_date,
            },
            {
              id: "machine_ordertype",
              name: "Machine Order Type",
              selector: (row) => row.machine_ordertype,
            },
            {
              id: "area_or_del",
              name: "Area",
              selector: (row) => row.area_or_del,
            },
            {
              id: "regional_location",
              name: "Regional Location",
              selector: (row) => row.regional_location,
            },
            {
              id: "cooler",
              name: "Cooler",
              selector: (row) => row.cooler,
            },
            {
              id: "product_width",
              name: "Product Width",
              selector: (row) => row.product_width,
            },
            {
              id: "product_length",
              name: "Product Length",
              selector: (row) => row.product_length,
            },
            {
              id: "micron",
              name: "Micron",
              selector: (row) => row.micron,
            },
            {
              id: "printing_material_1",
              name: "Printing Material 1",
              selector: (row) => row.printing_material_1,
            },
            {
              id: "lamination_material_2",
              name: "Lamination Material 2",
              selector: (row) => row.lamination_material_2,
            },
            {
              id: "material_3",
              name: "Material 3",
              selector: (row) => row.material_3,
            },
            {
              id: "material_1_kg",
              name: "Material 1 (kg)",
              selector: (row) => row.material_1_kg,
            },
            {
              id: "material_2_kg",
              name: "Material 2 (kg)",
              selector: (row) => row.material_2_kg,
            },
            {
              id: "material_3_kg",
              name: "Material 3 (kg)",
              selector: (row) => row.material_3_kg,
            },
            {
              id: "order_in_rolls",
              name: "Order in rolls",
              selector: (row) => row.order_in_rolls,
            },
            {
              id: "order_in_pcs",
              name: "Order in pcs",
              selector: (row) => row.order_in_pcs,
            },
            {
              id: "order_in_kg",
              name: "Order in kg",
              selector: (row) => row.order_in_kg,
            },
            {
              id: "remarks_curve",
              name: "Remarks Curve",
              selector: (row) => row.remarks_curve,
            },
            {
              id: "unit",
              name: "Unit",
              selector: (row) => row.unit,
            },
            {
              id: "no_of_printing_colors",
              name: "No of Printing Colors",
              selector: (row) => row.no_of_printing_colors,
            },
            {
              id: "printing_method",
              name: "Printing Method",
              selector: (row) => row.printing_method,
            },
            {
              id: "lamination",
              name: "Lamination",
              selector: (row) => row.lamination,
            },
            {
              id: "rewinding_method",
              name: "Rewinding Method",
              selector: (row) => row.rewinding_method,
            },
            {
              id: "customer_packing_method",
              name: "Customer Packing Method",
              selector: (row) => row.customer_packing_method,
            },
            {
              id: "core_id_mm",
              name: "Core id (mm)",
              selector: (row) => row.core_id_mm,
            },
            {
              id: "roll_od_cm",
              name: "Roll od (cm)",
              selector: (row) => row.roll_od_cm,
            },
            {
              id: "cust_roll_weight",
              name: "Customer Roll Weight",
              selector: (row) => row.cust_roll_weight,
            },
            {
              id: "jumbo_roll_width",
              name: "Jumbo Roll Width",
              selector: (row) => row.jumbo_roll_width,
            },
            {
              id: "total_weight_needed_kg",
              name: "Total Weight Needed (kg)",
              selector: (row) => row.total_weight_needed_kg,
            },
            {
              id: "add3waste",
              name: "Add3waste",
              selector: (row) => row.add3waste,
            },
            {
              id: "status",
              name: "Status",
              selector: (row) => row.status,
            },
            {
              id: "sellable_qty",
              name: "Sellable qty",
              selector: (row) => row.sellable_qty,
            },
          ]}
          data={data}
        /> */}
      </div>
    </div>
  );
};

export default WOTable;
