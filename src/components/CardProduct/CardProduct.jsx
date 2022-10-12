import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./CardProduct.css";

const CardProduct = ({ name, price, description, image, measure, id }) => {
  const [count, setCount] = useState(0);

  const handleCart = () => {
    localStorage.setItem(id, count);
    setCount(0)
  };

  const lessCount = () => {
    setCount(count - 1);
    if (count <= 0) {
      setCount(0);
    }
  };

  return (
    <>
      <div className="divCardContainer">
        <figure>
          <img src={image} alt="" />
          <span></span>
        </figure>
        <div className="divCardInfo">
          <Link to={"/produto?id=" + id}>
            <h2>{name}</h2>
          </Link>
          <p>{description}</p>
          <p className="cardPrice">R${price + measure}</p>
        </div>
        <div className="cardCountContainer">
          <p>{count}</p>
          <div className="divCount">
            <p
              className="more"
              value={count}
              onClick={() => setCount(count + 1)}
            >
              +
            </p>
            <p className="less" value={count} onClick={lessCount}>
              -
            </p>
          </div>
          <figure onClick={handleCart}>
            <img src="https://freesvg.org/img/mb-cart-64x64.png" alt="" />
          </figure>
        </div>
      </div>
      <hr />
    </>
  );
};

export default CardProduct;
