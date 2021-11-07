import GameStart from './game/Game_Play/game_start';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <Switch>
                            
            <Route  path='/' exact>            
                <GameStart/>      
            </Route>            
   

        </Switch>
     
    </div>
  );
}

export default App;
