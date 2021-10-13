import { Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./authentication-and-login/login/login";

import Registration from "./authentication-and-login/registration/registration";
import Category from "./dashboard/Category";


function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/Category">
          <Category />
        </Route>
        <Route path="/registration">
          <Registration />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
         
      


    </div>
  );
}

export default App;
