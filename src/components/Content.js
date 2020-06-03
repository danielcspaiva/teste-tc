import React, { useState, useEffect } from "react";
import axios from "axios";
import ListItem from "./ListItem";
import { Link } from "react-router-dom";

export default function Content() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const baseUrl = "http://localhost:3004/cars";

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    console.log(search)
    axios
      .get(baseUrl)
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  }, [search, setSearch]);

  return (
    <div className="main">
      <div className="search-bar">
        <input type="text" name="search" value={search} placeholder="Filtrar Carros" onChange={updateSearch}></input>
        <Link to="/addcar">
          <button>Cadastrar</button>
        </Link>
      </div>
      {search === "" ? (
        <div className="banner">
          <h1> Pesquisa de veículos do TradersClub </h1>
        </div>
      ) : (
        <div className="list">
          {data.map((car, idx) => (
            <ListItem key={idx} {...car} />
          ))}
        </div>
      )}
    </div>
  );
}