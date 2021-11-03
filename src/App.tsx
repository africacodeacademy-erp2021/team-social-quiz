import "./App.css";
import Navbar from "./Dashboard/components/Navbar";
import { Route } from "react-router";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Category from "./Dashboard/pages/Category";
import CreateGame from "./Dashboard/pages/CreateGame";
import History from "./Dashboard/pages/History";
import Leaderboard from "./Dashboard/pages/Leaderboard";
import Help from "./Dashboard/pages/Help";
import PopCulture from "./Dashboard/pages/PopCulture";
import Astronomy from "./Dashboard/pages/Astronomy";
import Chemistry from "./Dashboard/pages/Chemistry";
import HistoryCategory from "./Dashboard/pages/HistoryCategory";
import Origins from "./Dashboard/pages/Origins";
import BigBang from "./Dashboard/pages/BigBang";
import Planets from "./Dashboard/pages/Planets";
import MolesAndBonds from "./Dashboard/pages/MolesAndBonds";
import Polymers from "./Dashboard/pages/Polymers";
import LabTechniques from "./Dashboard/pages/LabTechniques";
import MummiesOne from "./Dashboard/pages/MummiesOne";
import MummiesTwo from "./Dashboard/pages/MummiesTwo";
import MummiesThree from "./Dashboard/pages/MummiesThree";
import HipHop from "./Dashboard/pages/HipHop";
import GameStart from "./Dashboard/pages/GameStart";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Category}/>
          <Route path="/CreateGame" component={CreateGame}/>
          <Route path="/History" component={History} />
          <Route path="/Leaderboard" component={Leaderboard}/>
          <Route path="/Help" component={Help}/>
          <Route path="/popculture" component={PopCulture}/>
          <Route path="/astronomy" component={Astronomy}/>
          <Route path="/chemistry" component={Chemistry}/>
          <Route path="/historycategory" component={HistoryCategory}/>
          <Route path="/origins" component={Origins}/>
          <Route path="/bigbang" component={BigBang}/>
          <Route path="/planets" component={Planets}/>
          <Route path="/molesandbonds" component={MolesAndBonds}/>
          <Route path="/polymers" component={Polymers}/>
          <Route path="/labtechniques" component={LabTechniques}/>
          <Route path="/mummiesone" component={MummiesOne}/>
          <Route path="/mummiestwo" component={MummiesTwo}/>
          <Route path="/mummiesthree" component={MummiesThree}/>
          <Route path="/hiphop" component={HipHop}/>
          <Route path="/gamestart" component={GameStart}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
