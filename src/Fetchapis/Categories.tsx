import React, { useEffect, useState } from 'react'

function Categories() {
    const [quiz,setQuiz]=useState<any[]>([])
    const [data, setData] =useState <any[]>([])


  //Get Method
  const apiGet = () => {
    fetch("http://localhost:4000/api/v1/quizzes")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  };

    useEffect(()=>{ 
    var request = new XMLHttpRequest(); 
    request.onreadystatechange = function() { 
    if (request.readyState === 4 && request.status === 200) { 
    const response=JSON.parse(request.response) 
    setQuiz(response) 
    } 
    }; 
    request.open('GET', 'http://localhost:4000/api/v1/catgeories', true); 
    request.send(); 
    },[]) 
    
    useEffect(()=>{ 
    console.log(quiz) 
    },[quiz]) 
    return (
        <div>
            
             {quiz && quiz.map(quizzes=>
                
                <><button onClick={apiGet}><p id={quizzes.id}>{quizzes.text} </p></button></>
 
             )}
             
              {data.map((item) => (
                    <li key={item.id}>
                      {item.title},{item.description}
                    </li>
                    
                  ))}
        </div>
    )
}

export default Categories
