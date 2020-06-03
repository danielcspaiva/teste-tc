import React, { useState, useEffect } from "react";
import axios from "axios";
import ListItem from "./ListItem";
import SearchBar from "./SearchBar"

export default function Content() {
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
    <div className="main">
      <SearchBar search={search} updateSearch={updateSearch} />
      {search === "" ? (
        <div className="landing lambo">
          <h1 className="align-right"> Pesquisa de veículos<br></br> do <span>TradersClub</span></h1>
        </div>
      ) : (
        <div className="list lambo">
          <div className="list-items">
            {data.filter(car => car.title.toLowerCase().includes(search.toLowerCase())).map((car, idx) => (
              <ListItem key={idx} {...car} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}