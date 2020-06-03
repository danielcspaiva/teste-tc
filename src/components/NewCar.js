import React, { useState, useEffect } from "react";
import Side from "../components/Side";
import Input from "../components/Input";
import axios from "axios";
import SearchBar from "./SearchBar";

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
    
    if (brands.filter(brandFromDb => brandFromDb.name === brand) === 0) {
      axios.post(baseBrandsUrl)
      .then(response => setBrands(response.data))
      .catch(err => console.log(err))
    }
  };

  useEffect(() => {
    axios.get(baseBrandsUrl)
      .then(response => setBrands(response.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="home">
      <Side />
      <div className="main">
        <SearchBar search={''} />
        <div className="lambo">
          <form>
            <Input type="text" name="title" placeholder="Título" value={title} setState={setTitle}/>
            <Input type="text" name="model" placeholder="Modelo" value={model} setState={setModel}/>
            <Input type="text" name="color" placeholder="Cor" value={color} setState={setColor}/>
            <Input type="number" name="year" placeholder="Ano" value={year} setState={setYear}/>
            <Input type="number" name="km" placeholder="Kilometragem" value={km} setState={setKm}/>
            <Input type="number" name="price" placeholder="Preço" value={price} setState={setPrice}/>
            <Input type="text" name="brand" placeholder="Marca" value={brand} setState={setBrand}/>
            {/* <select name="brand" value={brand} onChange={(e) => setBrand(e.target.value)}>
              {brands.map(brand => <option key={brand.id} value={brand.name}>{brand.name}</option>)}
            </select> */}
          </form>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
}
