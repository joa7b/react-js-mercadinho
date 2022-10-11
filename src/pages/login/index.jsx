import "./style.css";

const Login = () => {
  return (
    <section>
      <div>
        <form action="">
          <label htmlFor="">Usuário</label>
          <input type="text" />
          <label htmlFor="">Senha</label>
          <input type="password" />
          <button type="submit">Entrar</button>
        </form>
      </div>
    </section>
  );
};

export default Login;
