import React, { useMemo, useState } from "react";

function operacaoLenta() {
  let c;
  for (let i = 0; i < 100000000; i++) {
    c = i + i / 10;
  }
  return c;
}

const App = () => {
  const [contar, setContar] = useState(0);

  // const valor = useMemo(() => {
  //   const localItem = window.localStorage.getItem("produto");
  //   console.log("aconteceu memo");
  //   return localItem;
  // }, []);

  const t1 = performance.now();

  // const valor = operacaoLenta();
  const valor = useMemo(() => operacaoLenta(), []);
  console.log(performance.now() - t1);

  return <button onClick={() => setContar(contar + 1)}>{contar}</button>;
};

export default App;
