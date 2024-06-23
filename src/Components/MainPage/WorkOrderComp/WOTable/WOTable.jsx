import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import "../WOTable/WOTable.css";
import WOForm from "../WOForm/WOForm";

const headers = [
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
  const [error, setError] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:5000/WorkOrders");
      setData(response.data);
      setLoading(false);
    } catch (error) {
      setError("An error occurred while fetching");
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

  const openModal = (rowData) => {
    setModalData(rowData);
    setModalIsOpen(true);
  };

  const closeMOdal = () => {
    setModalIsOpen(false);
    setModalData({});
  };

  // const deleteRow = (key) => {
  //   axios
  //     .delete("http://127.0.0.1:5000/WorkOrders/${key}")
  //     .then((response) => {
  //       fetchData();
  //     })
  //     .catch((error) => {
  //       console.error("Error deleting data: ", error);
  //     });
  // };

  if (loading) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  // const rows = Object.keys(data).map((key) => [key, ...data[key]]);

  return (
    <div>
      <h2>Work Order Table</h2>
      <div className="work-order--table">
        <table>
          <thead>
            <tr>
              {headers.map((header) => (
                <th key={header}>{header}</th>
              ))}

              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(data).map((key) => (
              <tr key={key}>
                {Object.values(data[key]).map((value, idx) => (
                  <td key={idx}>{value}</td>
                ))}
                <td>
                  <button className="btn" onClick={() => openModal(data[key])}>
                    Edit
                  </button>
                  {/* <button className="btn" onClick={() => deleteRow(row.id)}>
                    Delete
                  </button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <WOForm
        isOpen={modalIsOpen}
        onRequestClose={closeMOdal}
        fetchData={fetchData}
        initalData={modalData}
      />
    </div>
  );
};

export default WOTable;
