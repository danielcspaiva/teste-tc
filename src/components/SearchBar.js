import React, { useState, useEffect } from 'react'
import carsJson from '../data/cars.json'

export default function SearchBar() {
  const [search, setSearch] = useState('')
  const [data, setData] = useState([])

  const updateSearch = e => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    setData(carsJson)
    console.log(data.cars)
    // axios.get('http://dev.tradersclub.com.br:12000/api/cars?search=' + search)
    //   .then(data => console.log(data))
    //   .catch(err => console.log(err))
  }, [search, setSearch])

  return (
    <div className="search-bar">
      <input type="text" name="search" value={search} onChange={updateSearch}></input>
      <button>Cadastrar</button>
    </div>
  )
}
