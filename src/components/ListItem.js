import React from "react";
import { Link } from "react-router-dom";

export default function ListItem({ title, model, brand, km, price, year, id }) {
  return (
    <Link to={`/${id}`}>
      <div className="car-info">
        <div>
          <p>{title}</p>
          <p>
            {model} - {brand} - {km} KM
          </p>
        </div>
        <div>
          <p>{price}</p>
          <p>{year}</p>
        </div>
      </div>
    </Link>
  );
}
