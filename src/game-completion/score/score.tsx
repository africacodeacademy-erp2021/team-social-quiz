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
  const scorevalue = ScoreOne.replace('"', ""); 
  const PlayerScore =  parseInt(scorevalue, 10);
  

const total = 500;



 const data = JSON.stringify(localStorage.getItem("name"));
  const name = data.replace('"', "");
  const playerName = name.replace('"', "");



let url = "http://172.25.33.20:3000";

const message = ("Player Score from react App Game : "+ PlayerScore)
;

  /* get a max number of an arr.
  *return max nuber and desplay it as max score.
  */


   /*
   *get the half of the total
   *Display a meme and congrats message if the score is grater than half of the total.
   */ 
   const displayMeme = total /2;
    let images =""; 
    let congrats="";
    if (PlayerScore>= displayMeme) {

        images = Win;
        congrats = "You did great "

      } else {
        
        images = Loss;
        congrats= "Try harder next time "
      }
      let history = useHistory();
/*
*Routting to leaderboad component
*/ 
 function RouterLeaderboad(){
  let history = useHistory();
   const clickHandlerleaderboard = () => {
      //store Score in local sever.

   localStorage.setItem("scoreSave",scorevalue);
  ;
   history.push("./leaderboard");

  }
   return(
      <div>
        <button id="renck" onClick={clickHandlerleaderboard}>Leaderboard</button>
      </div>
  )

 
}
const click=()=>{
  history.push("./Category");
}

  return (
    <div className="score-board">       
         <div className="PlayerAndGameName_section">
          <div className="gameName">
            <span className="Title" onClick={click}>quiz</span>
            <span className="Title-2"onClick={click}>app</span>
          </div>
          <div className="playerName">
           <span>
              <img
              className="points_icon"
              width="51px"
              height="51px"
              alt="score"
              src={profile}
              />
            </span>{playerName}
            </div>


            </div>
            <div className ="score"><span id ="ponit"><img src ={image} alt ="gold" width ="51px" height ="51px"/>
            </span> <span>{PlayerScore}</span> 
            </div>

             <div className ="mime">
                <p> <img src={images} alt="win" width="290" height="250" /></p>
                <p id ="points">+{PlayerScore} points {"  "}
                <img src ={image} alt ="gold" width ="30" height ="30"/></p>
                <h1>{congrats} {playerName}</h1>

               


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

    

   
