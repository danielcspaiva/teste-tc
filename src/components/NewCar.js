import React, { useState } from "react";
import Side from "../components/Side";
import Input from "../components/Input"

export default function NewCar() {
  const [title, setTitle] = useState("");
  const [model, setModel] = useState("");
  const [brand, setBrand] = useState("");
  const [year, setYear] = useState("");
  const [color, setColor] = useState("");
  const [km, setKm] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit')
  }


  return (
    <div className="home">
      <Side />
      <div className="main">
        <form onSubmit={handleSubmit}>
          <Input type="text" name="title" placeholder="Título" value={title} setState={setTitle} />
          <Input type="text" name="model" placeholder="Modelo" value={model} setState={setModel} />
          <Input type="text" name="color" placeholder="Cor" value={color} setState={setColor} />
          <Input type="number" name="year" placeholder="Ano" value={year} setState={setYear} />
          <Input type="number" name="km" placeholder="Kilometragem" value={km} setState={setKm} />
          <Input type="number" name="price" placeholder="Preço" value={price} setState={setPrice} />
          <input type="select" name="brand" placeholder="brand" onChange={setBrand}></input>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}
