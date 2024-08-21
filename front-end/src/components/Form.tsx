import React from "react";

interface FormRow {
  type: string;
  name: string;
  labelText?: string;
  defaultValue: string;
}

const FormRow = ({ type, name, labelText, defaultValue }: FormRow) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className="form-input"
        placeholder={defaultValue}
        required
      />
    </div>
  );
};

export default FormRow;
