import React, { useState } from "react";
import FacebookLogin from 'react-facebook-login';


function Login() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    const responseFacebook = (response: any) => {
        console.log(response);
        setIsLoggedIn(true);
    }
    return (
        <div className="App">
            {!isLoggedIn ?
                <FacebookLogin
                    appId="390822489345318"
                    autoLoad={true}
                    fields="name,email,picture"
                    callback={responseFacebook} /> : 'Home'}
        </div>
    );
}

export default Login;

