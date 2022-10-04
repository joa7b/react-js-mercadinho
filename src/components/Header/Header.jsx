import "./Header.css";

const Header = () => {
  return (
    <header>
      <figure>
        <img src="../../../images/cart3.svg" alt="" />
        <span>Blue Minimarcado</span>
      </figure>
      <div className="divHeaderName">
        <h1>Blue</h1>
        <span>Minimercado</span>
      </div>
      <div className="divHeaderInput">
        <input type="text" placeholder="Pesquise o item" />
      </div>
    </header>
  );
};

export default Header;
