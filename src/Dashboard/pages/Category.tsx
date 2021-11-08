import React from "react";
import Pop from "../Images/Pop.png";
import astronomy from "../Images/astronomy.png";
import chemistry from "../Images/chemistry.png";
import history from "../Images/history.png";
import "./Category.css";
import { Link } from "react-router-dom";
import "../components/Navbar.css";

function Category() {
  return (
    <>
      
      <span className="Title">quiz</span>
      <span className="Title-2">app</span>
      <span id="Most-Popular">Popular Now</span>
      <div className="img">
        <Link to="/popculture">
          <img className="PopMobile" src={Pop} alt="Pop" />
         <div className="bottom-left-1">Pop Culture</div>
        </Link>
        
        
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
          <img className="AstronomyMobile" src={astronomy} alt="Astronomy" width="345px" height="120px" />
          <div className="Astronomy">Astronomy</div>
        </Link>
        </div>

        <div className="img-2">
        <Link to="/chemistry">
          
          <img className="ChemistryMobile" src={chemistry} alt="chemistry" width="345px" height="120px" />
          <div className ="Chemistry-T">Chemistry</div>
        </Link>
        </div>
        <div className="img-3">
        <Link to="/historycategory">
          
          <img className="HistoryMobile" src={history} alt="history" width="345px" height="120px" />
          <div className ="History-T">History</div>
        </Link>
        </div>
      </div>
      <div id="heading-2">
        <h1>Astronomy</h1>
      </div>

      <div className="category-2">
        <div className="img-4">
        <Link to="/origins">
          
          <img className="AstronomyMobile" src={astronomy} alt="Astronomy" width="345px" height="120px" />
          <div className="Origins-T">Origins</div>
        </Link>
        </div>

        <div className="img-5">
        <Link to="/bigbang">
          
          <img className="AstronomyMobile" src={astronomy} alt="Astronomy" width="345px" height="120px" />
          <div className="Big-Bang" >Big Bang</div>
        </Link>
        </div>
     
        <div className="img-6">
        <Link to="/planets">
            
            <img className="AstronomyMobile" src={astronomy} alt="Astronomy" width="345px" height="120px" />
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
          
          <img className="ChemistryMobile" src={chemistry} alt="chemistry" width="345px" height="120px"/>
          <div className="Moles">Moles and Bonds</div>
        </Link>
        </div>

        <div className="img-8">
        <Link to="/polymers">
          <img className="ChemistryMobile" src={chemistry} alt="chemistry" width="345px" height="120px"/>
          <div className="Polymers" >Polymers</div>
        </Link>
        </div>

        <div className="img-9">
        <Link to="/labtechniques">

          <img className="ChemistryMobile" src={chemistry} alt="chemistry" width="345px" height="120px"/>
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
          
          <img className="HistoryMobile" src={history} alt="history" width="345px" height="120px"/>
          <div className="Mummies">Mummies</div>
        </Link>
        </div>

        <div className="img-11">
        <Link to="/mummiestwo">
          
          <img className="HistoryMobile" src={history} alt="history" width="345px" height="120px"/>
          <div className="Mummies-1">Mummies</div>
        </Link>
        </div>

        <div className="img-12">
        <Link to="/mummiesthree">
          
          <img className="HistoryMobile" src={history} alt="history" width="345px" height="120px"/>
          <div className="Mummies-2">Mummies</div>
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