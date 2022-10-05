import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./CardProduct.css";

const CardProduct = ({ name, price, description, image, measure, id }) => {
  const [count, setCount] = useState(0);

  const handleCart = () => {
    localStorage.setItem(id, count);
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
            <p
              className="less"
              value={count}
              onClick={() => setCount(count - 1)}
            >
              -
            </p>
          </div>
          <figure onClick={handleCart}>
            <img src="https://svgshare.com/i/n9M.svg" alt="" />
          </figure>
        </div>
      </div>
      <hr />
    </>
  );
};

export default CardProduct;
