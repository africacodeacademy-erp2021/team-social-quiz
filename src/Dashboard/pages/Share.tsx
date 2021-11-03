import React from 'react';
import { useState } from 'react';
import ShareModal from './ShareModal';
import Backdrop from '../components/PlayButton/Backdrop';
import '../components/PlayButton/popUp.css';

function Share() {
  const [modalIsOpen, setModalIsOpen] =  useState(false);

  function deleteHandler(){  
  
  setModalIsOpen(true);
  }
  
  function closeModalHandler(){
  
      setModalIsOpen(false);
  }

    return (
    <div>  
      
      <button className="share-btn" onClick={deleteHandler}>
             Share
      </button>      
        {modalIsOpen && <ShareModal onCancel={closeModalHandler} onConfirm={closeModalHandler} />}
        {modalIsOpen && <Backdrop onCancel={closeModalHandler}/>}  

    </div>
    )
}

export default Share;