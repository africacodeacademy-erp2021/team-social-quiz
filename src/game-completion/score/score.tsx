import Win from "../leaderboard/images/image.png";
import image from "../leaderboard/images/images.png";
import profile from "../leaderboard/images/profile.png";
import Loss from "../leaderboard/images/Emoji.png"
import { Route, Switch, useHistory} from 'react-router-dom';
import './score.css';
import Leaderboard from '../leaderboard/leaderboard';
import { FacebookIcon,
  FacebookShareButton,
  TelegramShareButton, 
  TelegramIcon,
  WhatsappShareButton,
  WhatsappIcon, 
  TwitterShareButton, 
  TwitterIcon} from "react-share";

export default function ScoreBoard() {

  const score1 = JSON.stringify(localStorage.getItem("PlayerScore"));
  const ScoreOne = score1.replace('"', "");
  const PlayerScore = ScoreOne.replace('"', "");

const total = 100;
let score:any= [95,19,20,60,90,10];
let Score =score[Math.floor(Math.random()*score.length)];

 const data = JSON.stringify(localStorage.getItem("name"));
  const name = data.replace('"', "");
  const playerName = name.replace('"', "");



let url = "http://172.25.33.20:3000";

const message = ("Player Score from react App Game : "+ PlayerScore)
;

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
   localStorage.setItem("scoreSave",PlayerScore);
  ;
   history.push("./leaderboard");
  }
   return(
      <div>
        <button id="renck" onClick={clickHandlerleaderboard}>Leaderboard</button>
      </div>
  )

}


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
            /></span>{playerName}
            </div>


            </div>
            <div className ="score"><span id ="ponit"><img src ={image} alt ="gold" width ="30" height ="30"/>
            </span> <span>{PlayerScore}</span> 
            </div>

             <div className ="mime">
                <p> <img src={images} alt="win" width="290" height="250" /></p>
                <p id ="points">+{PlayerScore} points<img src ={image} alt ="gold" width ="30" height ="30"/></p>
                <h1>{congrats} {playerName}</h1>

                <span><p>best Score: {arrayMax(score)}</p></span>


                  <Switch>
                   <Route path="../leaderboard/leaderboard" exact component={Leaderboard}/>
                   <Route path= "/"  component = {RouterLeaderboad}/>
                 </Switch>

                <div className="Icons">
                  <FacebookShareButton id ="FB"
                  url= {url}
                  hashtag="#Team Social quiz (TSQ)"
                  quote={message}
                 >
                  <FacebookIcon size="40" round ={true} />
                  </FacebookShareButton>

                  <TwitterShareButton id ="twitter"
                   url={url}
                    title = {message}
                    >
                    <TwitterIcon size = "40" round= {true}/>
                  </TwitterShareButton>

                  <TelegramShareButton id ="telegram"
                   url={url}
                    title= {message}>
                    <TelegramIcon round ={true} size = "40"/>
                  </TelegramShareButton>

                  <WhatsappShareButton  id ="whatsapp"
                    title={message}
                    url={url}>
                    <WhatsappIcon round ={true} size = "40"/>
                  </WhatsappShareButton>
                  </div>
             </div>
            </div>
          
    
    )
}

    

   
