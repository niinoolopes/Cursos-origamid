import React from 'react';

const App = () => {
  
  // function handleClick(event){
  //   console.log(event.target)
  // }
  // return <button onClick={handleClick}> Clique aqui </button>;
  

  // function handleClick(event){
  //   console.log(event.target)
  // }
  // return <button onClick={ (event) => alert(event.target.innerText) }> Clique aqui </button>;

  function handleScroll (event){
    console.log(event)
  }

  window.addEventListener('scroll', handleScroll)

  return (
    <div style={{ height: '500vh'}} >
      <button>Clique</button>
    </div>
  )

};

export default App;