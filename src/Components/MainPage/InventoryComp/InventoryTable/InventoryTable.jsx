import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";

const InventoryTable = () => {
  const [data2, setData2] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/Inventory").then((res) => {
      setData2(res.data.data2);
    });
  }, []);

  return (
    <div>
      <h2>Inventory Table</h2>
      <div className="inventory-table">
        <DataTable
          columns={[
            {
              id: "sno",
              name: "Serial No.",
            },
            {
              id: "material",
              name: "Material",
            },
            {
              id: "stock_in_kg",
              name: "Stock (kg)",
            },
          ]}
          data={data2}
        />
      </div>
    </div>
  );
};

export default InventoryTable;
