import React, { useState, useEffect } from "react";
import Side from "../components/Side";
import Input from "../components/Input";
import axios from "axios";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";


export default function NewCar(props) {
  const [brands, setBrands] = useState([]);
  const [title, setTitle] = useState("");
  const [model, setModel] = useState("");
  const [brand, setBrand] = useState("");
  const [year, setYear] = useState("");
  const [color, setColor] = useState("");
  const [km, setKm] = useState("");
  const [price, setPrice] = useState("");
  const baseUrl = "http://localhost:3004/cars";
  const baseBrandsUrl = 'http://localhost:3004/brands';

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
      .post(baseUrl, newCar)
      .then((response) => props.history.push("/"))
      .catch((err) => console.log(err));
  
    if (brands.filter(brandFromDb => brandFromDb.name.toLowerCase() === brand.toLowerCase()).length === 0) {
      let newBrand = {name: brand}
      axios.post(baseBrandsUrl, newBrand)
        .then()
        .catch(err => console.log(err))
    }
  };

  useEffect(() => {
    axios.get(baseBrandsUrl)
      .then(response => {
        setBrands(response.data)
      })
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
            <div className="half">
              <Input type="text" name="brand" placeholder="Marca" value={brand} setState={setBrand}/>
            </div>
            <div className="half">
              <Input type="text" name="color" placeholder="Cor" value={color} setState={setColor}/>
              <Input type="number" name="price" placeholder="Preço" value={price} setState={setPrice}/>
              <Input type="number" name="km" placeholder="Kilometragem" value={km} setState={setKm}/>
            </div>
            <div className="btns">
              <Link to="/"><button type="button" className="btn transparent-btn">Cancelar</button></Link>
              <button onClick={handleSubmit} className="btn filled-btn">Salvar</button>
            </div>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
}