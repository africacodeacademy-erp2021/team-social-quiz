import LoginGithub from "react-login-github";
import Githublogo from "../../game/images/images.png";
import * as dotenv from "dotenv";

import "../../App";
import { useHistory } from "react-router-dom";

export default function Github(props: any) {
  dotenv.config();
  let history = useHistory();

  const onSuccess = (response: any) => {
    localStorage.setItem("name", response.code);
    history.replace("./Category");
  };

  const onFailure = (response: any) => {
    console.error(response);
  };

  const gitClientId = JSON.stringify(process.env.REACT_APP_GITHUB_AUTH_TOKEN);
  const client = gitClientId.replace('"', "");
  const Githubclient = client.replace('"', "");

  let scopeAccess = "read:user%20user:email";

  return (
    <div>
      <div className="btn_github">
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
          scope={scopeAccess}
        />
      </div>
    </div>
  );
}
