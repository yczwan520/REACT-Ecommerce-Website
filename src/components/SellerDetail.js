import React from "react";
import { useParams } from "react-router-dom";
import { Fruit } from "./MainPage/MainPage";
const SellerDetail = ({ items }) => {
  const { sellerId } = useParams();
  const sellerItems = items.filter((item) => item.sellerId === sellerId);
  return (
    <div>
      {sellerItems.map((item) => {
        return <Fruit key={item.id} item={item} />;
      })}
    </div>
  );
};

export default SellerDetail;
