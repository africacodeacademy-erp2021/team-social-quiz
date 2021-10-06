import facebooklogo from "../../game/images//lite.png";
import FacebookLogin from "react-facebook-login";
import * as dotenv from "dotenv";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import Landing from "../../dashboard/Landing";

export default function Facebook(props: any) {
  function Content(location: any) {
    dotenv.config();
    let history = useHistory();

    const responseFacebook = (response: any) => {
      localStorage.setItem("name", response.name);
      history.replace("/Landing");
    };

    const facebookid = JSON.stringify(process.env.REACT_APP_ID);
    const facebookreplace = facebookid.replace('"', "");
    const AppID = facebookreplace.replace('"', "");
    return (
      <div>
        <button className="btn_facebook">
          <img
            className="myfacebooklogo"
            src={facebooklogo}
            width="22px"
            height="22px"
            alt="logo"
          />

          <FacebookLogin
            appId={AppID}
            textButton={props.buttonName}
            autoLoad={false}
            fields="name,email,picture"
            callback={responseFacebook}
            cssClass="my-facebook-button-class"
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
