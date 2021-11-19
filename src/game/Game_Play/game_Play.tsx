import './playgame.css';
import { GameContext } from './game_Context';
import Timer from '../Game_Components/timer';
import ProgressBar from '../Game_Components/progress_Bar';
import {useState, useContext, useEffect} from "react";
import  GameScoreFunction from '../gameFunctions/gameScoreFunction';
import { Shuffle_questions } from '../gameFunctions/randomizeFunction';
import { American_Hiphop } from '../Questions/hiphop';
import Modal from '../Game_Components/EndButtonModal/EndButtonModal';
import Backdrop from '../../Dashboard/components/PlayButton/Backdrop';


function Game_Play(){
let {addScoreOnNext} = GameScoreFunction();

const [random, setRandom] = useState(American_Hiphop); 
const [modalIsOpen, setModalIsOpen] =  useState(false);
const [timeup, SetTimeUp] = useState(false);
let   [count, SetCount] = useState(2);
const space = " . ";
let counterKey = 0;

const {currentQuestion, SetCurrentQuestion} = useContext(GameContext);
const {selectedNumber} = useContext(GameContext);
let   {score} = useContext(GameContext);
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
    Shuffle_questions(American_Hiphop);
    American_Hiphop.splice(10,0);
           let temp = American_Hiphop;
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
        
        SetTimeUp(true);                 
    }else{  
            
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
        SetTimeUp(false);
        setSeconds(10);                       
        SetCurrentQuestion(nextQuetions);
    }else{
        setSeconds(0);
        SetLastQuestion(true); 
    }         
}

function deleteHandler(){ 
    setModalIsOpen(true);
}
function closeModalHandler(){
     setModalIsOpen(false);
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
                
                    {   
                        timeup ?(                      
                        <p className="showMessage2" key={"msg2"}>Your Time is Up!!</p>
                        ):( <> </> )
                    } 
                    <br/>    
                    {   
                        showNext ?( <div >
                           
                        {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />} 
                        {modalIsOpen && <Backdrop onCancel={closeModalHandler}/>}
  
                        <button className="onend" onClick={deleteHandler}> End </button>   
                              
                        <button className="onNext" onClick={onNextquestion} key={"next_button"}> Next </button>
                       
                        </div>
                        ):( <></>)

                    }
         </div>    
    </div>
  </div>  
 </div>
 
 )
}
export default Game_Play;

