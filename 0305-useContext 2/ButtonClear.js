import React from "react";
import { GlobalContext } from "./GlobalContext";

function ButtonClear() {
  const { limparDados } = React.useContext(GlobalContext);
  return (
    <div>
      <button onClick={() => limparDados()}>Limpar dados</button>
    </div>
  );
}

export default ButtonClear;
