import React, { useEffect, useState } from "react";
import axios from "axios";
import "../InventoryTable/InventoryTable.css";
import DataTable from "react-data-table-component";

const headers = ["Key", "Serial No", "Material", "Stock (in kg)"];

const InventoryTable = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:5000/Inventory");
      setData(response.data);
      setLoading(false);
    } catch (error) {
      setError("An error ocurred while fetching");
      setLoading(false);
    }
    // axios
    //   .get("http://127.0.0.1:5000/Inventory")
    //   .then((response) => {
    //     setData(response.data);
    //     setLoading(false);
    //   })
    //   .catch((error) => {
    //     console.error("Error fetching the data:", error);
    //     setLoading(false);
    //   });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  // const rows = Object.keys(data).map((key) => [key, ...data[key]]);
  return (
    <div>
      {/* <h2>Inventory Table</h2> */}
      <div className="inventory-table--display">
        <table>
          <thead>
            <tr>
              {headers.map((header) => (
                <th key={header}> {header} </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.keys(data).map((key) => (
              <tr key={key}>
                <td>{key}</td>
                {Object.values(data[key]).map((value, idx) => (
                  <td key={idx}> {value}</td>
                ))}
                {/* {row.map((cell, cellIndex) => (
                  <td key={cellIndex}> {cell !== null ? cell : ""}</td>
                ))} */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InventoryTable;
