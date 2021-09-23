import React, { useState } from "react";
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';


function Login() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    const responseFacebook = (response: any) => {
      console.log(response);
      setIsLoggedIn(true);
    }
  
  const responseGoogle = (response: any )=>{
    console.log(response);
    console.log(response.profileObj);
    setIsLoggedIn(true);
  }
  
    return (
      <div className="App">
        {!isLoggedIn ?
          <FacebookLogin
            appId="390822489345318"
            autoLoad={true}
            fields="name,email,picture"
            //onClick={componentClicked}
            callback={responseFacebook} /> : 'Home'}
        <br/>
        {!isLoggedIn ? <GoogleLogin
          clientId="791329261171-nvioqksgkqu74v86vnoh6qv7ocha9qbf.apps.googleusercontent.com"
          buttonText="LOGIN WITH GOOGLE"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />: 'Home'}
      </div>
    );
  }

export default Login;

