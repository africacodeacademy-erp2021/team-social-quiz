import '../Game_Play/playgame.css';
import { Link } from 'react-router-dom';
import React, {useContext} from 'react';
import { GameContext } from '../Game_Play/game_Context';


function Last_Meme(){
    let {score} = useContext(GameContext);
    localStorage.setItem("PlayerScore",score);
    const {playerName} =  useContext(GameContext);
    

    let showImg = "https://memegenerator.net/img/instances/69363487/youre-on-fire-keep-up-the-good-work.jpg";
   
        
    return(
        <div className='displayMeme_section'> 
            <div className="PlayerAndGameName_section">              
                <div className="gameName">
                    <span className="Title">quiz</span><span className="Title-2">app</span>                 
                </div>
                <div className="playerName"><img className="points_icon" width="50px" height="50px" 
                alt="score" src="https://image.flaticon.com/icons/png/512/149/149071.png"/>
                {playerName}</div>
            </div>
                <img className="meme" src={showImg} alt="meme"/> 
                <br/>                
                <br/>                 
                <button  className="onNext"><Link className="link" to='/Score'>Next</Link></button>    
            <br/>
        </div>
    )
}
export default Last_Meme;