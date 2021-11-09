import { useState } from 'react';
import Modal from './Modal';
import './popUp.css';
import '../../pages/Category.css';
import '../../pages/CategoryMedia.css';
import Backdrop from './Backdrop';
import playIcon from './img_background/Play.png';


function PlayButton(){
const [modalIsOpen, setModalIsOpen] =  useState(false);

function deleteHandler(){  

setModalIsOpen(true);
}

function closeModalHandler(){

    setModalIsOpen(false);
}

return (
      <div className="card">   
       
        <button id="HipHopPlay" onClick={deleteHandler}>
         <img className="playIcon" src={playIcon} alt="play"/>
         PLAY
        </button>   

        {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />}
        {modalIsOpen && <Backdrop onCancel={closeModalHandler}/>}      
    
      </div>
   );   

}
export default PlayButton;