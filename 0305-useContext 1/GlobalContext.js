import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const [contar, setContar] = useState(0);
  function adicionarUm() {
    setContar(contar + 1);
  }
  function adicionarDois() {
    setContar(contar + 2);
  }
  return (
    <GlobalContext.Provider value={{ contar, adicionarUm, adicionarDois }}>
      {children}
    </GlobalContext.Provider>
  );
};
