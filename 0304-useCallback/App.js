import React, { useCallback, useState } from "react";

const set1 = new Set();
const set2 = new Set();

const Produto = () => {
  const func1 = () => {
    console.log("func1");
  };
  const func2 = useCallback(() => {
    console.log("func2");
  }, []);

  set1.add(func1);
  set2.add(func2);

  console.log("set1 ", set1);
  console.log("set2 ", set2);
  console.log('--- --- --- ---');

  return (
    <div>
      <p onClick={func1}>Produto 1</p>
      <p onClick={func2}>Produto 2</p>
    </div>
  );
};

const App = () => {
  const [contar, setContar] = useState(0);

  const handleClick = useCallback(() => {
    // 'contar' não existe dentro do useCallback
    // então não use 'contar' no setContar
    /* setContar(contar + 1); */

    // porem passando como callback temos o acesso
    // do valor anterior que é o proprio contar
    setContar((contar) => contar + 1);
  }, []);

  return (
    <div>
      <Produto />
      <button onClick={handleClick}>{contar}</button>
    </div>
  );
};

export default App;
