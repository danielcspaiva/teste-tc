import React, { useState, useEffect } from "react";
import axios from "axios";
import Side from "../Side";
import Content from "../Content";
import SearchBar from "../SearchBar";

export default function Home() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const baseUrl = "http://localhost:3004/cars";

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    axios
      .get(baseUrl)
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  }, [search, setSearch]);

  return (
    <div className="home">
      <Side />
      <div className="main">
        <SearchBar search={search} updateSearch={updateSearch} />
        <Content search={search} data={data} />
      </div>
    </div>
  );
}
