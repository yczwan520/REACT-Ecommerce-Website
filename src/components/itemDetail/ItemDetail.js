import React from "react";
import { useParams } from "react-router-dom";
import "./itemDetail.css";
const ItemDetails = ({ items, sellers }) => {
  const { itemId } = useParams();
  const index = items.map((object) => object.id).indexOf(itemId);
  const item = items[index];
  return (
    <div>
      <img src={item.imageSrc} alt={item.name} className="item_img" />
      <div>
        <h3>{item.name}</h3>
        <h4>{item.latinName}</h4>
        <p>{item.description}</p>
        <p>
          Product of <strong>{item.countryOfOrigin}</strong>
        </p>
        <button>
          {item.quantity ? `$${item.price} -> Buy now` : "Out of Stock"}
        </button>
      </div>
    </div>
  );
};

export default ItemDetails;
