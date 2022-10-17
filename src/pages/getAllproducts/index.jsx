import React, { useState, useEffect } from "react";
import CardProduct from "../../components/CardProduct/CardProduct";

import "./style.css";

const AllProducts = () => {
  const [listProducts, setListProducts] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [measure, setMeasure] = useState("");
  const [image, setImage] = useState("");

  const findAllProducts = async () => {
    const data = await fetch("https://mercadinho.herokuapp.com/produtos");
    const response = await data.json();
    setListProducts(response);
  };

  const handleSubmit = async (e) => {
    const newProduct = {
      name: name,
      description: description,
      price: price,
      measure: measure,
      image: image,
    };

    const init = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    };

    const dataPost = await fetch(
      "https://mercadinho.herokuapp.com/produtos/create",
      init
    );
    const responsePost = await dataPost.json();

    console.log(responsePost);
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
            value={name}
            id="name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Insira a descrição"
            value={description}
            id="description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="text"
            placeholder="Insira o preço"
            value={price}
            id="price"
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            type="text"
            placeholder="Insira a medida"
            value={measure}
            id="measure"
            onChange={(e) => setMeasure(e.target.value)}
          />
          <input
            type="text"
            placeholder="Insira a imagem"
            value={image}
            id="image"
            onChange={(e) => setImage(e.target.value)}
          />
          <button type="submit">Criar produto</button>
        </form>
      </div>
    </section>
  );
};

export default AllProducts;
