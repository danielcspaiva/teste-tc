import React from "react";
import { Link } from "react-router-dom";

export default function ListItem({ title, model, brand, km, price, year, id }) {
  return (
    <Link to={`/${id}`}>
      <div className="car-info">
        <div>
          <p className="bigger-p">{title}</p>
          <p>
            {model} - {brand} - {km} KM
          </p>
        </div>
        <div className="align-right">
          <p className="bigger-p">R${price}</p>
          <p>{year}</p>
        </div>
      </div>
      <hr className="horizontal-line"></hr>
    </Link>
  );
}
