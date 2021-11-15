import '../../../Dashboard/components/PlayButton/popUp.css';
import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import  {GameContext}  from '../../Game_Play/game_Context';


function Modal(props:any){
let history = useHistory();  
let {score} = useContext(GameContext);
localStorage.setItem("PlayerScore",score);

//close modal
function cancelHandler(){
    props.onCancel();
}
//Save score and go to score component
function singlePlayer(){


    history.push("/Score");
}

return (

    <div className='model-two'>
           <button className="close-popUp-two" onClick={cancelHandler}>x</button>
           
           <p className="title-two">Are you sure you want to quit the quiz ?</p>
           
           <p className="title-three">Your current Score is : {score}</p>
          
           <button className="onYes" onClick={singlePlayer}>
               YES
           </button>   
                 
    </div>
);

}

export default Modal;