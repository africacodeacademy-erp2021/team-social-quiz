import './playgame.css';
import React, {useContext, useState} from 'react';
import { GameContext } from './game_Context';
import {CongratsMemes} from '.././memeURL/congratsMemes';
import {TryAgainMemes} from '.././memeURL/tryAgainMeme';
import { useHistory } from 'react-router';
import '../../Dashboard/components/PlayButton/popUp.css';
import profile from "../../game-completion/leaderboard/images/profile.png";
import Modal from '../Game_Components/EndButtonModal/EndButtonModal';
import Backdrop from '../../Dashboard/components/PlayButton/Backdrop';


function MyMemes(){
const {currentQuestion} = useContext(GameContext);
const {SetGameState} = useContext(GameContext); 
const {scoreStatus, SetScoreStatus} = useContext(GameContext);
const [modalIsOpen, setModalIsOpen] =  useState(false);
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

function deleteHandler(){  

setModalIsOpen(true);
}

function closeModalHandler(){

    setModalIsOpen(false);
}
    return(
       <div className='displayMeme_section'> 
            <div className="PlayerAndGameName_section">              
               <div className="gameName">
                <span className="Title">quiz</span><span className="Title-2">app</span>    
                </div>
                <div className="playerName">
           <span> <img
              className="points_icon"
              width="51px"
              height="51px"
              alt="score"
              src={profile}
            /></span>{playerName}
            </div>
            </div>
                <img className="meme" src={showImg} alt="meme"/> 
                <br/>        
                {pointsMessage+" "}
                <img className="points_icon" width="50px" height="50px" alt="score" key={"meme"}
                src="https://cdn.iconscout.com/icon/premium/png-256-thumb/gold-bars-7-586897.png"/>
                <br/>{message}<br/>  
                       
                {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />} 
                {modalIsOpen && <Backdrop onCancel={closeModalHandler}/>}
  
                <button className="onend" onClick={deleteHandler}> End </button>             
                <button className="onNext" onClick={NextQuestion} > Next </button>
                
        </div>
    
    )
}
export default MyMemes;

