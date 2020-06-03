import React from "react";

const Input = ({ type, name, placeholder, value, setState }) => {
  return (
    <input
      className="fieldset__input"
      type={type}
      name={name}
      placeholder={placeholder || ""}
      value={value || ""}
      onChange={(event) => setState(event.target.value)}
      style={value === "" ? { border: "1px solid red" } : null}
      required
    />
  );
};

export default Input;
