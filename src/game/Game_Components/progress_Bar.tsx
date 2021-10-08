import { GameContext } from '../Game_Play/game_Context';
import React, {useContext} from 'react';

function Progress_Bar(){
 const {currentQuestion} = useContext(GameContext);
 const {selected_number} = useContext(GameContext);

    return(
        <div className="bar_Container">
           <progress id="file" value={currentQuestion + 1} max={selected_number} >
              {currentQuestion} / {selected_number}          
           </progress>
        </div> 
    )
}
export default Progress_Bar;