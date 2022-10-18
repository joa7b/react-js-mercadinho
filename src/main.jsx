import React from "react";
import ReactDOM from "react-dom/client";
import AllProducts from "./pages/getAllproducts";
import GetByIdProduct from "./pages/getByIdProduct";
import Cart from "./pages/cart/index";
import Login from "./pages/login/index";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Header />
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/carrinho" element={<Cart />} />
      <Route path="/produto" element={<GetByIdProduct />} />
      <Route path="/" element={<AllProducts />} />
    </Routes>
    <Footer />
  </Router>
);
