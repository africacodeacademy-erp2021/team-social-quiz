import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Navbar.css";
import { IconContext } from "react-icons";
import "../../App";

import LeaderboardIcon from "../Images/LeaderboardIcon.png";
import GreateGame from "../Images/GreateGame.png";
import Help from "../Images/Help.png";
import HistoryIcon from "../Images/HistoryIcon.png";
import Category from "../Images/Category.png";


function Navigation() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(sidebar);
  let history = useHistory();

  function handleCategory(){
    history.push("/Category");
  }

  function handleCreateGame(){
    history.push("/CreateGame");
  }
  function handleHistory(){
    history.push("/History");
  }
  function handleLeaderboard(){
    history.push("/Leaderboard");
  }
  return (
    <>
      <div className="Navigation">
        <IconContext.Provider value={{ color: "#fff" }}>
          <div className="navbar">
            <Link to="#" className="menu-bars">
              
            </Link>
          </div>
          <nav className={sidebar ? "nav-menu" : "nav-menu active"}>
            
            <ul>
            <span>
              <div className="Categorybar">
            <ul className="CategoryIcons">
              <img className="CategoryImage" src={Category} onClick={handleCategory} alt="CategoryIcon"/>
              </ul>
              <ul className="CategoryList">
                Categories
              </ul>
              </div>
              </span> 
              <ul className="CreateGameIcons" >
              <img className="CreateGameImage" src={GreateGame} onClick={handleCreateGame} alt="GreateGame"/>
              </ul>
              <ul className="CreatGameList">
                Create Game
              </ul>
              

              <ul className="HistoryIcons">
              <img className="HistoryImage" onClick={handleHistory} src={HistoryIcon} alt="HistoryIcon"/>
              </ul>
              <ul className="HistoryList">
                History
              </ul>
               
              <ul className="LeaderboardListIcon">
              <img className="LeaderboardImage" src={LeaderboardIcon} onClick={handleLeaderboard} alt="LeaderboardIcon"/>
              </ul>
              <ul className="LeaderboardList">
                Leaderboard
              </ul>
            

              <ul className="HelpListIcon">
              <span className="HelpBackgound">
                <img className="HelpImage" onClick={handleHistory} src={Help} alt="HelpIcon"/>
                <h3 className="HelpList">Help</h3>
              </span>
              
              </ul>
              {/* <ul className="HelpList">
                Help
              </ul> */}
              
            </ul>
          </nav>
        </IconContext.Provider>
      </div>
    </>
  );
}

export default Navigation;
