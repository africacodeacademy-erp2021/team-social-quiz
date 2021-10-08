import React, {useState} from "react";
import { GameContext } from './game_Context';
import Last_Meme from "../Game_Components/last_meme";
import Game_Memes from './game_Memes';
import Game_Play from "./game_Play";

function Game_Start(props:any){
  const [selected_number, setSelected_number] = useState(10);
  const [gameState, SetGameState] = useState("PlayGame"); 
  const [startTime, SetStartTime] = useState(false);
  let   {countMinute = 0,countSeconds = 10} = props;
  let   [score, SetScore] = useState(0);
  const [showNext, SetShowNext] = useState(false);
  let   [minutes, setMinutes ] = useState(countMinute);
  let   [seconds, setSeconds ] =  useState(countSeconds);
  const [playerName, SetPlayerName] =useState("Molati");
  const [scoreStatus, SetScoreStatus] = useState(false);
  const [currentQuestion, SetCurrentQuestion] = useState(0);
  const [lastQuestion, SetLastQuestion] = useState(false);
  let userRole = 'Host'; 
 
/**
* Set number of questions on load
* Display Next button if player is Host
* @param {number} selected_number
*/  
  window.addEventListener("load", function (){  
    setSelected_number(5);  
    if(userRole === 'Host'){
    SetShowNext(true);
    
    }      
  });
 
    return(
     <div className="question_display"> 
         <div className="body">               
          <GameContext.Provider value={{gameState, SetGameState,startTime,scoreStatus, SetScoreStatus,selected_number,
             setSelected_number,showNext, SetShowNext,score, SetScore,lastQuestion, SetLastQuestion,playerName,
             SetPlayerName,SetStartTime,seconds,setSeconds,minutes, setMinutes,currentQuestion, SetCurrentQuestion}}> 
  
             {gameState === "PlayGame" && <Game_Play/>}
             {gameState === "GameMemes" && <Game_Memes/>}
             {gameState === "LastMeme" && <Last_Meme/>}             
          </GameContext.Provider> 
         </div>
      
     </div>
    )
}
export default Game_Start;