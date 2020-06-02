import React, {useState, useEffect} from "react";
import axios from 'axios';
import Side from './Side';
import Input from './Input'

export default function CarDetails(props) {
  const carId = props.match.params.id
  const baseUrl = 'http://localhost:3004/cars?id=';
  const [car, setCar] = useState([])
  const [title, setTitle] = useState('');
  const [model, setModel] = useState('');
  const [brand, setBrand] = useState('');
  const [year, setYear] = useState('');
  const [color, setColor] = useState('');
  const [km, setKm] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit')
  }

  useEffect(() => {
    axios.get(baseUrl + carId)
      .then(response => {
        setCar(response.data[0])
        setTitle(response.data[0].title)
        setModel(response.data[0].model)
        setBrand(response.data[0].brand)
        setYear(response.data[0].year)
        setColor(response.data[0].color)
        setKm(response.data[0].km)
        setPrice(response.data[0].price)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="home">
      <Side />
      <div className="main">
        {/* <Side /> */}
        <form onSubmit={handleSubmit}>
          <Input type="text" name="title" placeholder="Título" value={title} setState={setTitle} />
          <Input type="text" name="model" placeholder="Modelo" value={model} setState={setModel} />
          <Input type="text" name="color" placeholder="Cor" value={color} setState={setColor} />
          <Input type="number" name="year" placeholder="Ano" value={year} setState={setYear} />
          <Input type="number" name="km" placeholder="Kilometragem" value={km} setState={setKm} />
          <Input type="number" name="price" placeholder="Preço" value={price} setState={setPrice} />
          <input type="select" name="brand" placeholder="brand" value={brand} onChange={setBrand}></input>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}