import React, { useState, useEffect } from "react";
import axios from "axios";
import Side from "./Side";
import Input from "./Input";
import { Link } from "react-router-dom";

export default function CarDetails(props) {
  const carId = props.match.params.id;
  const baseUrl = "http://localhost:3004/cars?id=";
  const baseUrlPut = "http://localhost:3004/cars/";
  const [title, setTitle] = useState("");
  const [model, setModel] = useState("");
  const [brand, setBrand] = useState("");
  const [year, setYear] = useState("");
  const [color, setColor] = useState("");
  const [km, setKm] = useState("");
  const [price, setPrice] = useState("");
  const [id, setId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let newCar = {
      title,
      model,
      color,
      year,
      km,
      price,
      brand,
    };
    axios
      .put(baseUrlPut + id, newCar)
      .then((response) => {
        console.log(response)
        props.history.push("/")
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (e) => {
    console.log("delete");
    e.preventDefault();

    axios
      .delete(baseUrlPut + id)
      .then((response) => props.history.push("/"))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get(baseUrl + carId)
      .then((response) => {
        setTitle(response.data[0].title);
        setModel(response.data[0].model);
        setBrand(response.data[0].brand);
        setYear(response.data[0].year);
        setColor(response.data[0].color);
        setKm(response.data[0].km);
        setPrice(response.data[0].price);
        setId(response.data[0].id);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="home">
      <Side />
      <div className="main">
        <form onSubmit={handleSubmit}>
          <Input type="text" name="title" placeholder="Título" value={title} setState={setTitle}/>
          <Input type="text" name="model" placeholder="Modelo" value={model} setState={setModel}/>
          <Input type="text" name="color" placeholder="Cor" value={color} setState={setColor}/>
          <Input type="number" name="year" placeholder="Ano" value={year} setState={setYear}/>
          <Input type="number" name="km" placeholder="Kilometragem" value={km} setState={setKm}/>
          <Input type="number" name="price" placeholder="Preço" value={price} setState={setPrice}/>
          <input type="select" name="brand" placeholder="brand" value={brand} onChange={setBrand}></input>
          <button>Submit</button>
          <button type="button" onClick={handleDelete}>Delete</button>
          <Link to="/"><button type="button"> Voltar </button></Link>
        </form>
      </div>
    </div>
  );
}