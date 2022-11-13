import React from "react";
import { Link } from "react-router-dom";
import "./MainPage.css";
const Fruit = ({ item }) => {
  const { id, name, latinName, imageSrc } = item;
  return (
    <li>
      <img src={imageSrc} alt={name} />
      <Link to={`/items/${id}`}>
        <h4>{name}</h4>
      </Link>
      <p>{latinName}</p>
    </li>
  );
};

const MainPage = ({ items }) => {
  return (
    <div>
      <p>Fruit emporium sells the finest fruits from this world and beyond.</p>
      <h2>Browse items:</h2>
      <div className="fruit_list">
        {items.map((item) => {
          return <Fruit key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};
export { Fruit, MainPage };
