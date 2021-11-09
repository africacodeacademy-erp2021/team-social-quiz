import './popUp.css';
import React from 'react';
import { useHistory } from 'react-router';
import SingleUser from './img_background/single.png';
import userTeam from './img_background/teams.png';
import MultiUsers from './img_background/multi.png';

function Modal(props:any){
let history = useHistory();  

function cancelHandler(){

    props.onCancel();
}
function singlePlayer(){
    history.push("/gamestart");
}
function teamPlayer(){
    history.push("/gamestart");
}
function multiplePlayer(){
    history.push("/gamestart");
}
return (

    <div className='model'>
           <button className="close-popUp" onClick={cancelHandler}>x</button>
           <br/>
           <p className="title">Select Game Mode</p>

           <button className="btn-modesone" onClick={singlePlayer}>
                Single Player 
               <img className="button-img" src={SingleUser} alt="green" />
           </button>
           <br/>
           <br/>
           <button className="btn-modestwo" onClick={multiplePlayer}>
               Multiplayer 
               <img className="button-imggg" src={MultiUsers} alt="green" />
           </button>
           <br/>
           <br/>
           <button className="btn-modesthree" onClick={teamPlayer}>
               Team MultiPlayer
               <img className="button-imgg" src={userTeam} alt="green" />
           </button>
    </div>

);

}

export default Modal;