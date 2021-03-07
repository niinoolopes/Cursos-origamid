import React from "react";

const useLocalStorage = (key, inicial) => {
  const [state, setState] = React.useState(() => {
    const local = window.localStorage.getItem(key);
    // busca no localstorage valor gravado ou então retorna inicial para ser valor inicial
    return local ? local : inicial;
  });

  React.useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [state, key]);

  return [state, setState]
};

export default useLocalStorage