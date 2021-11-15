import '../components/PlayButton/popUp.css';
import React from 'react';
import { FacebookIcon, FacebookShareButton, TelegramIcon, TelegramShareButton, WhatsappIcon, WhatsappShareButton } from 'react-share';


function ShareModal(props:any){
const url= "http://172.25.32.212:3000";

function cancelHandler(){

    props.onCancel();
}

return (

    <div className='model'>
         <button className="close-popUp" onClick={cancelHandler}>x</button>  

         <p className="Social-title">Share On Social Media PlatForms</p>
        
            <FacebookShareButton url= {url} className="fb"
            quote="Let us play">
            <FacebookIcon size = "40" round= {true} />
            </FacebookShareButton>
 
            <WhatsappShareButton url={url} className="twitter"> 
            <WhatsappIcon size = "40" round= {true}/>
            </WhatsappShareButton>
           
            <TelegramShareButton url={url} className="telegram">
            <TelegramIcon size= "40" round={true}/>
            </TelegramShareButton>
          
        <br/>
        <br/>
        <br/>
        <br/>
     
    </div>

);

}

export default ShareModal;