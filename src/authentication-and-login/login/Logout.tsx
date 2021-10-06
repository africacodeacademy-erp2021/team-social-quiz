import { GoogleLogout } from "react-google-login";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import Login from "./login";
import * as dotenv from "dotenv";

export default function Logout() {
  function Content() {
    dotenv.config();
    let history = useHistory();

    const signOutSuccess = () => {
      alert("you have been logged out successfully");
      history.push("/login");
    };

    const clientId = JSON.stringify(process.env.REACT_APP_GOOGLE_CLIENT_ID);
    const name = clientId.replace('"', "");
    const Clientid = name.replace('"', "");
    return (
      <div>
        <button className="btn_google">
          {" "}
          <GoogleLogout
            className="btn_google"
            clientId={Clientid}
            buttonText="Logout"
            onLogoutSuccess={signOutSuccess}
          ></GoogleLogout>
        </button>
      </div>
    );
  }

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/login" exact component={Login} />

          <Route path="/" component={Content} />
        </Switch>
      </Router>
    </div>
  );
}
