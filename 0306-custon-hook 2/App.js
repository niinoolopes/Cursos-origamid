import React from "react";
import useFetch from "./useFetch";


const App = () => {
  const { request, data, loading, error } = useFetch();

  React.useEffect(() => {
    (async function fetchData() {
      const { response, json } = await request(
        "https://ranekapi.origamid.dev/json/api/produto/"
      );
      console.log(response, json);
    })();
  }, []);

  if (error) return <p>{error}</p>;

  if (loading) return <p>Carregando ...</p>;

  if (data)
    return (
      <div>
        {data.map((produto) => (
          <div key={produto.id}>{produto.nome}</div>
        ))}
      </div>
    );
  else return null;
};

export default App;
