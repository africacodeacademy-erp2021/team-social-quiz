import { GameContext } from '../Game_Play/game_Context';
import React, {useContext} from 'react';

function ProgressBar(){
 const {currentQuestion} = useContext(GameContext);
const numberQuestion = 10;

    return(
        <div className="bar_Container">
           <progress id="file" value={currentQuestion + 1} max={numberQuestion}>
                 <span> {currentQuestion} / {numberQuestion} </span>         
           </progress>
        </div> 
    )
}
export default ProgressBar;