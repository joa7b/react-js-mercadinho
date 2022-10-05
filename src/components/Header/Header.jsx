import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="headerLogoandInput">
        <Link to="/">
          <figure>
            <img src="https://svgshare.com/i/nAG.svg" alt="" />
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
        <figure>
          <img src="https://svgshare.com/i/n9M.svg" alt="" />
          <span>Carrinho</span>
        </figure>
      </div>
    </header>
  );
};

export default Header;
