import { GoogleLogout } from "react-google-login";

import "../../App";
import * as dotenv from "dotenv";
import { useHistory } from "react-router-dom";

export default function Logout() {
  dotenv.config();
  let history = useHistory();

  const signOutSuccess = () => {
    alert("you have been logged out successfully");
    history.replace("./login");
  };

  const clientId = JSON.stringify(process.env.REACT_APP_GOOGLE_CLIENT_ID);
  const name = clientId.replace('"', "");
  const Clientid = name.replace('"', "");
  return (
    <div>
      <div className="btn_google">
        {" "}
        <GoogleLogout
          className="btn_google"
          clientId={Clientid}
          buttonText="Logout"
          onLogoutSuccess={signOutSuccess}
        ></GoogleLogout>
      </div>
    </div>
  );
}
