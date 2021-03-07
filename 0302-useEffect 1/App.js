import React, { useState } from "react";

const App = () => {
  let [contar, setContar] = useState(0);

  React.useEffect(() => {
    console.log("Executou");
  }, []);

  React.useEffect(() => {
    document.title = 'Total ' + contar
  }, [contar]);

  return (
    <div>
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  );
};



export default App;
