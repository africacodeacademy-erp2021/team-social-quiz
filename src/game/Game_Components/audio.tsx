import './audio.css';
import {useEffect, useState } from 'react';

function Myaudio(){
const [buttonMuteStatus, SetbuttonMuteStatus] = useState(true);
let   [count, SetCount] = useState(1);
   
 useEffect (()=>{  
  var  mutebtn:any;      
    if(count === 1){
      const musicPlayer:any=()=>{
        let audio = new Audio();
        audio.src = "https://cdn.pixabay.com/download/audio/2020/10/26/audio_b63a8987c5.mp3?filename=upright-piano-arcade-instrumental-mix-1342.mp3";
        audio.loop = true;
        audio.play();
                     
       //reference objects
       mutebtn = document.getElementById("muteAndUnmute");
       //Handle event
        mutebtn.addEventListener("click", mute);
   
       //audio functions
       function mute(){
         if(audio.muted){
             audio.muted = false;            
             SetbuttonMuteStatus(true);
           } else {
             audio.muted = true; 
             SetbuttonMuteStatus(false);
           }
       }
   }
       musicPlayer();       
       SetCount(2);  
   
    }
},[count]);
    
   return(
        <div className="btn_section"> 
 
        {buttonMuteStatus ?(
            <button className="btnmute" id="muteAndUnmute" aria-pressed="true">
              <img className="audioIcon" src="https://cdn2.iconfinder.com/data/icons/ui-minimalist-0-1-1/16/UI_Web_Sound_Tone_Music_Volume-512.png" alt="muteIcon"/>
            </button>
        ):(
            <button className="btnmute" id="muteAndUnmute" aria-pressed="false">
              <img className="audioIcon" src="https://cdn2.iconfinder.com/data/icons/picons-essentials/57/music_off-512.png" alt="unmuteIcon"/>
            </button>
          )
        }   
   </div>
 )
}
export default Myaudio;