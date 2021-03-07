import { useEffect, useState } from "react";

const ButtonModal = ({ produto }) => {
  const [dados, setDados] = useState(null);

  useEffect(() => {
    if (produto !== null)
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
        .then((res) => res.json())
        .then((res) => setDados(res));
  }, [produto]);

  if (dados === null) return null;

  return (
    <div>
      <h1>{dados.nome}</h1>
      <p>R$ {dados.preco}</p>
    </div>
  );
};

export default ButtonModal;
