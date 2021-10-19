import './playgame.css';
import React, {useContext} from 'react';
import EndButton from '../Game_Components/endButton';
import { GameContext } from './game_Context';
import { useHistory } from 'react-router';
import {CongratsMemes} from '.././memeURL/congratsMemes';
import {TryAgainMemes} from '.././memeURL/tryAgainMeme';

function MyMemes(){
const {currentQuestion} = useContext(GameContext);
const {SetGameState} = useContext(GameContext); 
const {scoreStatus, SetScoreStatus} = useContext(GameContext);
const {lastQuestion} =  useContext(GameContext);
const {playerName} =  useContext(GameContext);
let {score} = useContext(GameContext);
localStorage.setItem("PlayerScore",score);
let history = useHistory();
let pointsMessage = "";
let showImg = "";
let message = "";

/**
* Set gamestate back to Playgame
* set ScoreStatus to false before moving to the next question
* @param {boolean} GameState
*/  
function NextQuestion(){
        SetScoreStatus(false); 
        SetGameState("PlayGame"); 
        if(lastQuestion === true){
        history.push("/score");
        }
}
// Meme is displayed depanding on the answer
if(scoreStatus === true){   
    showImg =  CongratsMemes[currentQuestion - 1].memeURL
    message = 'Quizapp stans!!';
    pointsMessage ="+50 points";
}else{
    showImg =  TryAgainMemes[currentQuestion - 1].memeURL
    message = 'Dont worry you can still get it right.';
    pointsMessage ="0 points";
}
    return(
    
        <div className='displayMeme_section'> 
            <div className="PlayerAndGameName_section">              
               <div className="gameName">
                <span className="Title">quiz</span><span className="Title-2">app</span>    
                </div>
               <div className="playerName"><img className="points_icon" width="50px"height="50px"
                alt="score" src="https://image.flaticon.com/icons/png/512/149/149071.png"/>
                {playerName}</div>
            </div>
                <img className="meme" src={showImg} alt="meme"/> 
                <br/>        
                {pointsMessage+" "}
                <img className="points_icon" width="50px" height="50px" alt="score"
                src="https://cdn.iconscout.com/icon/premium/png-256-thumb/gold-bars-7-586897.png"/>
                <br/>{message}<br/>            
                <EndButton/>              
                <button className="onNext" onClick={NextQuestion} > Next </button>
                <br/>
        </div>
    
    )
}
export default MyMemes;

