import React from "react";
import ListItem from "./ListItem";

export default function Content({ search, data }) {
  return (
    <div>
      {search === "" ? (
        <div className="landing lambo">
          <h1 className="align-right">
            Pesquisa de veículos <br></br> do <span>TradersClub</span>
          </h1>
        </div>
      ) : (
        <div className="list lambo">
          <div className="list-items">
            {data
              .filter((car) => car.title.toLowerCase().includes(search.toLowerCase()))
              .map((car, idx) => (
                <ListItem key={idx} {...car} />
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
