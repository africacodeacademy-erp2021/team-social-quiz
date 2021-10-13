import "../../App.css";
import Display_img from "../../game/images/Rubix Cube Image.jpg";
import * as dotenv from "dotenv";
import Google from "../google_authentication/google";
import Facebook from "../facebook_authentication/facebook";
import Github from "../github_authentication/github";
import { Link } from "react-router-dom";

function Login() {
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
          <br />
          <br />
          <div>
            <h2 className="h2_title">Sign In</h2>
            <h3 className="h3_title">See your growth and get more quizes</h3>
          </div>
          <br />
          <br />
          <br />
          <div className="buttons_container">
            <Google buttonName="SignIn with Google" />
            <br />
            <Facebook buttonName="SignIn with Facebook" />
            <br />
            <Github buttonName="SignIn with Github" />
          </div>
        

        <br />
        <div className="nav_newAccount">
          <p className="p_title">Not registered yet ? </p>{" "}
          <p className="p_title">
            <Link className="link_text" to="/registration">
              Create an Account
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

export default Login;
