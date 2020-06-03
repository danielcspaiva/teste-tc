import React, { useState, useEffect } from "react";
import axios from "axios";
import Side from "../Side";
import Input from "../Input";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar";


export default function CarDetails(props) {
  const carId = props.match.params.id;
  const baseUrl = "http://localhost:3004/cars?id=";
  const baseUrlPut = "http://localhost:3004/cars/";
  const baseBrandsUrl = 'http://localhost:3004/brands';
  const [brands, setBrands] = useState([]);
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
      .then((response) => props.history.push("/"))
      .catch((err) => console.log(err));
  };

  const handleDelete = (e) => {
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

  useEffect(() => {
    axios.get(baseBrandsUrl)
      .then(response => setBrands(response.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="home">
      <Side />
      <div className="main">
        <SearchBar />
        <div className="lambo">
          <div className="car-details">
          <p>Problemas ao salvar o formulário</p>
          <form>
            <div className="half">
              <Input type="text" name="title" placeholder="Título" value={title} setState={setTitle}/>
            </div>
            <div className="half">
              <Input type="text" name="model" placeholder="Modelo" value={model} setState={setModel}/>
              <Input type="number" name="year" placeholder="Ano" value={year} setState={setYear}/>
            </div>
            <select name="brand" value={brand} onChange={(e) => setBrand(e.target.value)}>
              {brands.map(brand => <option key={brand.id} value={brand.name}>{brand.name}</option>)}
            </select>
            <div className="half">
              <Input type="text" name="color" placeholder="Cor" value={color} setState={setColor}/>
              <Input type="number" name="price" placeholder="Preço" value={price} setState={setPrice}/>
              <Input type="number" name="km" placeholder="Kilometragem" value={km} setState={setKm}/>
            </div>
            <div className="btns">
              <div className="align-left">
                <button type="button" onClick={handleDelete} className="btn transparent-btn">Remover</button>
                <Link to="/"><button type="button" className="btn transparent-btn">Cancelar</button></Link>
              </div>
              <button onClick={handleSubmit} className="btn filled-btn">Salvar</button>
            </div>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
}