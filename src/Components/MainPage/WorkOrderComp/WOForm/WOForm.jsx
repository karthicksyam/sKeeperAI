import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import "../WOForm/WOForm.css";

Modal.setAppElement("#root");

const WOForm = ({ isOpen, onRequestClose, fetchData, initialData }) => {
  const [formData, setFormData] = useState({
    // id: "",
    customer: initialData?.customer || "",
    wo_no: initialData?.wo_no || "",
    customer_product_details: initialData?.customer_product_details || "",
    wo_date: initialData?.wo_date || "",
    machine_ordertype: initialData?.machine_ordertype || "",
    area_or_del: initialData?.area_or_del || "",
    regional_location: initialData?.regional_location || "",
    cooler: initialData?.cooler || "",
    product_width: initialData?.product_width || "",
    product_length: initialData?.product_length || "",
    micron: initialData?.micron || "",
    printing_material_1: initialData?.printing_material_1 || "",
    lamination_material_2: initialData?.lamination_material_2 || "",
    material_3: initialData?.material_3 || "",
    material_1_kg: initialData?.material_1_kg || "",
    material_2_kg: initialData?.material_2_kg || "",
    material_3_kg: initialData?.material_3_kg || "",
    order_in_rolls: initialData?.order_in_rolls || "",
    order_in_pcs: initialData?.order_in_pcs || "",
    order_in_kg: initialData?.order_in_kg || "",
    remarks_curve: initialData?.remarks_curve || "",
    unit: initialData?.unit || "",
    no_of_printing_colors: initialData?.no_of_printing_colors || "",
    printing_method: initialData?.printing_method || "",
    lamination: initialData?.lamination || "",
    rewinding_method: initialData?.rewinding_method || "",
    customer_packing_method: initialData?.customer_packing_method || "",
    core_id_mm: initialData?.core_id_mm || "",
    roll_od_cm: initialData?.roll_od_cm || "",
    cust_roll_weight: initialData?.cust_roll_weight || "",
    jumbo_roll_width: initialData?.jumbo_roll_width || "",
    total_weight_needed_kg: initialData?.total_weight_needed_kg || "",
    add3waste: initialData?.add3waste || "",
    status: initialData?.status || "",
    sellable_qty: initialData?.sellable_qty || "",
  });

  const [error, setError] = useState(null);

  useEffect(() => {
    if (isOpen && initialData) {
      setFormData({
        wo_no: initialData.wo_no || "",
        customer: initialData.customer || "",
        customer_product_details: initialData.customer_product_details || "",
        wo_date: initialData.wo_date || "",
        machine_ordertype: initialData.machine_ordertype || "",
        area_or_del: initialData.area_or_del || "",
        regional_location: initialData.regional_location || "",
        cooler: initialData.cooler || "",
        product_width: initialData.product_width || "",
        product_length: initialData.product_length || "",
        micron: initialData.micron || "",
        printing_material_1: initialData.printing_material_1 || "",
        lamination_material_2: initialData.lamination_material_2 || "",
        material_3: initialData.material_3 || "",
        material_1_kg: initialData.material_1_kg || "",
        material_2_kg: initialData.material_2_kg || "",
        material_3_kg: initialData.material_3_kg || "",
        order_in_rolls: initialData.order_in_rolls || "",
        order_in_pcs: initialData.order_in_pcs || "",
        order_in_kg: initialData.order_in_kg || "",
        remarks_curve: initialData.remarks_curve || "",
        unit: initialData.unit || "",
        no_of_printing_colors: initialData.no_of_printing_colors || "",
        printing_method: initialData.printing_method || "",
        lamination: initialData.lamination || "",
        rewinding_method: initialData.rewinding_method || "",
        customer_packing_method: initialData.customer_packing_method || "",
        core_id_mm: initialData.core_id_mm || "",
        roll_od_cm: initialData.roll_od_cm || "",
        cust_roll_weight: initialData.cust_roll_weight || "",
        jumbo_roll_width: initialData.jumbo_roll_width || "",
        total_weight_needed_kg: initialData.total_weight_needed_kg || "",
        add3waste: initialData.add3waste || "",
        status: initialData.status || "",
        sellable_qty: initialData.sellable_qty || "",
      });
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const listValues = [
    formData["wo_no"],
    formData["customer"],
    formData["customer_product_details"],
    formData["wo_date"],
    formData["machine_ordertype"],
    formData["area_or_del"],
    formData["regional_location"],
    formData["cooler"],
    formData["product_width"],
    formData["product_length"],
    formData["micron"],
    formData["printing_material_1"],
    formData["lamination_material_2"],
    formData["material_3"],
    formData["material_1_kg"],
    formData["material_2_kg"],
    formData["material_3_kg"],
    formData["order_in_rolls"],
    formData["order_in_pcs"],
    formData["order_in_kg"],
    formData["remarks_curve"],
    formData["unit"],
    formData["no_of_printing_colours"],
    formData["printing_method"],
    formData["lamination"],
    formData["rewinding method"],
    formData["customer_packing_method"],
    formData["core_id_mm"],
    formData["roll_od_cm"],
    formData["cust_roll_weight"],
    formData["jumbo_roll_width"],
    formData["total_weight_needed_kg"],
    formData["add3waste"],
    formData["status"],
    formData["sellable_qty"],
  ];

  const dict = {
    orders: listValues,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      axios.post("http://127.0.0.1:5000/AddWO", dict, config);
      // console.log(dict);
      // if (initialData.wo_no && initialData.wo_date) {
      //   await axios.post("http://127.0.0.1:5000/EditWO", formData, config);
      // } else {
      //   await axios.post("http://127.0.0.1:5000/AddWO", dict, config);
      // }
      // fetchData();
      // onRequestClose();
    } catch (error) {
      setError("An error ocurred while submitting the form. Try again");
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const url = formData.id
  //       ? "http://127.0.0.1:5000/EditWO"
  //       : "http://127.0.0.1:5000/AddWO";
  //     await axios.post(url, formData, {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     if (formData.wo_no && formData.wo_date) {
  //       await axios.post("http://127.0.0.1:5000/EditWO", formData);
  //     } else {
  //       await axios.post("http://127.0.0.1:5000/AddWO", formData);
  //     }
  //     fetchData();
  //     onRequestClose();
  //   } catch (error) {
  //     setError("an error ocurred while submitting the form. please try agian");
  //   }
  //   if (formData.wo_no && formData.wo_date) {
  //     axios
  //       .post("http://127.0.0.1:5000/EditWO", formData)
  //       .then((response) => {
  //         fetchData();
  //         onRequestClose();
  //       })
  //       .catch((error) => {
  //         console.error("Error updating data:", error);
  //       });
  //   } else {
  //     axios
  //       .post("http://127.0.0.1:5000/AddWO", formData)
  //       .then((response) => {
  //         fetchData();
  //         onRequestClose();
  //       })
  //       .catch((error) => {
  //         console.error("Error creating data:", error);
  //       });
  //   }
  // };

  return (
    <Modal
      className="modal-display"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Form Modal"
    >
      <h2>
        {initialData && initialData.wo_no ? "Edit Entry" : "Create Entry"}
      </h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div className="form-display">
        <form onSubmit={handleSubmit}>
          {/* <input
            type="text"
            name="id"
            value={formData.id}
            onChange={handleChange}
            placeholder="ID"
            readOnly={!!formData.id}
          /> */}
          <input
            type="text"
            name="wo_no"
            value={formData.wo_no}
            onChange={handleChange}
            placeholder="Work Order No."
          />
          <input
            type="text"
            name="customer"
            value={formData.customer}
            onChange={handleChange}
            placeholder="Customer Name"
          />
          <input
            type="date"
            name="wo_date"
            value={formData.wo_date}
            onChange={handleChange}
            placeholder="Work Order Date"
          />
          <input
            type="text"
            name="machine_ordertype"
            value={formData.machine_ordertype}
            onChange={handleChange}
            placeholder="Machine Order Type"
          />
          <input
            type="text"
            name="area_or_del"
            value={formData.area_or_del}
            onChange={handleChange}
            placeholder="Area"
          />
          <input
            type="text"
            name="regional_location"
            value={formData.regional_location}
            onChange={handleChange}
            placeholder="Regional Location"
          />
          <input
            type="text"
            name="cooler"
            value={formData.cooler}
            onChange={handleChange}
            placeholder="Cooler"
          />
          <input
            type="text"
            name="product_width"
            value={formData.product_width}
            onChange={handleChange}
            placeholder="Product Width"
          />
          <input
            type="text"
            name="product_length"
            value={formData.product_length}
            onChange={handleChange}
            placeholder="Product Length"
          />
          <input
            type="text"
            name="micron"
            value={formData.micron}
            onChange={handleChange}
            placeholder="Micron"
          />
          <input
            type="text"
            name="printing_material_1"
            value={formData.printing_material_1}
            onChange={handleChange}
            placeholder="Printing Material 1"
          />
          <input
            type="text"
            name="lamination_material_2"
            value={formData.lamination_material_2}
            onChange={handleChange}
            placeholder="Lamination Material 2"
          />
          <input
            type="text"
            name="material_3"
            value={formData.material_3}
            onChange={handleChange}
            placeholder="Material 3"
          />
          <input
            type="text"
            name="material_1_kg"
            value={formData.material_1_kg}
            onChange={handleChange}
            placeholder="Material 1 (in kg)"
          />
          <input
            type="text"
            name="material_2_kg"
            value={formData.material_2_kg}
            onChange={handleChange}
            placeholder="Material 2 (in kg)"
          />
          <input
            type="text"
            name="material_3_kg"
            value={formData.material_3_kg}
            onChange={handleChange}
            placeholder="Material 3 (in kg)"
          />
          <input
            type="text"
            name="order_in_rolls"
            value={formData.order_in_rolls}
            onChange={handleChange}
            placeholder="Order in rolls"
          />
          <input
            type="text"
            name="order_in_pcs"
            value={formData.order_in_pcs}
            onChange={handleChange}
            placeholder="Order in pcs"
          />
          <input
            type="text"
            name="order_in_kg"
            value={formData.order_in_kg}
            onChange={handleChange}
            placeholder="Order in kg"
          />
          <input
            type="text"
            name="remarks_curve"
            value={formData.remarks_curve}
            onChange={handleChange}
            placeholder="Remarks Curve"
          />
          <input
            type="text"
            name="unit"
            value={formData.unit}
            onChange={handleChange}
            placeholder="Unit"
          />
          <input
            type="text"
            name="no_of_printing_colors"
            value={formData.no_of_printing_colors}
            onChange={handleChange}
            placeholder="No of Printing Colors"
          />
          <input
            type="text"
            name="printing_method"
            value={formData.printing_method}
            onChange={handleChange}
            placeholder="Printing Method"
          />
          <input
            type="text"
            name="lamination"
            value={formData.lamination}
            onChange={handleChange}
            placeholder="Lamination"
          />
          <input
            type="text"
            name="rewinding_method"
            value={formData.rewinding_method}
            onChange={handleChange}
            placeholder="Rewinding Method"
          />
          <input
            type="text"
            name="customer_packing_method"
            value={formData.customer_packing_method}
            onChange={handleChange}
            placeholder="Customer Packing Method"
          />
          <input
            type="text"
            name="core_id_mm"
            value={formData.core_id_mm}
            onChange={handleChange}
            placeholder="Core ID (mm)"
          />
          <input
            type="text"
            name="roll_od_cm"
            value={formData.roll_od_cm}
            onChange={handleChange}
            placeholder="Roll OD (cm)"
          />
          <input
            type="text"
            name="cust_roll_weight"
            value={formData.cust_roll_weight}
            onChange={handleChange}
            placeholder="Customer Roll Weight"
          />
          <input
            type="text"
            name="jumbo_roll_width"
            value={formData.jumbo_roll_width}
            onChange={handleChange}
            placeholder="Jumbo Roll Width"
          />
          <input
            type="text"
            name="total_weight_needed_kg"
            value={formData.total_weight_needed_kg}
            onChange={handleChange}
            placeholder="Total Weight needed (kg)"
          />
          <input
            type="text"
            name="add3waste"
            value={formData.add3waste}
            onChange={handleChange}
            placeholder="Add3waste"
          />
          <input
            type="text"
            name="status"
            value={formData.status}
            onChange={handleChange}
            placeholder="Status"
          />
          <input
            type="text"
            name="sellable_qty"
            value={formData.sellable_qty}
            onChange={handleChange}
            placeholder="Sellable Qty"
          />
          <button className="btn" type="submit" onClick={handleSubmit}>
            Submit
          </button>
          <button className="btn" type="button" onClick={onRequestClose}>
            Cancel
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default WOForm;
