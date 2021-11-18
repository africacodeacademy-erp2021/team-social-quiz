import React, { useEffect, useState } from 'react'

function Categories() {
    const [quiz,setQuiz]=useState<any[]>([])
    const [data, setData] =useState <any[]>([])


  //Get Method
  const apiGet = () => {
    fetch("http://localhost:4000/api/v1/category?categoryId=6190a506ca0ee2f78708e930")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  };

  const apiGet2 = () => {
    fetch("http://localhost:4000/api/v1/category?categoryId=619172290d822d00b4e956bf")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  };

  
    return (
        <div>
            
             
                
                <><button onClick={apiGet}>Pop Culture</button></>
                <button onClick={apiGet2}>History</button>
 
          
             
              {data.map((item) => (
                    <li key={item.id}>
                      {item.title},{item.description}
                    </li>
                    
                  ))}
        </div>
    )
}

export default Categories
