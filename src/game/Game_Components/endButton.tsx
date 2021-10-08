import { useContext} from 'react';
import { Link } from 'react-router-dom';
import { GameContext } from '../Game_Play/game_Context';
import '../Game_Play/playgame.css';


function EndButton(){
    let {score} = useContext(GameContext);
    localStorage.setItem("PlayerScore",score);

     return(
        
           <button className="onend"><Link className="link" to='/Score'>End</Link></button> 
        
    )
}
export default EndButton;