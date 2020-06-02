import React, { useState } from "react";
import Side from "../components/Side";

export default function NewCar() {
  const [title, setTitle] = useState("");
  const [model, setModel] = useState("");
  const [brand, setBrand] = useState("");
  const [year, setYear] = useState("");
  const [color, setColor] = useState("");
  const [km, setKm] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = () => console.log("submit");

  return (
    <div className="home">
      <Side />
      <div className="main">
        {/* <Side /> */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="title"
            state={title}
            setState={setTitle}
          ></input>
          <input
            type="text"
            name="model"
            placeholder="model"
            state={model}
            setState={setModel}
          ></input>
          <input
            type="select"
            name="brand"
            placeholder="brand"
            state={brand}
            setState={setBrand}
          ></input>
          <input
            type="number"
            name="year"
            placeholder="year"
            state={year}
            setState={setYear}
          ></input>
          <input
            type="text"
            name="color"
            placeholder="color"
            state={color}
            setState={setColor}
          ></input>
          <input
            type="number"
            name="km"
            placeholder="km"
            state={km}
            setState={setKm}
          ></input>
          <input
            type="number"
            name="price"
            placeholder="price"
            state={price}
            setState={setPrice}
          ></input>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}
