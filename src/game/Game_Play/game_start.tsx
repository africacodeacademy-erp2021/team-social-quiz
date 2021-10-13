import './playgame.css';
import React, {useState} from "react";
import { GameContext } from './game_Context';
import GameMemes from './game_Memes';
import GamePlay from "./game_Play";
import Myaudio from "../Game_Components/audio";


function Game_Start(props:any){
  const data = JSON.stringify(localStorage.getItem("name"));
  const name = data.replace('"', "");
  const username = name.replace('"', "");

  const [selected_number, setSelected_number] = useState(10);
  const [gameState, SetGameState] = useState("PlayGame"); 
  const [startTime, SetStartTime] = useState(false);
  let   {countMinute = 0,countSeconds = 10} = props;
  let   [score, SetScore] = useState(0);
  const [showNext, SetShowNext] = useState(true);
  let   [minutes, setMinutes ] = useState(countMinute);
  let   [seconds, setSeconds ] =  useState(countSeconds);
  const [playerName, SetPlayerName] =useState(username);
  const [scoreStatus, SetScoreStatus] = useState(false);
  const [currentQuestion, SetCurrentQuestion] = useState(0);
  const [lastQuestion, SetLastQuestion] = useState(false);
 
    return(
     <div className="body"> 
     
         <div className="body">  
           <p className="audioo"><Myaudio/></p> 
             <GameContext.Provider value={{gameState, SetGameState,startTime,scoreStatus, SetScoreStatus,selected_number,
             setSelected_number,showNext, SetShowNext,score, SetScore,lastQuestion, SetLastQuestion,playerName,
             SetPlayerName,SetStartTime,seconds,setSeconds,minutes, setMinutes,currentQuestion, SetCurrentQuestion}}> 
  
             {gameState === "PlayGame" && <GamePlay/>}
             {gameState === "GameMemes" && <GameMemes/>}         
          </GameContext.Provider> 
         </div>
      
     </div>
    )
}
export default Game_Start;