import "../../App.css";
import Display_img from "../../game/images/Rubix Cube Image.jpg";

import * as dotenv from "dotenv";
import { BrowserRouter as Router, Route, Switch, Link,  } from "react-router-dom";
import Registration from "../registration/registration";

import Google from "../google_authentication/google";
import Facebook from "../facebook_authentication/facebook";
import Github from "../github_authentication/github";

function Login() {
  function Content() {
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
              <h2 className="h2_title">Sign In</h2>
              <h3 className="h3_title">See your growth and get more quizes</h3>
            </div>
            <br />
            <br />
            <br />
            <div className="buttons_container">
              <Google/>
              <br />
              <Facebook />
              <br />
              <Github />
            </div>
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

        <img
          className="my_display"
          src={Display_img}
          width="820px"
          height="800px"
          alt="logo"
        />
      </div>
    );
  }


return (
  <div>
    <Router>
      <Switch>
        <Route path="/registration" exact component={Registration} />
        

        <Route path="/" component={Content} />
      </Switch>
    </Router>
  </div>
);
}
export default Login;
