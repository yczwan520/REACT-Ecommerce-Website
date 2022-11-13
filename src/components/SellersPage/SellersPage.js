import React from "react";
import { Link } from "react-router-dom";
import "./SellersPage.css";

const Seller = ({ seller }) => {
  const { id, storeName, description, avatarSrc } = seller;
  return (
    <div>
      <h2>{id}</h2>
      <Link to={`/sellers/${id}`}>
        <img src={avatarSrc} alt={storeName} className="seller_img" />
      </Link>
      <p>{description}</p>
    </div>
  );
};

const Sellers = ({ sellers }) => {
  return (
    <div>
      {sellers.map((seller) => {
        return <Seller key={seller.id} seller={seller} />;
      })}
    </div>
  );
};

export default Sellers;
