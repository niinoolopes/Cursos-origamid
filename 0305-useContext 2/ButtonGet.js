import React from "react";
import { GlobalContext } from "./GlobalContext";

function ButtonGet() {
  const { buscarDados } = React.useContext(GlobalContext);
  return (
    <div>
      <button onClick={() => buscarDados()}>Buscar dados</button>
    </div>
  );
}

export default ButtonGet;
