import profile from "../leaderboard/images/profile.png";
import image from "../leaderboard/images/images.png";
//import winer from "../leaderboard/images/winer.png";

import './leaderboard.css'


export default function Leaderboard(props:any){

    const score = JSON.stringify(localStorage.getItem("scoreSave"));
    const Scorereplace = score.replace('"', "");
    const scoreReplace = Scorereplace.replace('"', "");

    const scoredata = JSON.stringify(localStorage.getItem("ScoreSave"));
    const scorename = scoredata.replace('"', "");
    const Score = scorename.replace('"', "");
    const scoreNumber = parseInt(Score);
     console.log(scoreNumber);
    
    return (
    <div className="body">
        <div className= "text">
    
        <div className="PlayerAndGameName_section">
          <div className="gameName">
            <span className="Title">quiz</span>
            <span className="Title-2">app</span>
          </div>
          <div className="playerName">
           <span> <img
              className="points_icon"
              width="50px"
              height="50px"
              alt="score"
              src={profile}
            /></span>Relebohile
            </div>

            </div>
            
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
                    <div className ="position"><span id ="number">1     </span>    Relebohile       <span>{scoreReplace}</span>pts
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
