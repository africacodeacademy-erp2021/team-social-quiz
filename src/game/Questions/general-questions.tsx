import React, { useState } from 'react';
import './playgame.css';

export default function General_questions(){

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
    const [random, setRandom] = useState(questions);
    const [showScore, SetShowScore] = useState(false);
    
    
    //shuffle and display randomly
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
  
    
    const [selected_num, setSelected_num] = useState(10);
    
   
   
   window.addEventListener("load", function (){
     
       setSelected_num(7);
       
       
         if(selected_num === 5){
  
           shuffle_questions(questions);
           questions.splice(5,5);
           let temp = questions;
           setRandom(temp);
           
  
         }else{
  
          shuffle_questions(questions);
          questions.splice(7,3);
          let temp = questions;
          setRandom(temp);      
  
         }
  
          return selected_num;
    });
  
    
    const [score, SetScore] = useState(0);
    const space = " . "; 
    
    
    /**
     * add 1 to score if answer is correct
     * @param {number} isCorrect 
     */
    const handleAnswerButtonClick = (isCorrect:any) => {
    if (isCorrect === true) {
  
     
      SetScore(score + 1);
    
         
          
  
    }else{
            
      SetScore(score + 0);
                
                
    }
    
  
    
    const nextQuetions = currentQuestion + 1;
    
        if (nextQuetions < selected_num) {
    
            SetCurrentQuestion(nextQuetions);
        }
        else {
            SetShowScore(true)
        }
    }
  
    
    const half_selected_num = selected_num / 2;
    let msg_2 = "";    
    
    if(score >= half_selected_num){
     
           msg_2 ="Congratulation You Won the Game!!";
              
          
        }
        else
        {
           msg_2 = "Sorry....Try Again";
               
        
        }
   
    return (
    
    <div className="question_display">
     
       <div className="body">
           <div><h3 className="space">.</h3></div>
           
           <div className="bar"> <h3>Progress Bar</h3> </div>
           <div><h4>Audio && other's section</h4></div>    
  
  
  
          <>
    
            <div className="answers">
          
              {showScore ? (
    
                <div className='final_score_section'>      
                   You scored {score} out of {selected_num}
    
                        <br/>
                        {msg_2}
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
  
                         </span>{random[currentQuestion].questionText}
                     
                     </div>
                  </div>
     
               <div className='answer-section'>
                     { 
                        random[currentQuestion].answerOptions.map((answerOptions) => (
    
                            <button className='answer-button' onClick={() => handleAnswerButtonClick(answerOptions.isCorrect)}>
                            {answerOptions.answerText}</button>
                           
                        ))                     
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