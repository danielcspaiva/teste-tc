import React, { Fragment } from "react";

const Input = ({ type, name, placeholder, value, setState }) => {
  return (
    <div>
      <input
        className="fieldset__input"
        type={type}
        name={name}
        placeholder={placeholder || ""}
        value={value || ""}
        onChange={(event) => setState(event.target.value)}
        required
      />
      <hr></hr>
    </div>
  );
};

export default Input;
