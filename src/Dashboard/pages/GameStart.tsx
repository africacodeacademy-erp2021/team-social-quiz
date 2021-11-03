import React from 'react';
import "./Category.css";
import Language from "../Images/Language.png";
import Lock from "../Images/Lock.png"
import Player from "../Images/Player.png"

function GameStart() {
    return (
        <div className="GameStart">
            <div className="PinContainer">
                <span id="PinHeader">Game PIN:</span>
            <div>
                <input className="PinInput" type="text" placeholder="583212816" />
            </div>
            <div className="LangaugeContainer">
            <img src={Language} alt="langauge" width="20px" height="20px"/>
            <span id="LangaugeText">EN</span>
            </div>
            </div>
            <div className="StartBody">
                <h4 id="StartText">quizapp</h4>
                <button id="StartButton">Start</button>
                <div className="LockContainer">
                    <img src={Lock} alt="langauge" width="20px" height="20px"/>
                </div>
                <div className="PlayerContainer">
                <img id="PlayersIcon" src={Player} alt="langauge" width="20px" height="20px"/>
                </div>
            </div>
             
        </div>
    )
}

export default GameStart;
