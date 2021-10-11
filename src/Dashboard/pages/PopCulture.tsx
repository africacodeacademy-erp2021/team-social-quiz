import React from "react";
import Pop from "../Images/Pop.png";
import history from "../Images/history.png";

import "./Category.css";
import Playandshare from "./playandshare";

function PopCulture() {
  return (
    <>
      <div>
        <div className="img">
          <img src={Pop} alt="Pop" width="100%;" height="200px" />
        </div>

        <div className="game-1">
          <img src={history} alt="history" width="100px" height="100px" />
          <span>Quiz American Hip Hop</span>
          <Playandshare />
        </div>

        <div className="game-2">
          <img src={history} alt="history" width="100px" height="100px" />

          <Playandshare />
        </div>
        <div className="game-3">
          <img src={history} alt="history" width="100px" height="100px" />
          <Playandshare />
        </div>
      </div>
    </>
  );
}

export default PopCulture;
