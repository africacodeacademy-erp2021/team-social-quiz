import { useContext} from "react";
import { GameContext } from "../Game_Play/game_Context";

function GameScoreFunction () {
 let {score,SetScore} = useContext(GameContext);

 /**
 * add myscore  by 50
 *  @param {number} score
 */
 const addScoreOnNext=() =>{   
       SetScore(score += 50); 
      };
   return {addScoreOnNext,score}
    
}
export default GameScoreFunction;