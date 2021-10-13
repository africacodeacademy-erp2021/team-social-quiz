import React from "react";
import Plays from "../Images/Plays.png";
import Share from "../Images/Share.png";

function Playandshare() {
  return (
    <div>
      <button>
        <img id="Play" src={Plays} alt="Plays" />
        <span>Play</span>
      </button>
      <button>
        <img id="Share" src={Share} alt="Share" />
        <span>Share</span>
      </button>
    </div>
  );
}

export default Playandshare;
