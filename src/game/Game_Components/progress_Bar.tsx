import './progressBar.css'
import { GameContext } from '../Game_Play/game_Context';
import React, {useContext} from 'react';
//import { Progress } from 'react';

function Progress_Bar(){
 const {currentQuestion} = useContext(GameContext);
 const {selected_number} = useContext(GameContext);

    return(
        <div className="bar_Container">
        {currentQuestion + 1} / {selected_number}
        </div>
    )
}
export default Progress_Bar;