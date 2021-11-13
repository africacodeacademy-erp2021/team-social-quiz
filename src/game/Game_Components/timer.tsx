import React, {useContext,  useEffect} from 'react';
import { GameContext } from '../Game_Play/game_Context';

function Timer(props:any){
 const {startTime} = useContext(GameContext);
 let {seconds, setSeconds} = useContext(GameContext);
 let {minutes, setMinutes } = useContext(GameContext);

 useEffect(()=>{
        if(startTime === true){
            let Timer = setInterval(() => {
            if (seconds > 0){
                     setSeconds(seconds - 1);
            }
        if (seconds === 0) {
            if (minutes === 0) {                        
                clearInterval(Timer)                        
            } else {
                setMinutes(minutes - 1);
                setSeconds(59);
            }
        } 
        }, 1000)
        return ()=> {
         clearInterval(Timer);                     
        };
        }
     });

    return(
        <div>
            {seconds}
        </div>
    )
}
export default Timer;