import GoogleLogin from "react-google-login";
import * as dotenv from "dotenv";
import "../../App";
import { useHistory } from "react-router-dom";

export default function Google(props: any) {
  dotenv.config();
  let history = useHistory();

  const loginsuccess = (response: any) => {
   localStorage.setItem("name", response.it.Se);
    history.replace(props.path);
  };

  const loginfailure =(error:any) =>{};

  const clientId = JSON.stringify(process.env.REACT_APP_GOOGLE_CLIENT_ID);
  const name = clientId.replace('"', "");
  const Clientid = name.replace('"', "");

  return (
    <div>
      <div className="btn_google">
        <GoogleLogin
          className="btn_googleinfo"
          clientId={Clientid}
          buttonText={props.buttonName}
          onSuccess={loginsuccess}
          onFailure={loginfailure}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    </div>
  );
}
