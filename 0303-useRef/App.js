import React, {
  useRef,
  // useEffect,
  useState,
} from "react";

const App = () => {
  // const video = useRef();
  // useEffect(() => {
  //   console.log(video);
  // }, []);

  // return <video ref={video} />;

  // const [comentarios, setComentarios] = useState(["teste 1", "teste 2"]);
  // const [input, setInput] = useState("");
  // const inputElement = useRef()

  // function handleClick() {
  //   setComentarios([...comentarios, input]);
  //   setInput("");
  //   inputElement.current.focus()

  // }
  // return (
  //   <div>
  //     <input
  //       type="text"
  //       ref={inputElement}
  //       value={input}
  //       onChange={({ target }) => setInput(target.value)}
  //     />
  //     <br />
  //     <button onClick={handleClick}>Enviar</button>
  //     <ul>
  //       {comentarios.map((comentario) => (
  //         <li key={comentario}>{comentario}</li>
  //       ))}
  //     </ul>
  //   </div>
  // );

  const [carrinho, setCarrinho] = useState(0);
  const [notificacao, setNotificacao] = useState(0);
  const timeoutRef = useRef();

  function handleClick() {
    setCarrinho(carrinho + 1);
    setNotificacao("Item adicionado ao carrinho");
    
    // limpa time quando existir antes
    clearTimeout(timeoutRef.current)
    
    // define time para limpar notificação
    timeoutRef.current = setTimeout(() => {
      setNotificacao(null);
    }, 2000);
    
  }

  return (
    <div>
      <p>{notificacao}</p>
      <button onClick={handleClick}>Adicionar Carrinho {carrinho}</button>
    </div>
  );
};

export default App;
