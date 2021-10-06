import GoogleLogin from "react-google-login";
import * as dotenv from "dotenv";
import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";
import Landing from "../../dashboard/Landing";


export default function Google(props:any){
   
  function Content(){
    dotenv.config();
    let history = useHistory();

    

const loginsuccess = (response: any) => {
    localStorage.setItem("name", response.dt.uU);
     history.replace("./Landing");
  };

  const clientId = JSON.stringify(process.env.REACT_APP_GOOGLE_CLIENT_ID);
  const name = clientId.replace('"', "");
  const Clientid = name.replace('"', "");

  return(
      <div>
          <button className="btn_google" >
             <GoogleLogin
             
                  className="btn_googleinfo"
                  clientId={Clientid}
                  buttonText={props.buttonName}
                  onSuccess={loginsuccess}
                  onFailure={loginsuccess}
                  cookiePolicy={"single_host_origin"}
                />
                </button>
              </div>
      
  )
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