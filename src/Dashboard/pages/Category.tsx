import React from "react";
import Pop from "../Images/Pop.png";
import astronomy from "../Images/astronomy.png";
import chemistry from "../Images/chemistry.png";
import history from "../Images/history.png";
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

        <div className="PlayerName"><img className="points_icon" width="30px"height="30px"
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
           
            <div className="bottom-left-1">Pop Culture</div>
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
              />
              <div className="Astronomy">Astronomy</div>
            </Link>
          </div>

          <div className="img-2">
            <Link to="/chemistry">
              <img
                src={chemistry}
                alt="chemistry"
                width="345px"
                height="120px"
              />
              <div className="Chemistry-T">Chemistry</div>
            </Link>
          </div>
          <div className="img-3">
            <Link to="/historycategory">
              <img src={history} alt="history" width="345px" height="120px" />
              <div className="History-T">History</div>
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
                src={astronomy}
                alt="Astronomy"
                width="345px"
                height="120px"
              />
              <div className="Origins-T">Origins</div>
            </Link>
          </div>

          <div className="img-5">
            <Link to="/bigbang">
              <img
                src={astronomy}
                alt="Astronomy"
                width="345px"
                height="120px"
              />
              <div className="Big-Bang">Big Bang</div>
            </Link>
          </div>

          <div className="img-6">
            <Link to="/planets">
              <img
                src={astronomy}
                alt="Astronomy"
                width="345px"
                height="120px"
              />
              <div className="Planets">Planets</div>
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
                src={chemistry}
                alt="chemistry"
                width="345px"
                height="120px"
              />
              <div className="Moles">Moles and Bonds</div>
            </Link>
          </div>

          <div className="img-8">
            <Link to="/polymers">
              <img
                src={chemistry}
                alt="chemistry"
                width="345px"
                height="120px"
              />
              <div className="Polymers">Polymers</div>
            </Link>
          </div>

          <div className="img-9">
            <Link to="/labtechniques">
              <img
                src={chemistry}
                alt="chemistry"
                width="345px"
                height="120px"
              />
              <div className="Lab">Lab Techniques</div>
            </Link>
          </div>
        </div>

        <div id="heading-4">
          <h1>History</h1>
        </div>

        <div className="category-4">
          <div className="img-10">
            <Link to="/mummiesone">
              <img src={history} alt="history" width="345px" height="120px" />
              <div className="Mummies">Mummies</div>
            </Link>
          </div>

          <div className="img-11">
            <Link to="/mummiestwo">z
              <img src={history} alt="history" width="345px" height="120px" />
              <div className="Mummies-1">Mummies</div>
            </Link>
          </div>

          <div className="img-12">
            <Link to="/mummiesthree">
              <img src={history} alt="history" width="345px" height="120px" />
              <div className="Mummies-2">Mummies</div>
            </Link>
          </div>
        </div>
        <div id="heading-5">
          <h2>Ice Breakers and Bell Ringers</h2>
        </div>
      </div>
    </div>
  );
}

export default Category;