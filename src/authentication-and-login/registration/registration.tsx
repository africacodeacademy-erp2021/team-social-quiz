import "../../App.css";
import Display_img from "../../game/images/Rubix Cube Image.jpg"

import * as dotenv from "dotenv";


import Google from "../google_authentication/google";
import Facebook from "../facebook_authentication/facebook";
import Github from "../github_authentication/github";
import { Link } from "react-router-dom";

function Registration() {
 
    dotenv.config();

    return (
      <div className="all_sections">
        <div className="display_infor">
          <div className="login">
            <header>
              {" "}
              <h1 className="h1_title">
                {" "}
                <span className="designcolor">quiz</span>app
              </h1>{" "}
            </header>

            <div>
              <h2 className="h2_title">Sign Up</h2>
              <h3 className="h3_title">Get more quizzes and collaborate</h3>
            </div>
            <br />
            <br />
            <br />
            <div className="buttons_container">
            <Google buttonName="SignUp with Google" />
              <br />
              <Facebook buttonName="SignUp with Facebook"/>
              <br />
              <Github buttonName="SignUp with Github"/>
            </div>

            <br />
            <div className="nav_newAccount">
              <p className="p_title">Have an account </p>{" "}
              <p className="p_title">
                <Link className="link_text" to="/login">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
        <img
          className="my_display"
          src={Display_img}
          width="850px"
          height="800px"
          alt="logo"
        />
      </div>
    );
  }
 


export default Registration;
