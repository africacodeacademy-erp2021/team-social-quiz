import React from "react";
import HistoryC from "../Images/HistoryC.jpg";
import Num from "../Images/Num.png";
import Quizes from "../Images/Quizes.png";
import Star from "../Images/Star.png";
import "./Category.css";
import Playandshare from "./play";
import Medal from "../Images/Medal.png";
import Points from "../Images/Points.png";
import Plays from "../Images/Plays.png";
import Vector from "../Images/Vector.png";
import Share from "./Share";
import Navbar from "../components/Navbar";
import AstronomyC from "../Images/AstronomyC.jpg";

function HistoryCategory() {
  return (
    <>
      <div className="screen">
        <div className="hamburger">
          <Navbar />
        </div>
        <div className="sidebar">
          <div className="Select-3">
            <img src={AstronomyC} alt="Pop" width="100%" />
          </div>
          <div className="Numplays">
            <span>
              <img className="Playicon" id="Num" src={Num} alt="Num" />
              <span id="PlaysText"> 300 Plays</span>
            </span>
            <span>
              <img className="Playicon" id="Quizes" src={Quizes} alt="Quizes" />
              <span id="QuizesText">15 Quizes </span>
            </span>
            <span>
              <img className="Playicon" id="Star" src={Star} alt="Star" />
              <span id="starText"></span>
            </span>
          </div>

          <div className="game-1">
            <span id="Hiphop-img">
              <img src={HistoryC} alt="history" width="100px" height="100px" />
            </span>
            <span id="QuizText-1">@quizapp</span>
            <span id="Quiz-1">Quiz</span>
            <span id="Hiphop">American Hip Hop</span>
            <img className="Play-1" src={Plays} alt="Play" />
            <img className="Vector-1" src={Vector} alt="Vector" />
            <span id="History-1">History</span>
            <span id="Play-btn">
              <Playandshare />
            </span>
            <span id="Share-btn">
              <Share />
            </span>
          </div>

          <div className="game-2">
            <span id="Jazz-img">
              <img src={HistoryC} alt="history" width="100px" height="100px" />
            </span>
            <span id="QuizText-2">@quizapp</span>
            <span id="Quiz-2">Quiz</span>
            <span id="Jazz">Old school Jazz</span>
            <img className="Play-2" src={Plays} alt="Play" />
            <img className="Vector-2" src={Vector} alt="Vector" />
            <span id="History-2">History</span>
            <span id="Play-btn">
              <Playandshare />
            </span>
            <span id="Share-btn">
              <Share />
            </span>
          </div>
          <div className="game-3">
            <span id="Jackson-img">
              <img src={HistoryC} alt="history" width="100px" height="100px" />
            </span>
            <span id="QuizText-3">@quizapp</span>
            <span id="Quiz-3">Quiz</span>
            <span id="Jackson">Michael Jackson</span>
            <img className="Play-3" src={Plays} alt="Play" />
            <img className="Vector-3" src={Vector} alt="Vector" />
            <span id="History-3">History</span>
            <span id="Play-btn">
              <Playandshare />
            </span>
            <span id="Share-btn">
              <Share />
            </span>
          </div>

          <div className="rightbar">
            <div id="Ranks">
              <span id="Ranks-header">Category Ranks</span>
              <div id="One">
                1 <img id="Medal" src={Medal} alt="Medal" />
                <span>{"              "}</span>
                <img id="Points-1" src={Points} alt="Points" />{" "}
              </div>
              <div id="Two">
                2 <img id="Medal-1" src={Medal} alt="Medal" />
                <span>{"             "}</span>
                <img id="Points-2" src={Points} alt="Points" />
              </div>
              <div id="Three">
                3 <img id="Medal-2" src={Medal} alt="Medal" />{" "}
                <span>{"            "}</span>
                <img id="Points-3" src={Points} alt="Points" />
              </div>
              <div id="Four">
                4 <img id="Medal-3" src={Medal} alt="Medal" />
                <span>{"            "}</span>
                <img id="Points-4" src={Points} alt="Points" />
              </div>
              <div id="Five">
                5 <img id="Medal-4" src={Medal} alt="Medal" />
                <span>{"              "}</span>
                <img id="Points-5" src={Points} alt="Points" />
              </div>
              <div id="Six">
                6 <img id="Medal-5" src={Medal} alt="Medal" />
                <span>{"                  "}</span>
                <img id="Points-6" src={Points} alt="Points" />
              </div>
              <div id="Eight">
                7<img id="Medal-6" src={Medal} alt="Medal" />
                <span>{"                "}</span>
                <img id="Points-7" src={Points} alt="Points" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HistoryCategory;
