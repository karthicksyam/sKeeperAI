import React, { useState } from "react";
import "../WOForm/WOForm.css";

const WOForm = ({ closeModal, onSubmit, defaultValue }) => {
  const [formState, setFormState] = useState(
    defaultValue ||{
    custName: "",
    material: "",
    date: "",
    status: "processing",
  });

  const [errors, setErrors] = useState("")

  const validateForm = () => {
    if(formState.custName && formState.date && formState.material && formState.status) {
      setErrors("")
      return true;
    }else{
      let errorFields = [];
      for(const [key, value] of Object.entries(formState)){
        if(!value){
          errorFields.push(key)
        }
      }
      setErrors(errorFields.join(", "))
      return false;
    }

  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!validateForm()) return;
    onSubmit(formState);
    console.log(formState)

    closeModal();
  }

  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") closeModal();
      }}
    >
      <div className="modal-contents">
        <form>
          <div className="form-group">
            <label htmlFor="custName">Customer Name</label>
            <input
              name="custName"
              value={formState.custName}
              onChange={handleChange}
              type="text"
              autoComplete="false"
            />
          </div>
          <div className="form-group">
            <label htmlFor="material">Material type</label>
            <select
              name="material"
              value={formState.material}
              onChange={handleChange}
            >
              <option value="default">--Please select an option--</option>
              <option value="CPP + Polyster Lamination">CPP + Polyster Lamination</option>
              <option value="Placeholder Material2">Placeholder Material2</option>
              <option value="Placeholder Material3">Placeholder Material3</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              name="date"
              value={formState.date}
              type="date"
              autoComplete="false"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select
              name="status"
              value={formState.status}
              onChange={handleChange}
            >
              <option value="processing">Processing</option>
              <option value="processed">Processed</option>
            </select>
          </div>
          {errors && <div className="error">{`Please include: ${errors}`}</div>}
          <button type="submit" className="btn" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default WOForm;
