import React, { useEffect, useState } from 'react'

function Quiz() {
    const [quiz,setQuiz]=useState<any[]>([])
    useEffect(()=>{ 
    var request = new XMLHttpRequest(); 
    request.onreadystatechange = function() { 
    if (request.readyState === 4 && request.status === 200) { 
    const response=JSON.parse(request.response) 
    setQuiz(response) 
    } 
    }; 
    request.open('GET', 'http://localhost:4000/api/v1/quizzes', true); 
    request.send(); 
    },[]) 
    
    useEffect(()=>{ 
    console.log(quiz) 
    },[quiz]) 
    return (
        <div>
            {quiz && quiz.map(quizzes=>
                
               <><p id={quizzes.id}> {quizzes.title}</p><p id={quizzes.id}> {quizzes.description}</p><p > {quizzes.questions}</p></>
            )}
        </div>
    )
}

export default Quiz
