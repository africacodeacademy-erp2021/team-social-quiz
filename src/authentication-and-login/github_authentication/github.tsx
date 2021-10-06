import LoginGithub from "react-login-github";
import Githublogo from "../../game/images/images.png";
import * as dotenv from "dotenv";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import Landing from "../../dashboard/Landing";

export default function Github(props: any) {
  function Content() {
    dotenv.config();
    let history = useHistory();

    const onSuccess = (response: any) => {
      console.log(response);
      localStorage.setItem("name", response.code);
      history.replace("./Landing");
    };

    const onFailure = (response: any) => {
      console.error(response);
    };
    const gitClientId = JSON.stringify(process.env.REACT_APP_GITHUB_AUTH_TOKEN);
    const client = gitClientId.replace('"', "");
    const Githubclient = client.replace('"', "");
    return (
      <div>
        <button className="btn_github">
          <img
            className="mylogo"
            src={Githublogo}
            width="22px"
            height="22px"
            alt="logo"
          />
          <LoginGithub
            className="btn_githubinfo"
            buttonText={props.buttonName}
            clientId={Githubclient}
            autoLoad={false}
            onSuccess={onSuccess}
            onFailure={onFailure}
          />
        </button>
      </div>
    );
  }
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/Landing" exact component={Landing} />

          <Route path="/" component={Content} />
        </Switch>
      </Router>
    </div>
  );
}
