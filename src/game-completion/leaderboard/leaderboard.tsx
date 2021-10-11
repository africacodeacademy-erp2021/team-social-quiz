import profile from "../leaderboard/images/profile.png";
import image from "../leaderboard/images/images.png";
//import winer from "../leaderboard/images/winer.png";

import './leaderboard.css'


export default function Leaderboard(props:any){

    const score = JSON.stringify(localStorage.getItem("scoreSave"));
    const Scorereplace = score.replace('"', "");
    const scoreReplace = Scorereplace.replace('"', "");
 
   /*  let scoreArr:any[] ;
    scoreArr = localStorage.getItem("scoreSave");

    
    const score= JSON.parse(scoreArr);

    console.log(score)
     */
    return (
    <div className="body">
        <div className= "text">
    
            <span id="quiz">quiz</span>app
            <span id= "username"><img src={profile} alt="win" width="30" height="30" /></span>Relebohile
            <div className ="score"><span id ="ponit"><img src ={image} alt ="gold" width ="30" height ="30"/>
            </span><span>  {scoreReplace} </span></div>
            
        
            
            <h1 id ="heading">LEADERBOARD</h1>
            <div className="leaderbord">
                <div className = "image1">
                    <div className= "number1">2
                    </div>
                </div>

                <div className= "image2">
                    <div className = "number2">1
                    
                    
                    </div>
                </div>
                <div className= "image3">
                    <div className = "number3">3
                    </div>
                    
                </div>
                <div className="board">
                    <div className ="position"><p id ="number">1</p>
                        <div className ="img"></div>
                    </div>
                    <div className ="position2"><p id ="number">2</p>
                        <div className ="img"></div>
                    </div>
                    <div className ="position3"><p id ="number">3</p>
                         <div className ="img"></div>
                    </div>
                    <div className ="position4"><p id ="number">4</p>
                        <div className ="img"></div>
                    </div>
                    <div className ="position5"><p id ="number">5</p>
                         <div className ="img"></div>
                    </div>
                    
                </div>
                </div>
                
                </div>
            </div>
  
     
    
    )
}
