import './playgame.css';
import { GameContext } from './game_Context';
import Timer from '../Game_Components/timer';
import EndButton from '../Game_Components/endButton';
import ProgressBar from '../Game_Components/progress_Bar';
import {General_questions} from '../Questions/general-questions';
import React, {useState, useContext, useEffect} from "react";

function Game_Play(){
const [showMessage, SetShowMessage] = useState(false); 
const [random, setRandom] = useState(General_questions); 
const [timeup, SetTimeUp] = useState(false);
let [count, SetCount] = useState(2);
const space = " . "; 

const {currentQuestion, SetCurrentQuestion} = useContext(GameContext);
const {selected_number} = useContext(GameContext);
const {SetLastQuestion} =  useContext(GameContext);
const {SetGameState} = useContext(GameContext);
const {showNext} = useContext(GameContext);
let   {score, SetScore} = useContext(GameContext);
const {SetStartTime} = useContext(GameContext);
const {scoreStatus, SetScoreStatus} = useContext(GameContext);
let {seconds, setSeconds} = useContext(GameContext);

function shuffle_questions(array:any){   
    var number = array.length,
    temp,
    index;
while(number > 0){    
    index = Math.floor(Math.random() * number);
    number--;    
    temp = array[number];
    array[number] = array[index];
    array[index] = temp;       
}  
   return array;
} 
/**
* start Timer
*check selected number of questions
*shuffle,splice and questions display randomly
* @param {boolean} startTime
*/  
useEffect(()=>{ 
    SetStartTime(true);    
    if(count === 2){
    window.addEventListener("load", function (){      
    shuffle_questions(General_questions);
    General_questions.splice(10,0);
           let temp = General_questions;
           setRandom(temp);   
           SetCount(4); 
        })     
    }

},[SetStartTime, SetCount,count]);

/**
* Set score status
*  @param {boolean} isCorrect 
*/
 const handleAnswerButtonClick = (isCorrect:boolean) => {  
    if(seconds === 0){
        SetShowMessage(false); 
        SetTimeUp(true);                 
    }else{   
        SetShowMessage(true);     
    if(isCorrect){           
        SetScoreStatus(true);                
    } else{
       SetScoreStatus(false);                
    }  
   } 
 }  

/**
* add 50 to score if answer is correct 
*  @param {number} score
*/
function addScoreOnNext(){       
    if(scoreStatus === true){
        SetScore(score +=50);
    }
 } 
 
/**
* Move to next question
* @param {number} nextQuetions 
*/
const onNextquestion = ()=>{ 
    let nextQuetions = currentQuestion + 1;
    addScoreOnNext(); 
    SetGameState("GameMemes"); 

    if (nextQuetions < selected_number){ 
        SetShowMessage(false);
        SetTimeUp(false);
        setSeconds(10);                       
        SetCurrentQuestion(nextQuetions);
    }else{
        setSeconds(0);
        SetLastQuestion(true); 
    }         
}
    
 return(
  <div className="question_display">
    <div className="backgroundImg">
     <div className="progress_bar"> <h1 className="myprogressBar"><ProgressBar/> </h1> </div>       
        <div className="audio_time_score-section">
                <div className="audio-section"><p className="audio"> </p> </div>
                <div className="timer-section"><button className="timer"> <Timer/> </button> </div>
                <div className="score-section">   
                <img className="img" alt="score" 
                src="https://cdn.iconscout.com/icon/premium/png-256-thumb/gold-bars-7-586897.png"/>                     
                <h3 className="score_count">{score} </h3> 
                </div>
        </div> 
    <div>                   
            <div>
                <div className='questions-section' >
                    <span>{currentQuestion + 1 }                           
                    {space}                           
                    </span>{random[currentQuestion].questionText}                       
                </div>
            </div>       
                 <div className='answer-section'>
                    { 
                      random[currentQuestion].answerOptions.map((answerOptions) => (      
                      <button className='answer-button' onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)}>
                      {answerOptions.answerText}</button> ))                                          
                    }                         
                 </div>    
           <div >
                <br/>
                    { 
                        showMessage ?(                      
                        <p className="showMessage">Your Answer was Captured </p>
                        ):( <> </>) 
                    }
                    {   
                        timeup ?(                      
                        <p className="showMessage2">Your Time is Up!!</p>
                        ):( <> </> )
                    } 
                    <br/>    
                    {   
                        showNext ?( <>  
                        <EndButton/>             
                        <button className="onNext" onClick={onNextquestion} > Next </button>
                        </>
                        ):( <></>)
                    }
         </div>    
    </div>
  </div>  
 </div>
 
 )
}
export default Game_Play;


