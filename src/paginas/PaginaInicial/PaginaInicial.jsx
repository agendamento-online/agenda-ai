import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import Principal from "../../comum/componentes/Principal/Principal";
import "./PaginaInicial.css";
import ServicoCliente from "../../comum/servicos/ServicoCliente.js";
import { useEffect, useState } from "react";


const instanciaServicoCliente = new ServicoCliente(); 

const PaginaInicial = () => {

  const [listaAgendamentos, setListaAgendamentos] = useState([]);

  useEffect(() => {
    const clientesDoLocalStorage = instanciaServicoCliente.listar();
    setListaAgendamentos(clientesDoLocalStorage);
  }, []);

  const excluir = (idCliente) => {
    if (confirm("Tem certeza?")) {
      const listaAtualizada = instanciaServicoCliente.excluirCliente(idCliente);
      setListaAgendamentos(listaAtualizada);
    }
  }

  return (
    <Principal titulo="Meus Agendamentos">
      {listaAgendamentos.map((cliente) => {
        return (
          <div key={cliente.id} className="meus-agendamentos_campo">
            <span>
              <strong>Nome: </strong>
              {cliente.nome}
            </span>
            <span>
              <strong>Veículo: </strong>
              {cliente.veiculo}
            </span>
            <span>
              <strong>Placa: </strong>
              {cliente.placa}
            </span>
            {/* <span>
              <strong>Serviço: </strong>
              {cliente.servico}
            </span> */}

            <BotaoCustomizado aoClicar={() => excluir(cliente.id)} >Lavação Concluida</BotaoCustomizado>
            {/* <FaTrash color="green" size={15} onClick={excluir} /> */}

          </div>
        );
      })}
    </Principal>
  );
};

export default PaginaInicial;
