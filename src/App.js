import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { sellers } from "./data";
import { Layout } from "./components/Layout/Layout";
import { MainPage } from "./components/MainPage/MainPage";
import About from "./components/About";
import ItemDetails from "./components/itemDetail/ItemDetail";
import Sellers from "./components/SellersPage/SellersPage";
import SellerDetail from "./components/SellerDetail";

const App = ({ items }) => {
  return (
    <Router>
      <Layout />
      <Switch>
        <Route exact path="/" render={() => <MainPage items={items} />} />
        <Route
          path="/items/:itemId"
          render={() => <ItemDetails items={items} sellers={sellers} />}
        />
        <Route path="/about" render={() => <About />} />
        <Route
          exact
          path="/sellers"
          render={() => <Sellers sellers={sellers} />}
        />
        <Route
          path="/sellers/:sellerId"
          render={() => <SellerDetail items={items} />}
        />
      </Switch>
    </Router>
  );
};

export default App;
