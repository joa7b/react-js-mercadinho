import "./Cart.css";

const Cart = ({ id, name, price }) => {
  return (
    <div className="cartContainer">
      <div className="cartChild">
        <p>{id}</p>
        <p>{name}</p>
        <p>R${price}</p>
      </div>
    </div>
  );
};

export default Cart;
