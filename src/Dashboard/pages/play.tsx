import { useState } from "react";
import "./Category.css";

function Playandshare() {
  const [modalState, setModalState] = useState(false);

  const toggleModalState = () => {
    setModalState(!modalState);
  };

  return (
    <div className="Playandshare">
      <div className={`modalBackground modalShowing-${modalState}`}>
        <div className="modalInner">
          <div className="modalText">
            <p>SELECTION MODE</p>

            <form id="buttons" action="">
              <button id="Single">Single-Mode</button>
              <button id="Team">Team-Mode</button>
            </form>
            <button className="exitButton" onClick={() => toggleModalState()}>
              exit
            </button>
          </div>
        </div>
      </div>
      <button className="Play-btn" onClick={() => toggleModalState()}>
        Play
      </button>
    </div>
  );
}
export default Playandshare;