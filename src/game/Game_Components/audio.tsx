import './audio.css';
import {useState } from 'react';

function My_audio(){
const [buttonPlayStatus, SetButtonPlayStaton] = useState(true);
const [buttonMuteStatus, SetbuttonMuteStatus] = useState(true);

var playbtn:any, mutebtn:any;

    function musicPlayer(){
         let audio = new Audio();
         audio.src = "https://live.mzansimp3.org/uploads/mp3/Zinkz-Dee-ft-Malome-Vector-Haona-Taba-mzansimp3.org-.mp3";
         audio.loop = true;
         audio.play();
    
        //reference objects
        playbtn = document.getElementById("play_And_pause");
        mutebtn = document.getElementById("muteAndUnmute");
    
        //Handle event
        playbtn.addEventListener("click",playPause);
        mutebtn.addEventListener("click", mute);
    
        //audio functions
    function playPause(){
          if(audio.paused){
              audio.play();
            SetButtonPlayStaton(false);
            } else {
              audio.pause();
            SetButtonPlayStaton(true);
            }
        }
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

    window.addEventListener("load", musicPlayer);
    
   return(
        <div className="btn_section"> 
        {buttonPlayStatus ?(
            <button className="btnplay" id="play_And_pause"> 
              <img className="audioIcon" src="https://cdn.icon-icons.com/icons2/1132/PNG/512/1486348532-music-play-pause-control-go-arrow_80458.png" alt="icon"/>
            </button>
          ):(
            <button className="btnplay" id="play_And_pause">
              <img className="audioIcon" src="https://cdn1.iconfinder.com/data/icons/glyphie-1/40/stop_play_music_video_audio_parallel_button-512.png" alt="icon"/>
            </button>
          )
        }
        {buttonMuteStatus ?(
            <button className="btnmute" id="muteAndUnmute">
              <img className="audioIcon" src="https://cdn2.iconfinder.com/data/icons/ui-minimalist-0-1-1/16/UI_Web_Sound_Tone_Music_Volume-512.png" alt="icon"/>
            </button>
        ):(
            <button className="btnmute" id="muteAndUnmute">
              <img className="audioIcon" src="https://cdn2.iconfinder.com/data/icons/picons-essentials/57/music_off-512.png" alt="icon"/>
            </button>
          )
        }   
   </div>
 )
}
export default My_audio;