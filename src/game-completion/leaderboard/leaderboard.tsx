import {  Route, Switch, useHistory } from "react-router-dom";
import profile from "../leaderboard/images/profile.png";
import ScoreBoard from "../score/score";
import image from "../leaderboard/images/winer.jpg";
import winer2 from "../leaderboard/images/winer2.jpg";
import winer3 from "../leaderboard/images/winer3.jpg";
import winer4 from "../leaderboard/images/win4.jpg";
import winer5 from "../leaderboard/images/win5.png";
import retry from "../leaderboard/images/retry.png";
import "./leaderboard.css";

export default function Leaderboards(props: any) {
  const score = JSON.stringify(localStorage.getItem("scoreSave"));
  const Scorereplace = score.replace('"', "");
  const scoreReplace = Scorereplace.replace('"', "");
  const getScore = parseInt(scoreReplace);

  const data = JSON.stringify(localStorage.getItem("name"));
  const name = data.replace('"', "");
  const playerName = name.replace('"', "");

  const players: any = [
    { name: "Molati", playerScore: 75 },
    { name: "Lyon", playerScore: 50 },
    { name: "Paballo", playerScore: 90 },
    { name: "Motlatsi", playerScore: 30 },
  ];
  players.push({
    name: playerName,
    playerScore: getScore,
  });
  players.sort((a: any, b: any) => b.playerScore - a.playerScore);
  
  let history = useHistory();
  function Retry() {
    let history = useHistory();
    const clickHandlerRetry = () => {
      history.push("/game_start");
    };
   

    return (
      <div>
        <button className="Retry" onClick={clickHandlerRetry}>
          <img
            className="retry"
            width="15px"
            height="15px"
            alt="score"
            src={retry}
          />{" "}
          <span className="retrtext">Retry</span>
        </button>
      </div>
    );
  }

  const click=()=>{
    history.push("./Category");
  }
  return (
    <div className="body2">
      <div className="text">
        <div className="PlayerAndGameName_section">
          <div className="gameName">
            <span className="Title" onClick={click}>
              quiz
            </span>
            <span className="Title-2" onClick={click}>
              app
            </span>
          </div>
          <div className="playerName">
            <span>
              {" "}
              <img
                className="points_icon"
                width ="51px" height ="51px"
                alt="score"
                src={profile}
              />
            </span>
            {playerName}
          </div>
        </div>

        <h1 id="heading">LEADERBOARD</h1>
        <div className="leaderbord">
          <div className="image1">
            <div>
              <img
                className="points_icon2"
                width="90px"
                height="90px"
                alt="score"
                src={winer2}
              />
              <span className="number2">2</span>
              <img
                className="points_icon1"
                width="120px"
                height="120px"
                alt="score"
                src={image}
              />
              <span className="number1">1</span>

              <img
                className="points_icon3"
                width="90px"
                height="90px"
                alt="score"
                src={winer3}
              ></img>
              <span className="number3">3</span>
            </div>
          </div>

          <div className="board">
            <div className="position">
              <span id="winNumber">1</span>
              <img
                className="win"
                width="40px"
                height="40px"
                alt="score"
                src={image}
              />
              <span className="username">{players[0].name}</span>
              <span className="score1">
                {players[0].playerScore}
                <span>pts</span>
              </span>
            </div>
            <div className="position2">
              <p id="winNumber2">2</p>
              <img
                className="win2"
                width="40px"
                height="40px"
                alt="score"
                src={winer2}
              />
              <span className="username2"> {players[1].name} </span>
              <span className="score2">
                {players[1].playerScore}
                <span>pts</span>
              </span>
              <div className="img"></div>
            </div>
            <div className="position3">
              <p id="winNumber3">3</p>
              <img
                className="win3"
                width="40px"
                height="40px"
                alt="score"
                src={winer3}
              />
              <span className="username3"> {players[2].name} </span>
              <span className="score3">
                {players[2].playerScore}
                <span>pts</span>
              </span>
            </div>

            <div className="position4">
              <p id="winNumber4">4</p>
              <img
                className="win4"
                width="40px"
                height="40px"
                alt="score"
                src={winer4}
              />
              <span className="username4"> {players[3].name} </span>
              <span className="score4">
                {players[3].playerScore}
                <span>pts</span>
              </span>
              <div className="img"></div>
            </div>
            <div className="position5">
              <p id="winNumber5">5</p>
              <img
                className="win5"
                width="40px"
                height="40px"
                alt="score"
                src={winer5}
              />
              <span className="username5"> {players[4].name} </span>
              <span className="score5">
                {players[4].playerScore}
                <span>pts</span>
              </span>
              <div className="img"></div>
            </div>
          </div>
          <Route>
            <Switch>
              <Route path="../score/score" exact component={ScoreBoard} />
              <Route path="/" component={Retry} />
            </Switch>
          </Route>
        </div>
      </div>
    </div>
  );
}
