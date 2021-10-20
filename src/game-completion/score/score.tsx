
import Win from "../leaderboard/images/image.png";
import image from "../leaderboard/images/images.png";
import profile from "../leaderboard/images/profile.png";
import Loss from "../leaderboard/images/Emoji.png"
import { Route, Switch, useHistory} from 'react-router-dom';
import './score.css';
import Leaderboard from '../leaderboard/leaderboard';
import { FacebookButton } from "react-social";
import { FacebookIcon} from "react-share";

export default function ScoreBoard() {

const total = 100;
let score:any= [95,19,20,60,90,76]; 

let Score =score[Math.floor(Math.random()*score.length)];
let url = "http://172.25.33.20:3000";

const message = ("Player Score from react App Game : "+ Score);
console.log(message)

  /* get a max number of an arr.
  *return max nuber and desplay it as max score.
  */

  function arrayMax(arr:any) {
    var len = arr.length, max = -Infinity;
    while (len--) {
      if (Number(arr[len]) > max) {
        max = Number(arr[len]);
      }
    }
    return max;
  }; 
   /*
   *get the half of the total
   *Display a meme and congrats message if the score is grater than half of the total.
   */ 
   const displayMeme = total /2;
    let images =""; 
    let congrats="";
    if (Score>= displayMeme) {

        images = Win;
        congrats = "You have won... congratulations"

      } else {
        
        images = Loss;
        congrats= "Try harder next time..."
      }
  
/*
*Routting to leaderboad component
*/ 
 function RouterLeaderboad(){
  let history = useHistory();
   const clickHandlerleaderboard = () => {
      //store Score in local sever.
   localStorage.setItem("scoreSave",Score);
   history.push("./leaderboard");
  }
   return(
      <div>
        <button onClick={clickHandlerleaderboard}>Leaderboard</button>
      </div>
  )

}
console.log(message)

  return (
    <div className="score-board">       
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
            <div className ="score"><span id ="ponit"><img src ={image} alt ="gold" width ="30" height ="30"/>
            </span>  {Score}
            </div>

             <div className ="mime">
                <p> <img src={images} alt="win" width="290" height="250" /></p>
                <p id ="points">+{Score} points<img src ={image} alt ="gold" width ="30" height ="30"/></p>
                <h1>{congrats} Relebohile</h1>

                <span><p>best Score: {arrayMax(score)}</p></span>

                <FacebookButton 
                  url= {url}
                  title= ' ACA Team social Quiz'
                  hashtag="#Team Social quiz"
                  quote={message}
                  appId={286997919766668}
                 >
                  <FacebookIcon size="40" round ={true} />
                  </FacebookButton>

                <Route>
                  <Switch>
                   <Route path="../leaderboard/leaderboard" exact component={Leaderboard}/>
                   <Route path= "/"  component = {RouterLeaderboad}/>
                 </Switch>
               </Route>   
             </div>
            </div>
          
    
    )
}

    

   
