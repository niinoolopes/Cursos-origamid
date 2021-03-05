import { useState } from "react";
import ButtonModal from "./ButtonModal";
import Modal from "./Modal";
// import ButtonModal from './ButtonModal'

const App = () => {
  let [modal, setModal] = useState(0);

  return (
    <div>
      <p>{modal ? "modal aberto" : "modal fechado"}</p>
      <Modal setModal={setModal} modal={modal} />
      <ButtonModal setModal={setModal} />
    </div>
  );
};

export default App;
