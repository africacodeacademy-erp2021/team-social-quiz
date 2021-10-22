import { GameContext } from '../Game_Play/game_Context';
import React, {useContext} from 'react';

function ProgressBar(){
 const {currentQuestion} = useContext(GameContext);
 const {selected_number} = useContext(GameContext);

    return(
        <div className="bar_Container">
           <progress id="file" value={currentQuestion + 1} max={selected_number}>
                 <span> {currentQuestion} / {selected_number} </span>         
           </progress>
        </div> 
    )
}
export default ProgressBar;