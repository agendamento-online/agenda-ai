import { Link } from "react-router-dom";
import "./Rodape.css";

function Rodape() {
  // const anoAtual = new Date().getFullYear();

  return (
    <footer className="rodape_root">
      <Link to={"/cadastro-cliente"}>Novo Cliente</Link>
      <Link to={"/lista-tarefas"}>Lista de Tarefas</Link>
      <Link to={"/lista-clientes"}>Meus Clientes</Link>
      {/* <h6>
        Copyright © {anoAtual} - Todos os direitos
        reservados.
      </h6> */}
    </footer>
  );
}

export default Rodape;
