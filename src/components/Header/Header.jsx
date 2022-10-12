import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="headerLogoandInput">
        <Link to="/">
          <figure>
            <img src="https://freesvg.org/img/cart3.png" alt="" />
            <h1>Blue Minimercado</h1>
          </figure>
        </Link>
        <div className="divHeaderInput">
          <ul>
            <Link to="/produtos/frutas">
              <li>Frutas</li>
            </Link>
            <Link to="/produtos/mercearia">
              <li>Mercearia</li>
            </Link>
            <Link to="/produtos/carnes">
              <li>Carnes</li>
            </Link>
            <Link to="/produtos/limpeza">
              <li>Limpeza</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="divHeaderCard">
        <div className="divLoginCart">
          <figure>
            <img src="https://via.placeholder.com/100" alt="" className="headerProfilePic"/>
            <span>Admin</span>
          </figure>
        </div>
        <Link to="/carrinho">
          <figure>
            <img src="https://freesvg.org/img/mb-cart-64x64.png" alt="" />
            <span>Carrinho</span>
          </figure>
        </Link>
      </div>
    </header>
  );
};

export default Header;
