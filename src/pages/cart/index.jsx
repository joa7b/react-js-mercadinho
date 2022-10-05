import React, { useState, useEffect } from "react";
import Cart from "../../components/Cart/Cart";

import "./style.css";

const CartPage = () => {
  const [products, setProducts] = useState([]);

  const findAllProducts = async () => {
    const data = await fetch("http://localhost:3000/allproducts");
    const response = await data.json();


    setProducts(response);
  };

  useEffect(() => {
    findAllProducts;
  }, []);
  return (
    <section className="cartPageContainer">
      <h2>Carrinho</h2>
      <div className="cartPageChild">
        <div className="cartChild">
          <p>Id</p>
          <p>Nome</p>
          <p>Sub-total</p>
        </div>
        <Cart />
        <button>Finalizar Compra</button>
      </div>
    </section>
  );
};

export default CartPage;
