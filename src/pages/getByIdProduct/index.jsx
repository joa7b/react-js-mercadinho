import React, { useState, useEffect } from "react";
import productsApi from "../../api/produtos.api";

import "./style.css";

const getByIdProduct = () => {
  const [product, setProduct] = useState("");
  const [count, setCount] = useState(0);

  const findById = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const getId = urlParams.get("id");
    const productsById = await productsApi.getByIdProducts(getId);
    setProduct(productsById[0]);
  };

  useEffect(() => {
    findById();
  }, []);

  return (
    <section className="findByIdContainer">
      <div className="findByIdChild">
        <figure>
          <img src={product.image} alt="" />
          <span></span>
        </figure>
        <div className="divInfoProductContainer">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p className="cardPrice">R${product.price + product.measure}</p>
          <div className="cartAndCount">
            <p>{count}</p>
            <div className="countContainer">
              <span id="plus" onClick={() => setCount(count + 1)}>
                +
              </span>
              <span id="less" onClick={() => setCount(count - 1)}>
                -
              </span>
            </div>
            <span className="cartContainerId">
              <img src="https://svgshare.com/i/n9M.svg" alt="cart" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default getByIdProduct;
