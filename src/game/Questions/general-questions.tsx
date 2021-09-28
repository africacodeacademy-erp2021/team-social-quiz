import React, { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import './playgame.css';


export default function General_questions(props:any){

   const questions = [
        {
            questionText: 'What is the capital city of Lesotho?',
            answerOptions: [
                { answerText: 'Maseru', isCorrect: true },
                { answerText: 'Leribe', isCorrect: false },
                { answerText: 'Quthing', isCorrect: false },
                { answerText: 'Ha-Matala', isCorrect: false },
  
               
            ],
        },
        {
            questionText: 'what is the Name of the first King of Lesotho',
            answerOptions: [
                { answerText: 'Moshoeshoe', isCorrect: true },
                { answerText: 'Molati', isCorrect: false },
                { answerText: 'Lerotholi', isCorrect: false },
                { answerText: 'Eric Sefako', isCorrect: false },
  
                
            ],
        },
        {
            questionText: 'There are 12 mounths in a year',
            answerOptions: [
                { answerText: 'True', isCorrect: true },
                { answerText: 'False', isCorrect: false },
            
               
            ],
        },
        {
            questionText: 'What B.U stand for ?',
            answerOptions: [
                { answerText: 'Botho university', isCorrect: true },
                { answerText: 'Botho ', isCorrect: false },
                { answerText: 'university', isCorrect: false },
                { answerText: 'Bona unity', isCorrect: false },
  
              
               
            ],
        },
        {
            questionText: 'where is lesotho on the map',
            answerOptions: [
                { answerText: 'inside south', isCorrect: false },
                { answerText: 'outside south africa', isCorrect: false },
                { answerText: 'inside south africa', isCorrect: true },
                { answerText: 'inside south asia', isCorrect: false },
              
                
            ],
        },
        {
            questionText: 'How many days are there in a year',
            answerOptions: [
                { answerText: '36', isCorrect: false },
                { answerText: '360', isCorrect: false },
                { answerText: '365', isCorrect: true },
                { answerText: '35', isCorrect: false },
               
            ],
        },
        {
            questionText: 'how many does it take to get Bsc',
            answerOptions: [
              
                { answerText: '4', isCorrect: true },
                { answerText: '44', isCorrect: false },
                { answerText: '94', isCorrect: false },
                { answerText: '3', isCorrect: false },
  
               
               
            ],
        }  ,
        {
            questionText: 'what does MGC stand for?',
            answerOptions: [
                { answerText: 'Matekane group of companies', isCorrect: true },
                { answerText: 'Matekane companies', isCorrect: false },
                { answerText: 'group of companies', isCorrect: false },
                { answerText: 'Molati group of campany', isCorrect: false },
              
            
                
            ],
        },
        {
            questionText: 'what does RAM stand for?',
            answerOptions: [
                { answerText: 'random', isCorrect: false },
                { answerText: 'random memory', isCorrect: false },
                { answerText: 'random access memory', isCorrect: true },
                { answerText: 'random memories', isCorrect: false },
               
               
            ],
        },
        {
            questionText: 'what does PC stand for?',
            answerOptions: [
                { answerText: 'person computer', isCorrect: true },
                { answerText: 'person computers', isCorrect: false }, 
                { answerText: 'persons computer', isCorrect: false },
                { answerText: 'person choice', isCorrect: false },
               
            ],
        }   
    
  
  
  
    ];
  
    const [currentQuestion, SetCurrentQuestion] = useState(0);
    const [showScore, SetShowScore] = useState(false);
    const [showNext, SetShowNext] = useState(false);
    const [startTime, SetStartTime] = useState(false);
    const [scoreStatus, SetScoreStatus] = useState(false); 
    const [showMessage, SetShowMessage] = useState(false);  
    const [timeup, SetTimeUp] = useState(false);
    const [selected_number, setSelected_number] = useState(10);
    let [score, SetScore] = useState(0);
    let userRole = 'Host'; 
    const space = " . "; 
  
    const {countMinute = 0,countSeconds = 10} = props;
    const [minutes, setMinutes ] = useState(countMinute);
    const [seconds, setSeconds ] =  useState(countSeconds);

    /**
     * Set number of questions on load
     * Display Next button if player is Host
     * @param {number} selected_number
    */    
     window.addEventListener("load", function (){  
        SetStartTime(true); 
          if(userRole === 'Host'){
             SetShowNext(true);
          } 
          
        setSelected_number(5);     
     });
       
    /**
    * Set score status
    *  @param {boolean} isCorrect 
    */
    const handleAnswerButtonClick = (isCorrect:boolean) => {  
        if(minutes === 0 && seconds === 0) {
        SetShowMessage(false); 
        SetTimeUp(true);                 
      }else{   
        SetShowMessage(true);     
          if (isCorrect) {           
                   SetScoreStatus(true);                
              } else{
                  SetScoreStatus(false);
                
           }  
       }   
    }
  
    /**
    * add 1 to score if answer is correct 
    *  @param {number} score
    */
    function addScoreOnNext(){       
        if(scoreStatus === true){
                SetScore(score +=1);
                SetScoreStatus(false);   
        }
    }
    
    /**
    * Move to next question
    * @param {number} nextQuetions 
    */
     const onNextquestion = ()=>{ 
       
          let nextQuetions = currentQuestion + 1;
          addScoreOnNext(); 
          SetStartTime(true);
            if (nextQuetions < selected_number){ 
                       SetShowMessage(false);
                       SetTimeUp(false);
                       setSeconds(10);                      
                       SetCurrentQuestion(nextQuetions);
            }else {    
                       setSeconds(0); 
                       SetShowScore(true)
                  }
           
    }
    
    /**
    * Show message depending on how well User Played
    * @param {number} score 
    */
      const totalScore = selected_number * 1;
      const halfOfScore = totalScore / 2;
      let message = ""; 
    
      if(score >= halfOfScore){   
             message ="Congratulation You Won the Game!!";
      }else{
             message = "Sorry....Try Again";             
      }

   /**
    * Set Timer minutes and seconds
    * @param {number}  Timer
    */ 
     useEffect(()=>{
       if(startTime === true){
            let Timer = setInterval(() => {
                if (seconds > 0) {
                    setSeconds(seconds - 1);
                }
                if (seconds === 0) {
                    if (minutes === 0) {                        
                        clearInterval(Timer)                        
                    } else {
                        setMinutes(minutes - 1);
                        setSeconds(59);
                    }
                } 
            }, 1000)
            return ()=> {
                    clearInterval(Timer);
                    
              };
       }
    });
      
      return (      
      <div className="question_display">        
         <div className="body">
             <div>
             <h4>bbbbbbbbbbb</h4>    
             </div>
             <div className="audio_time_score-section">

                <div className="audio-section">  <button>audio</button>  </div>

                <div className="timer-section">  <button className="timer"> {seconds} </button> </div>

                <div className="score-section">  
                      <img className="img" alt="score" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/gold-bars-7-586897.png"/>
                      <h3 className="score_count">{score} </h3> 
                </div>

            </div>      
             <>      
              <div className="answers">            
                {showScore ? (      
                  <div className='final_score_section'>      
                     You scored {score} out of {selected_number}      
                          <br/>
                              {message}
                          <br/>                   
                   </div>
                )
                :
                (                
                <>                   
                    <div>
                      <div className='questions-section' >
                            <span>{currentQuestion + 1 }                           
                              {space}                           
                           </span>{questions[currentQuestion].questionText}                       
                       </div>
                    </div>       
                 <div className='answer-section'>
                       { 
                        questions[currentQuestion].answerOptions.map((answerOptions) => (      
                        <button className='answer-button' onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)}>
                        {answerOptions.answerText}</button>                               
                       ))                                          
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
                           <button className="onend"><Link className="link" to='/Score'>End</Link></button>               
                           <button className="onNext" onClick={onNextquestion} > Next </button>
                          
                           </>
                            ):( <></>)
                      }
                 </div>    
               </>
           )}        
         </div>
       </>
    </div>
 </div>
);
}

