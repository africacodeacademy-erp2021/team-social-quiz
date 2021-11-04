import ScoreBoard  from './game-completion/score/score';
import { Route, Switch } from 'react-router-dom';
import Leaderboard from './game-completion/leaderboard/leaderboard';

function App() {
  return (
    <div className="App">
      <Switch> 
          <Route  path='/' exact>
              <ScoreBoard/>
          </Route>
          <Route path='/leaderboard'>
              <Leaderboard/>
          </Route>
          <Route path='/score'>
              <ScoreBoard/>
          </Route>
      </Switch>
      
      
     
    </div>
  );
}

export default App;
