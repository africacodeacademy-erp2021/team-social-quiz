import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';
import "../pages/Category.css";



function Todo(props: any){
    const [modalIsOpen, setModalIsOpen] =  useState(false);

function deleteHandler(){  

setModalIsOpen(true);
}

function closeModalHandler(){

    setModalIsOpen(false);
}

return (
      <div>
      
       <h2>{props.text}</h2>

       <span className="Play-btn"><button  onClick={deleteHandler}>Play</button></span>
        

        {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />}
        {modalIsOpen && <Backdrop onCancel={closeModalHandler}/>}
      
      </div>
   )   

}

export default Todo;