import React from "react";

const App = () => {
  const GlobalContext = React.createContext();
  const dados = {};
  return (
    <GlobalContext.Provider value={dados}>
      <h1>Meu app</h1>
    </GlobalContext.Provider>
  );
};

export default App;
