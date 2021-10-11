import React from "react";
import Profile from "../Images/Profile.png";
import Pop from "../Images/Pop.png";
import Astronomy from "../Images/Astronomy.png";
import chemistry from "../Images/chemistry.png";
import history from "../Images/history.png";
import "./Category.css";
import { Link } from "react-router-dom";

function Category() {
  return (
    <>
      <span className="Title">quiz</span>
      <span className="Title-2">app</span>
      <div className="img">
        <Link to="/popculture">
          <img src={Pop} alt="Pop" width="100%;" height="300px" />
        </Link>
        <span className="bottom-left">Test Your Knowledge of </span>
        <span className="bottom-left-1">Pop Culture</span>
        <span className="Astronomy">ASTRONOMY</span>
        <span className="Origins">Origins</span>
        <span className="Big-Bang">The Big Bang</span>
        <span className="Planets">PLANETS</span>
        <span className="Polymers">Polymers</span>
        <span className="Lab">Lab Techniques</span>
        <span className="Moles">Moles and Bonds</span>
        <span className="Mummies">Mummies</span>
        <span className="Mummies-1">Mummies</span>
        <span className="Mummies-2">Mummies</span>
        <span className="Chemistry-T">CHEMISTRY</span>
        <span className="History-T">HISTORY</span>
      </div>
      <div id="heading-1">
        <h1>Popular Quizes and Categories</h1>
      </div>
      <div className="category-1">
        <div>
          <input className="search" type="text" placeholder="Search Quizzes" />
        </div>

        <div className="img-1">
          <img src={Astronomy} alt="Astronomy" width="345px" height="120px" />
        </div>

        <div className="img-2">
          <img src={chemistry} alt="chemistry" width="345px" height="120px" />
        </div>
        <div className="img-3">
          <img src={history} alt="history" width="345px" height="120px" />
        </div>
      </div>
      <div id="heading-2">
        <h1>Astronomy</h1>
      </div>

      <div className="category-2">
        <div className="img-4">
          <img src={Astronomy} alt="Astronomy" width="345px" height="120px" />
        </div>

        <div className="img-5">
          <img src={Astronomy} alt="Astronomy" width="345px" height="120px" />
        </div>

        <div className="img-6">
          <img src={Astronomy} alt="Astronomy" width="345px" height="120px" />
        </div>
      </div>
      <div id="heading-3">
        <h1>Chemistry</h1>
      </div>

      <div className="category-3">
        <div className="img-7">
          <img src={chemistry} alt="chemistry" width="345px" height="120px" />
        </div>

        <div className="img-8">
          <img src={chemistry} alt="chemistry" width="345px" height="120px" />
        </div>

        <div className="img-9">
          <img src={chemistry} alt="chemistry" width="345px" height="120px" />
        </div>
      </div>

      <div id="heading-4">
        <h1>History</h1>
      </div>

      <div className="category-4">
        <div className="img-10">
          <img src={history} alt="history" width="345px" height="120px" />
        </div>

        <div className="img-11">
          <img src={history} alt="history" width="345px" height="120px" />
        </div>

        <div className="img-12">
          <img src={history} alt="history" width="345px" height="120px" />
        </div>
      </div>
      <div id="heading-5">
        <h2>Ice Breakers and Bell Ringers</h2>
      </div>
    </>
  );
}

export default Category;
