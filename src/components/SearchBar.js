import React from "react";
import { Link } from "react-router-dom";

export default function SearchBar({ search, updateSearch }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        name="search"
        value={search}
        placeholder="Pesquise por um veículo"
        onChange={updateSearch}
      ></input>
      <Link to="/addcar">
        <button className="btn filled-btn">Cadastrar</button>
      </Link>
    </div>
  );
}