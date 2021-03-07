import React, { useState, useEffect } from "react";
import Produto from './Produto'

const App = () => {
  let [produto, setProduto] = useState(null);

  // efeito apenas de inicio, pois não tem dependencia no array
  useEffect(() => {
    let produtoLocal = window.localStorage.getItem("produto");
    if (produtoLocal != null) setProduto(produtoLocal);
  }, []);

  // efeito para executar sempre que produto mudar
  useEffect(() => {
    if (produto != null) window.localStorage.setItem("produto", produto);
  }, [produto]);

  function handleClick({ target }) {
    setProduto(target.innerText);

    // fetch('https://ranekapi.origamid.dev/json/api/produto')
  }

  return (
    <div>
      <h1>Preferência: {produto}</h1>
      <button onClick={handleClick} style={{ marginRight: "0.5rem" }}>
        notebook
      </button>
      <button onClick={handleClick} style={{ marginLeft: "0.5rem" }}>
        smartphone
      </button>
      <br />
      <Produto produto={produto} />
    </div>
  );
};

export default App;
