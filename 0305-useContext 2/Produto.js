import React from "react";
import { GlobalContext } from "./GlobalContext";

const Produto = () => {
  const global = React.useContext(GlobalContext);

  if (global.dados == null) return null;

  return (
    <div>
      <p>Produtos:</p>
      <ul>
        {global.dados.map((produto) => (
          <li key={produto.id}>{produto.nome}</li>
        ))}
      </ul>
    </div>
  );
};

export default Produto;
