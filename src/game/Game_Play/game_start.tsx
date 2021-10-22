import './playgame.css';
import React, {useEffect, useState} from "react";
import { GameContext } from './game_Context';
import GameMemes from './game_Memes';
import GamePlay from "./game_Play";
import Myaudio from "../Game_Components/audio";


function GameStart(props:any){
  const data = JSON.stringify(localStorage.getItem("name"));
  const name = data.replace('"', "");
  const username = name.replace('"', "");

  const [selectedNumber, setSelectedNumber] = useState(10);
  const [gameState, SetGameState] = useState("PlayGame"); 
  const [startTime, SetStartTime] = useState(false);
  let   {countMinute = 0,countSeconds = 10} = props;
  let   [score, SetScore] = useState(0);
  let   playerRole = "Host";
  let   [count, SetCount] = useState(1);
  const [showNext, SetShowNext] = useState(false);
  let   [minutes, setMinutes ] = useState(countMinute);
  let   [seconds, setSeconds ] =  useState(countSeconds);
  const [currentQuestion, SetCurrentQuestion] = useState(0);
  const [lastQuestion, SetLastQuestion] = useState(false);
  const [playerName, SetPlayerName] =useState(username);
  const [scoreStatus, SetScoreStatus] = useState(false);
  let   [gameMode] = useState("Signle Mode");
  
  /**
  * set selected game mode
  * Set selected category 
  * Display Next button if player is Host
  * @param {number} selected_number
  */ 
  useEffect(()=>{ 
    if(count === 1){
    gameMode === "Single Mode"  ?  SetShowNext(true) : SetShowNext(false);
    playerRole === 'Host' ? SetShowNext(true): SetShowNext(false);
    SetCount(3);
    }
  },[gameMode, playerRole, count]);


    return(
     <div className="body" key={"bodyone"}> 
     
         <div className="body" key={"body"}>  
           <div className="audioo"><Myaudio/></div> 
             <GameContext.Provider value={{gameState, SetGameState,startTime,scoreStatus, SetScoreStatus,selectedNumber,
             setSelectedNumber,showNext, SetShowNext,score, SetScore,lastQuestion, SetLastQuestion,playerName,
             SetPlayerName,SetStartTime,seconds,setSeconds,minutes, setMinutes,currentQuestion, SetCurrentQuestion}}> 
  
             {gameState === "PlayGame" && <GamePlay/>}
             {gameState === "GameMemes" && <GameMemes/>}         
          </GameContext.Provider> 
         </div>
      
     </div>
    )
}
export default GameStart;