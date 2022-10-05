import React from "react";
import ReactDOM from "react-dom/client";
import AllProducts from "./pages/getAllproducts";
import Fruits from "./pages/fruits/index";
import Grocery from "./pages/grocery/index";
import Meat from "./pages/meat/index";
import Cleaning from "./pages/cleaning/index";
import GetByIdProduct from "./pages/getByIdProduct";
import Cart from "./pages/cart/index";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Header />
    <Routes>
      <Route path="/carrinho" element={<Cart />} />
      <Route path="/produto" element={<GetByIdProduct />} />
      <Route path="/produtos/limpeza" element={<Cleaning />} />
      <Route path="/produtos/carnes" element={<Meat />} />
      <Route path="/produtos/mercearia" element={<Grocery />} />
      <Route path="/produtos/frutas" element={<Fruits />} />
      <Route path="/" element={<AllProducts />} />
    </Routes>
    <Footer />
  </Router>
);
