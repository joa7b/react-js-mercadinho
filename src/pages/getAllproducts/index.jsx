import React, { useState, useEffect } from "react";
import CardProduct from "../../components/CardProduct/CardProduct";
import productsApi from "../../api/produtos.api";

import "./style.css";

const AllProducts = () => {
  const [listProducts, setListProducts] = useState([]);
 const [product, setProduct] = useState({});

  const findAllProducts = async () => {
    const AllProductsList = await productsApi.getAllProducts();
    setListProducts(AllProductsList);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(product)


    const newProduct = {
      name: product.name,
      description: product.description,
      price: product.price,
      measure: product.measure,
      image: product.image,
    };

    const init = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    };

    const productCreated = await productsApi.createProduct(init);
    console.log(productCreated);
  };

  useEffect(() => {
    findAllProducts();
  }, []);

  return (
    <section>
      {listProducts.map((e) => {
        return (
          <CardProduct
            key={e._id}
            id={e._id}
            name={e.name}
            price={e.price}
            description={e.description}
            image={e.image}
            measure={e.measure}
          />
        );
      })}
      <div className="createContainer">
        <p>Adicionar um produto</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Insira o nome"
            value={product.name}
            id="name"
            onChange={(e) => setProduct({...product, name: e.target.value})}
          />
          <input
            type="text"
            placeholder="Insira a descrição"
            value={product.description}
            id="description"
            onChange={(e) => setProduct({...product, description: e.target.value})}
          />
          <input
            type="text"
            placeholder="Insira o preço"
            value={product.price}
            id="price"
            onChange={(e) => setProduct({...product, price: e.target.value})}
          />
          <input
            type="text"
            placeholder="Insira a medida"
            value={product.measure}
            id="measure"
            onChange={(e) => setProduct({...product, measure: e.target.value})}
          />
          <input
            type="text"
            placeholder="Insira a imagem"
            value={product.image}
            id="image"
            onChange={(e) => setProduct({...product, image: e.target.value})}
          />
          <button type="submit">Criar produto</button>
        </form>
      </div>
    </section>
  );
};

export default AllProducts;
