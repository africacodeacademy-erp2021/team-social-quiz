import React from 'react';
import { useState } from 'react';
import Modal from '../components/PlayButton/Modal';
import Backdrop from '../components/PlayButton/Backdrop';
import '../components/PlayButton/popUp.css';



function Playandshare() {
  const [modalIsOpen, setModalIsOpen] =  useState(false);
  
  function deleteHandler(){  
  
    setModalIsOpen(true);
    }
    
    function closeModalHandler(){
    
        setModalIsOpen(false);
    }
  
      return (
      <div>  
        
        <button className="blue-btn"  onClick={deleteHandler}>
             Play
        </button>      
        {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />}
        {modalIsOpen && <Backdrop onCancel={closeModalHandler}/>}  
  
      </div>
      )
}
export default Playandshare;