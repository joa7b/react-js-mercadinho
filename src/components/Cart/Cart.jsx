import "./Cart.css";

const Cart = ({ id, name, subtotal}) => {
  return (
    <div className="cartContainer">
      <div className="cartChild">
        <p>{id}</p>
        <p>{name}</p>
        <p>R${subtotal}</p>
      </div>
    </div>
  );
};

export default Cart;