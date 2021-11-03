import React from 'react'
import { useState } from "react"
import { FacebookIcon, FacebookShareButton, TelegramIcon, TelegramShareButton, WhatsappIcon, WhatsappShareButton } from 'react-share';
import "./Category.css";

function Share() {

 const url= "http://172.25.32.212:3000"
    const [modalState, setModalState] = useState(false)

  const toggleModalState = () => {
    setModalState(!modalState)
  }
    return (
        <>
           <div className={`modalBackground modalShowing-${modalState}`}>
        <div className="modalInner">
          
          <div className="modalText">
             <FacebookShareButton url= {url}
             quote="Let us play">
             <FacebookIcon size = "40" round= {true}/>
             </FacebookShareButton>

            <WhatsappShareButton url={url}> 
            <WhatsappIcon size = "40" round= {true}/>
            </WhatsappShareButton>
          
            <TelegramShareButton url={url}>
            <TelegramIcon size= "40" round={true}/>
            </TelegramShareButton>

            </div>
            <button className="exitButton" onClick={() => toggleModalState()}>
              exit
            </button>
            
          </div>
         
        </div>
        
      <button className="Share-btn" onClick={() => toggleModalState()}>Share</button>


    </>
    )
}

export default Share;