import facebooklogo from "../../game/images//lite.png";
import FacebookLogin from "react-facebook-login";
import * as dotenv from "dotenv";
import { useHistory } from "react-router-dom";
import "../../App";

export default function Facebook(props: any) {
  dotenv.config();
  let history = useHistory();

  const responseFacebook = (response: any) => {
    localStorage.setItem("name", response.name);
    history.replace("/Category");
  };

  const facebookid = JSON.stringify(process.env.REACT_APP_ID);
  const facebookreplace = facebookid.replace('"', "");
  const AppID = facebookreplace.replace('"', "");
  return (
    <div>
      <div className="btn_facebook">
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
      </div>
    </div>
  );
}
