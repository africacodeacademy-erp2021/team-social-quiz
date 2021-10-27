import './playgame.css';
import { GameContext } from './game_Context';
import Timer from '../Game_Components/timer';
import EndButton from '../Game_Components/endButton';
import ProgressBar from '../Game_Components/progress_Bar';
import {useState, useContext, useEffect} from "react";
import  GameScoreFunction from '../gameFunctions/gameScoreFunction';
import { Shuffle_questions } from '../gameFunctions/randomizeFunction';
import { General_questions } from '../Questions/general-questions';

function Game_Play(){
let {score,addScoreOnNext} = GameScoreFunction();
Shuffle_questions(Array);
const [showMessage, SetShowMessage] = useState(false); 
const [random, setRandom] = useState(General_questions); 
const [timeup, SetTimeUp] = useState(false);
let   [count, SetCount] = useState(2);
const space = " . ";
let counterKey = 0;

const {currentQuestion, SetCurrentQuestion} = useContext(GameContext);
const {selectedNumber} = useContext(GameContext);
const {scoreStatus} = useContext(GameContext);
const {SetLastQuestion} =  useContext(GameContext);
const {SetGameState} = useContext(GameContext);
const {showNext} = useContext(GameContext);
const {SetStartTime} = useContext(GameContext);
const {SetScoreStatus} = useContext(GameContext);
let {seconds, setSeconds} = useContext(GameContext);

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
    Shuffle_questions(General_questions);
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
* Move to next question
* @param {number} nextQuetions 
*/
const onNextquestion = ()=>{ 
    if(scoreStatus === true){
      addScoreOnNext();
    };

    let nextQuetions = currentQuestion + 1;
    SetGameState("GameMemes"); 

    if (nextQuetions < selectedNumber){ 
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
  <div className="question_display" key={"questions"}>
    <div className="backgroundImg" key={"img"}>
     <div className="progress_bar" key={"bar"}> <h1 className="myprogressBar"><ProgressBar key={"progressBar"}/> </h1> </div>       
        <div className="audio_time_score-section" key={"row-section"}>
                <div className="audio-section" key={"audio"}><p className="audio"> </p> </div>
                <div className="timer-section" key={"timer"}><button className="timer" key={"timerBtn"}> <Timer key={"time"}/> </button> </div>
                <div className="score-section" key={"score"}>   
                <img className="img" alt="score"  key={"scoreImg"}
                src="https://cdn.iconscout.com/icon/premium/png-256-thumb/gold-bars-7-586897.png"/>                     
                <h3 className="score_count" id="score" >{score} </h3> 
                </div>
        </div> 
    <div key={"text_Section"}>                    
            <div key={"questions"}>
                <div className='questions-section' key={"question_text"}>
                   <p data-testid="display_questions"> 
                        <span>{currentQuestion + 1 }                           
                          {space}                           
                         </span>
                        {random[currentQuestion].questionText} 
                    </p>                        
                </div>
            </div>       
                 <div className='answer-section' key={"answer_button"}>
                    {
                      random[currentQuestion].answerOptions.map((answerOptions) => (      
                      <button  className='answer-button' key={"myAnswerBtns"+ counterKey++} onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)}>
                      {answerOptions.answerText}</button> ))                                          
                    }                         
                 </div>    
           <div key={"buttons"}>
                <br/>
                    {
                        showMessage ?(                      
                        <p className="showMessage" key={"msg"}>Your Answer was Captured </p>
                        ):( <> </>) 
                    }
                    {   
                        timeup ?(                      
                        <p className="showMessage2" key={"msg2"}>Your Time is Up!!</p>
                        ):( <> </> )
                    } 
                    <br/>    
                    {   
                        showNext ?( <>  
                        <EndButton key={"end_button"}/>             
                        <button className="onNext" onClick={onNextquestion} key={"next_button"}> Next </button>
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

