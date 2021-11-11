import React from "react";
import "../../App";
import Navbar from "../components/Navbar";

function CreateGame() {
  return (
    <div className="screen">
    <div className="hamburger">
      <Navbar />
    </div>
    <div className="sidebar">
        <h1>Greate Game</h1>
      </div>
    </div>
  );
}
export default CreateGame;
