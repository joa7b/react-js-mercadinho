import React, { useState, useEffect } from "react";
import CardProduct from "../../components/CardProduct/CardProduct";

import "./style.css";

const AllProducts = () => {
  const [listProducts, setListProducts] = useState([]);
  const findAllProducts = async () => {
    const data = await fetch("http://localhost:3000/allproducts");
    const response = await data.json();
    setListProducts(response);
  };

  useEffect(() => {
    findAllProducts();
  }, []);

  return (
    <section>
      {listProducts.map((e) => {
        return (
          <CardProduct
            key={e.id}
            id={e.id}
            name={e.name}
            price={e.price}
            description={e.description}
            image={e.image}
            measure={e.measure}
          />
        );
      })}
    </section>
  );
};

export default AllProducts;
