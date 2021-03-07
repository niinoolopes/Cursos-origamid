// import React, { useState } from "react";
// import UserContext from "./userContext";
import ButtonGet from "./ButtonGet";
import ButtonClear from "./ButtonClear";
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
      <ButtonGet />
      <ButtonClear />
      <Produto />
    </GlobalStorage>
  );
};

export default App;
