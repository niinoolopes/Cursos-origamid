import React from "react";

const Modal = ({ modal, setModal }) => {
  if (modal == true)
    return (
      <div>
        Esse é o modal.
        <button onClick={() => setModal(false)}>Fechar</button>
      </div>
    );
  return null;
};

export default Modal;
