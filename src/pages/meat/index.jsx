import React, { useState, useEffect } from "react";
import CardProduct from "../../components/CardProduct/CardProduct";

import "./style.css";

const Meat = () => {
  const [listFruits, setListFruits] = useState([]);

  const findFruits = async () => {
    const data = await fetch("http://localhost:3000/meat");
    const response = await data.json();
    setListFruits(response);
  };

  useEffect(() => {
    findFruits();
  }, []);

  return (
    <section>
      {listFruits.map((e) => {
        return (
          <CardProduct
            name={e.name}
            price={e.price}
            description={e.description}
            image={e.image}
            measure={e.measure}
            id={e.id}
            key={e.id}
          />
        );
      })}
    </section>
  );
};

export default Meat;
