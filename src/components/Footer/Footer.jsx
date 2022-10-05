import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <ul>
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
      </ul>
    </footer>
  );
};

export default Footer;
