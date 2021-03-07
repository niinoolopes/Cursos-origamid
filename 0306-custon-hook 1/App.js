import React from "react";
import useLocalStorage from "./useLocalStorage";
const App = () => {
  const [produto, setProduto] = useLocalStorage("produto", "");

  function handleClick(event){
    setProduto(event.target.innerText)
  }
  return (
    <div>
      <p>Produto: {produto}</p>
      <button onClick={handleClick}>
        notebook
      </button>
      <button onClick={handleClick}>
        smartphone
      </button>
    </div>
  );
};

export default App;
