import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="headerLogoandInput">
        <figure>
          <img src="https://svgshare.com/i/nAG.svg" alt="" />
          <h1>Blue Minimercado</h1>
        </figure>
        <div className="divHeaderInput">
          <input type="text" placeholder="Pesquise o item" />
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
