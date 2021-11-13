import React from "react";
import Pop from "../Images/Pop.png";
import astronomy from "../Images/astronomy.png";
import chemistry from "../Images/chemistry.png";
import history from "../Images/history.png";
import Moles from '../Images/mo.jpg';
import poly from "../Images/poly-2.jpg";
import Lab from "../Images/che-2.jpg";
import Bang from "../Images/big-bang.jpg";
import Planent from "../Images/NASA.jpg";
import Myori from "../Images/oris-two.jpg"
import "./Category.css";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";


function Category() {
  const data = JSON.stringify(localStorage.getItem("name"));
  const name = data.replace('"', "");
  const playerName = name.replace('"', "");
  return (
    <div className="screen">
      <div className="hamburger">
        <Navbar />
      </div>
      <div className="sidebar">
        <br />
     
        <header>
            {" "}
            <h1 className="b1_title">
              {" "}
              <span className="designcolor">quiz</span>app
            </h1>{" "}
          </header>

        <div className="PlayerName"><img className="points_icon" width="51px"height="51px"
                alt="score" src="https://image.flaticon.com/icons/png/512/149/149071.png"/>
                {playerName}</div>
              
              
        <div>
        
           
          <input className="search" type="text" placeholder="Search Quizzes" />
        </div>
        <br />
        <span id="Most-Popular">Popular Now</span>

        <div className="img">
          <Link to="/popculture">
           <img className="PopMobile" src={Pop} alt="Pop" width="1060px" height="300px" />
           
            <div className="bottom-left-1">POP CULTURE</div>
          </Link>
        </div>

        <div id="heading-1">
          <h1>Popular Quizes and Categories</h1>
        </div>
        <div className="category-1">
          <div className="img-1">
            <Link to="/astronomy">
              <img
                src={astronomy}
                alt="Astronomy"
                width="345px"
                height="120px"
                className="darker-img"
              />
              <div className="Astronomy">ASTRONOMY</div>
            </Link>
          </div>

          <div className="img-2">
            <Link to="/chemistry">
              <img
                src={chemistry}
                alt="chemistry"
                width="345px"
                height="120px"
                className="darker-img"
                
              />
              <div className="Chemistry-T">CHEMISTRY</div>
            </Link>
          </div>
          <div className="img-3">
            <Link to="/historycategory">
              <img src={history} alt="history" width="345px" height="120px"  className="darker-img"/>
              <div className="History-T">HiSTORY</div>
            </Link>
          </div>
        </div>
        <div id="heading-2">
          <h1>Astronomy</h1>
        </div>

        <div className="category-2">
          <div className="img-4">
            <Link to="/origins">
              <img
                src={Myori}
                alt="Astronomy"
                width="345px"
                height="120px"
                className="darker-img"
              />
              <div className="Origins-T">ORIGINS</div>
            </Link>
          </div>

          <div className="img-5">
            <Link to="/bigbang">
              <img
                src={Bang}
                alt="Astronomy"
                width="345px"
                height="120px"
                className="darker-img"
              />
              <div className="Big-Bang">BIG BANG</div>
            </Link>
          </div>

          <div className="img-6">
            <Link to="/planets">
              <img
                src={Planent}
                alt="Astronomy"
                width="345px"
                height="120px"
                className="darker-img"
              />
              <div className="Planets">PLANETS</div>
            </Link>
          </div>
        </div>
        <div id="heading-3">
          <h1>Chemistry</h1>
        </div>

        <div className="category-3">
          <div className="img-7">
            <Link to="/molesandbonds">
              <img
                src={Moles}
                alt="chemistry"
                width="345px"
                height="120px"
                className="darker-img"
              />
              <div className="Moles">MOLES AND BONDS</div>
            </Link>
          </div>

          <div className="img-8">
            <Link to="/polymers">
              <img
                src={poly}
                alt="chemistry"
                width="345px"
                height="120px"
                className="darker-img"
              />
              <div className="Polymers">POLYMERS</div>
            </Link>
          </div>

          <div className="img-9">
            <Link to="/labtechniques">
              <img
                src={Lab}
                alt="chemistry"
                width="345px"
                height="120px"
                className="darker-img"

              />
              <div className="Lab">LAB TECHNIQUES</div>
            </Link>
          </div>
        </div>

        <div id="heading-4">
          <h1>History</h1>
        </div>

        <div className="category-4">
          <div className="img-10">
            <Link to="/mummiesone">
              <img src={history} alt="history" width="345px" height="120px"  className="darker-img" />
              <div className="Mummies">MUMMIES</div>
            </Link>
          </div>

          <div className="img-11">
            <Link to="/mummiestwo">
              <img src={history} alt="history" width="345px" height="120px"  className="darker-img"/>
              <div className="Mummies-1">MUMMIES</div>
            </Link>
          </div>

          <div className="img-12">
            <Link to="/mummiesthree">
              <img src={history} alt="history" width="345px" height="120px" className="darker-img" />
              <div className="Mummies-2">MUMMIES</div>
            </Link>
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default Category;