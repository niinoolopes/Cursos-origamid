// import React, { useState } from "react";
// import UserContext from "./userContext";
import Produto from "./Produto";
import { GlobalStorage } from "./GlobalContext";

const App = () => {
  // const [nome, setNome] = useState("anderson");
  // function handleClick() {
  //   setNome("novo nome");
  // }
  // return (
  //   <UserContext.Provider value={{ nome: nome }}>
  //     <button onClick={handleClick}>click</button>
  //     <Produto />
  //   </UserContext.Provider>
  // );
  // const [nome, setNome] = useState("anderson");
  // return (
  //     <Produto />
  // );

  return (
    <GlobalStorage>
      <Produto />
    </GlobalStorage>
  );
};

export default App;
