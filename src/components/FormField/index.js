import React from "react";

function FormField({ placeholder, type, name, value, onChange }) {
  return (
    <div>
      <label>
        <input
          type={type}
          value={value}
          name={name}
          onChange={onChange}
          placeholder = {placeholder}
        />
      </label>
    </div>
  )
}

export default FormField;