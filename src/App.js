import { useState } from "react";

const App = () => {
  let [contar, setContar] = useState(0);
  let [items, setItems] = useState(["item 1"]);

  function handleClick() {
    setContar(contar + 1);
    setItems((items) => [...items, `Item ${contar + 1}`]);
  }

  return (
    <div>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
      <button onClick={handleClick}>{contar}</button>
    </div>
  );
};

export default App;
