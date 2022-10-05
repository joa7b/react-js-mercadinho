import React, { useState } from "react";
import "./CardProduct.css";

const CardProduct = ({ name, price, description, image, measure, id }) => {
  const [count, setCount] = useState(0);

  const handleCart = () => {
    return console.log("handleCart");
  };

  return (
    <>
      <div className="divCardContainer">
        <figure>
          <img src="https://via.placeholder.com/200" alt="" />
          <span></span>
        </figure>
        <div className="divCardInfo">
          <h2>{name}</h2>
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
            <img src="../../../images/card2.svg" alt="" />
          </figure>
        </div>
      </div>
      <hr />
    </>
  );
};

export default CardProduct;
