import { Route, Switch, useHistory } from "react-router-dom";
import profile from "../leaderboard/images/profile.png";
import ScoreBoard from "../score/score";
import image from "../leaderboard/images/winer.png";
import winer2 from "../leaderboard/images/winer2.png";
import winer3 from "../leaderboard/images/winer3.png";


import './leaderboard.css'


export default function Leaderboard(props:any){

    const score = JSON.stringify(localStorage.getItem("scoreSave"));
    const Scorereplace = score.replace('"', "");
    const scoreReplace = Scorereplace.replace('"', "");

    function Retry(){
        let history = useHistory();
        const clickHandlerRetry = () => {
 
        
          history.push("./score");
          }
    
        return(
          <div>
            <button className="Retry" onClick={clickHandlerRetry}>Retry</button>
          </div>
        )

      }

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
                    <div >
                   <img className="points_icon2"
                      width="90px"
                      height="90px"
                      alt="score"
                      src={winer2}/>
                    <span className = "number2">2</span>
                     <img className="points_icon1"
                       width="120px"
                       height="120px"
                       alt="score"
                       src={image}/>
                    <span className = "number1">1</span>

                    <img
                      className="points_icon3"
                      width="90px"
                      height="90px"
                      alt="score"
                      src={winer3}></img>
                    <span className = "number3">3</span> 
                    </div>
                    </div>

                <div className="board">
                    <div className ="position"><span id ="winNumber">1</span>
                    <img className="win"
                       width="40px"
                       height="40px"
                       alt="score"
                       src={image}/> 
                    <span className ="username">Relebohile</span>
                    <span className ="score1">{scoreReplace}<span>pts</span></span>
                    
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
                <Route>
                  <Switch>
                   <Route path="../score/score" exact component={ScoreBoard}/>
                   <Route path= "/"  component = {Retry}/>
                 </Switch>
               </Route>  
                </div>
                
                </div>
            </div>
  
     
    
    )
}
