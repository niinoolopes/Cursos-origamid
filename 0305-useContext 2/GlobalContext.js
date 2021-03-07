import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [dados, setDados] = React.useState(null);

  const limparDados = React.useCallback(() => {
    setDados(() => null);
  }, []);

  const buscarDados = React.useCallback(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto/")
      .then((r) => r.json())
      .then((json) => setDados(json));
  }, []);

  React.useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto/")
      .then((r) => r.json())
      .then((json) => setDados(json));
  }, []);

  return (
    <GlobalContext.Provider value={{ dados, limparDados, buscarDados }}>
      {children}
    </GlobalContext.Provider>
  );
};
