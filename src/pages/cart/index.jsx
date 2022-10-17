import React, { useState, useEffect } from "react";
import Cart from "../../components/Cart/Cart";

import "./style.css";

const CartPage = () => {
  const [products, setProducts] = useState([]);
  const [listIdQuantity, setListIdQuantity] = useState([]);

  const findAllProducts = async () => {
    console.log("function");
    const data = await fetch(`https://mercadinho.herokuapp.com/produtos`);
    const response = await data.json();
    const listIdLocalStorage = [];

    for (let i = 1; i <= response.length; i++) {
      if (localStorage.getItem(i)) {
        listIdLocalStorage.push({ id: i, quantity: localStorage.getItem(i) });
      }
    }

    setListIdQuantity(listIdLocalStorage);

    const listCart = [];

    for (let n of listIdLocalStorage) {
      const dataById = await fetch(`https://mercadinho.herokuapp.com/produtos/${n.id}`);
      const responseById = await dataById.json();
      listCart.push(responseById);
    }

    setProducts(listCart);
  };

  useEffect(() => {
    findAllProducts();
  }, []);

  const handleClick = () => {
    localStorage.clear();
    document.location.reload(true);
  };

  return (
    <section className="cartPageContainer">
      <h2>Carrinho</h2>
      <div className="cartPageChild">
        <div className="cartChild">
          <p>Id</p>
          <p>Nome</p>
          <p>Sub-total</p>
        </div>
        {products.map((e) => {
          console.log(e);
          let subtotal = 0;
          for (let o of listIdQuantity) {
            if (o.id == e.id) {
              subtotal = o.quantity * e.price;
            }
          }
          return (
            <Cart key={e.id} id={e.id} name={e.name} subtotal={subtotal} />
          );
        })}
        <div className="buttonContainer">
          <button>Finalizar Compra</button>
          <button onClick={handleClick}>Limpar Carrinho</button>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
