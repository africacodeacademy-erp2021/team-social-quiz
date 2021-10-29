import React from "react";
import Pop from "../Images/Pop.png";
import astronomy from "../Images/astronomy.png";
import chemistry from "../Images/chemistry.png";
import history from "../Images/history.png";
import "./Category.css";
import { Link } from "react-router-dom";

function Category() {
  return (
    <>
      
      <span className="Title">quiz</span>
      <span className="Title-2">app</span>
      <span id="Most-Popular">Popular Now</span>
      <div className="img">
        <Link to="/popculture">
          <img src={Pop} alt="Pop" width="100%;" height="300px" />
        </Link>
        
        <span className="bottom-left-1">Pop Culture</span>
        <span className="Astronomy">ASTRONOMY</span>
        <span className="Origins-T">Origins</span>
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
        <Link to="/astronomy">
          <img src={astronomy} alt="Astronomy" width="345px" height="120px" />
        </Link>
        </div>

        <div className="img-2">
        <Link to="/chemistry">
          <img src={chemistry} alt="chemistry" width="345px" height="120px" />
        </Link>
        </div>
        <div className="img-3">
        <Link to="/historycategory">
          <img src={history} alt="history" width="345px" height="120px" />
        </Link>
        </div>
      </div>
      <div id="heading-2">
        <h1>Astronomy</h1>
      </div>

      <div className="category-2">
        <div className="img-4">
        <Link to="/origins">
          <img src={astronomy} alt="Astronomy" width="345px" height="120px" />
        </Link>
        </div>

        <div className="img-5">
        <Link to="/bigbang">
          <img src={astronomy} alt="Astronomy" width="345px" height="120px" />
        </Link>
        </div>
     
        <div className="img-6">
        <Link to="/planets">
            <img src={astronomy} alt="Astronomy" width="345px" height="120px" />
        </Link>
        </div>
      </div>
      <div id="heading-3">
        <h1>Chemistry</h1>
      </div>

      <div className="category-3">
        <div className="img-7">
        <Link to="/molesandbonds">
          <img src={chemistry} alt="chemistry" width="345px" height="120px"/>
        </Link>
        </div>

        <div className="img-8">
        <Link to="/polymers">
          <img src={chemistry} alt="chemistry" width="345px" height="120px"/>
        </Link>
        </div>

        <div className="img-9">
        <Link to="/labtechniques">
          <img src={chemistry} alt="chemistry" width="345px" height="120px"/>
        </Link>
        </div>
      </div>

      <div id="heading-4">
        <h1>History</h1>
      </div>

      <div className="category-4">
        <div className="img-10">
        <Link to="/mummiesone">
          <img src={history} alt="history" width="345px" height="120px"/>
        </Link>
        </div>

        <div className="img-11">
        <Link to="/mummiestwo">
          <img src={history} alt="history" width="345px" height="120px"/>
        </Link>
        </div>

        <div className="img-12">
        <Link to="/mummiesthree">
          <img src={history} alt="history" width="345px" height="120px"/>
        </Link>
        </div>
      </div>
      <div id="heading-5">
        <h2>Ice Breakers and Bell Ringers</h2>
      </div>
    </>
  );
}

export default Category;
