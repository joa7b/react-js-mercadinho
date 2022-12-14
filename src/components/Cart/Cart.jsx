import "./Cart.css";

const Cart = ({ id, name, subtotal }) => {
  return (
    <div className="cartContainer">
      <div className="cartChild">
        <p>{id}</p>
        <p>{name}</p>
        <p id="priceTotal">R${subtotal.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Cart;
