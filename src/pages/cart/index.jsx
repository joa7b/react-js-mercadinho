import React, { useState, useEffect } from "react";
import Cart from "../../components/Cart/Cart";
import productsApi from "../../api/produtos.api";

import "./style.css";

const CartPage = () => {
  const [products, setProducts] = useState([]);
  const [listIdQuantity, setListIdQuantity] = useState([]);

  const findAllProducts = async () => {
    const allProductsList = await productsApi.getAllProducts();
    const listIdLocalStorage = [];

    for (let n of allProductsList) {
      if (localStorage.getItem(n._id)) {
        listIdLocalStorage.push({
          id: n._id,
          quantity: localStorage.getItem(n._id),
        });
      }
    }

    setListIdQuantity(listIdLocalStorage);

    const listCart = [];

    for (let n of listIdLocalStorage) {
      const byIdProductsList = await productsApi.getByIdProducts(n.id);
      listCart.push(byIdProductsList[0]);
    }
    setProducts(listCart);
  };

  useEffect(() => {
    findAllProducts();
  }, []);

  const handleClick = () => {
    localStorage.clear();
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
          let subtotal = 0;
          for (let o of listIdQuantity) {
            if (o.id == e._id) {
              subtotal = o.quantity * e.price;
            }
          }
          return (
            <Cart key={e._id} id={e._id} name={e.name} subtotal={subtotal} />
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
