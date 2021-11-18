import React, { useEffect, useState } from "react";
import HistoryC from "../Images/HistoryC.jpg";
import Num from "../Images/Num.png";
import Quizes from "../Images/Quizes.png";
import Star from "../Images/Star.png";
import "./page2.css";
import Playandshare from "./play";
import Medal from "../Images/Medal.png";
import Points from "../Images/Points.png";
import Plays from "../Images/Plays.png";
import Vector from "../Images/Vector.png";
import Share from "./Share";
import Navbar from "../components/Navbar";
import HistoryC2 from "../Images/HistoryC3.jpg";

function HistoryCategory() {
  const [data, setData] =useState <any[]>([])
  const [data1, setData1] = useState <any[]>([])
  const [data2, setData2] = useState <any[]>([])


  //Get Method
  useEffect(()=>{ 
    fetch("http://localhost:4000/api/v1/category?categoryId=619172290d822d00b4e956bf")
      .then((response) => response.json())
      .then((json) => {
        console.log(json[0].title);
        console.log(json[1].title)
        setData(json[0].title);
        setData1(json[1].title);
        setData2(json[2].title);

      })},[])
  const players:any = [{
    name: "Mokokoane",
    score: 21
  },{
    name: "Relebohile",
     score: 50,
  },{
    name: "malepa",
    score: 89,
  },{
    name:"LyonmkMokokoaneRelebohile",
    score: 90,
  },{
    name: "MK",
    score: 10,
  },{
    name: "motlatsi",
    score: 45,
  },{
    name:"Nthako",
    score: 32,
},{
  name: "win",
  score: 87,
},
];

players.sort((a:any, b:any) => b.score - a.score); 

 
  return (
    <>
      <div className="screen">
        <div className="hamburger">
          <Navbar />
        </div>
        <div className="sidebar">
          <div className="Big-Container">
            <div className="Select">
              <img className="popc" src={HistoryC2} alt="popculture" />
            </div>
            </div>
            <div className="Frame">
              <div className="Numplays">
                <span>
                  <img className="Playicon" id="Num" src={Num} alt="Num" />
                  <span id="PlaysText"> 300 Plays</span>
                </span>
                <span>
                  <img
                    className="Playicon"
                    id="Quizes"
                    src={Quizes}
                    alt="Quizes"
                  />
                  <span id="QuizesText">15 Quizes </span>
                </span>
                <span>
                  <img className="Playicon" id="Star" src={Star} alt="Star" />
                  <span id="starText"></span>
                </span>
              </div>
            </div>

        <div className="game-1" >
          <span id="Hiphop-img"><img src={HistoryC} alt="history" width="100px" height="100px" /></span>
          <span id="QuizText-1">@quizapp</span>
          <span id="Quiz-1">Quiz</span>
          <span id="Hiphop">{data}</span>
          <img  className="Play-1" src={Plays} alt="Play"/>
          <img  className="Vector-1" src={Vector} alt="Vector"/>
          <span id="History-1">History</span>
          <span id="Play-btn"><Playandshare path="/MummiesOne"/><Share/></span>
          
          
        </div>
        

        <div className="game-2" >
          <span id="Jazz-img"><img src={HistoryC} alt="history" width="100px" height="100px" /></span>
          <span id="QuizText-2">@quizapp</span>
          <span id="Quiz-2">Quiz</span>
          <span id="Jazz">{data1}</span>
          <img  className="Play-2" src={Plays} alt="Play" />
          <img  className="Vector-2" src={Vector} alt="Vector"/>
          <span id="History-2">History</span>
          
          <span id="Play-btn"><Playandshare path="/MummiesTwo" /><Share/></span>
         
        </div>
        <div className="game-3" >
          <span id="Jackson-img"><img src={HistoryC} alt="history" width="100px" height="100px" /></span>
          <span id="QuizText-3">@quizapp</span>
          <span id="Quiz-3">Quiz</span>
          <span id="Jackson">{data2}</span>
          <img  className="Play-3" src={Plays} alt="Play" />
          <img  className="Vector-3" src={Vector} alt="Vector"/>
          <span id="History-3">History</span>
          <span id="Play-btn"><Playandshare path="/MummiesThree"/><Share/></span>
         
          
        </div>
        <div id="Ranks">
          <span id="Ranks-header">Category Ranks</span>

          <div className="One"><span id ="One">1</span>
            <span id  ="playerName1">{players[0].name}</span>
            <span id ="score1">{players[0].score}</span>
          </div>

          <div className="Two">
            <span id ="Two">2</span> 
            <span id  ="playerName2">{players[1].name}</span>
            <span id ="score2">{players[1].score}</span>
          </div>

          <div className="Three">
            <span id ="Three">3</span> 
            <span id  ="playerName3">{players[2].name}</span>
            <span id ="score3">{players[2].score}</span>
          </div>
          <div className="Four">
            <span id ="Four">4</span> 
            <span id  ="playerName4">{players[3].name}</span>
            <span id ="score4">{players[3].score}</span>
          </div>
          <div className="Five">
            <span id ="Five">5</span> 
            <span id  ="playerName5">{players[4].name}</span>
            <span id ="score5">{players[4].score}</span>
          </div>
          <div className="Six">
            <span id ="Six">6</span> 
            <span id  ="playerName6">{players[5].name}</span>
            <span id ="score6">{players[5].score}</span>
          </div>
          <div className="Seven">
            <span id ="Seven">7</span> 
            <span id  ="playerName7">{players[6].name}</span>
            <span id ="score7">{players[6].score}</span>
          </div>

          <img id="Medal" src={Medal} alt="Medal" />
          <img id="Medal-1" src={Medal} alt="Medal" />
          <img id="Medal-2" src={Medal} alt="Medal" />
          <img id="Medal-3" src={Medal} alt="Medal" />
          <img id="Medal-4" src={Medal} alt="Medal" />
          <img id="Medal-5" src={Medal} alt="Medal" />
          <img id="Medal-6" src={Medal} alt="Medal" />
          <img id="Points-1" src={Points} alt="Points"/>
          <img id="Points-2" src={Points} alt="Points"/>
          <img id="Points-3" src={Points} alt="Points"/>
          <img id="Points-4" src={Points} alt="Points"/>
          <img id="Points-5" src={Points} alt="Points"/>
          <img id="Points-6" src={Points} alt="Points"/>
          <img id="Points-7" src={Points} alt="Points"/>

            <div className="rightbar">
              <div id="Ranks">
                <span id="Ranks-header">Category Ranks</span>

          
  
        
        </div>
        </div>
        </div>
        </div>
        </div>
  </>
  );
}

export default HistoryCategory;
