import React, { useEffect, useState } from 'react'
import './CategoryMedia.css';
import PopC from "../Images/ChemistryC2.jpg";
import Num from "../Images/Num.png";
import Quizes from "../Images/Quizes.png";
import Star from "../Images/Star.png";
import Medal from "../Images/Medal.png";
import Points from "../Images/Points.png";
import Hand from "../Images/Hand.png";
import Flag from "../Images/Flag.png";
import Record from "../Images/Record.png";
import PlayButton from '../components/PlayButton/PlayButton';
import Navbar from '../components/Navbar';

function MolesAndBonds() {
  const [data, setData] =useState <any[]>([])
 

  //Get Method
  useEffect(()=>{ 
    fetch("http://localhost:4000/api/v1/category?categoryId=619172450d822d00b4e956c2")
      .then((response) => response.json())
      .then((json) => {
        console.log(json[0].description);
        setData(json[0].description);
      })
    },[]) 

    return (
      <div className="screen">
      <div className="hamburger">
        <Navbar />
       
        </div>
        <div className="sidebar">
        <div className="Select">
          <img src={PopC} alt="Pop" />
        </div>

        <div className="Numplays">
          <span><img id="Num" src={Num} alt="Num"  />
             <span id="PlaysText"> 100 Plays</span>
           </span>
          <span><img id="Quizes" src={Quizes} alt="Quizes"  /> 
          <span id="QuizesText">Quizes 15</span>
          </span>
          <span><img id="Star" src={Star} alt="Star"  /></span>
         
        </div>

        <div id="Ranks1">

         <span id="Ranks-header">Leaderboard</span> 

    <div className="ranks-data"> 
          <div id="One">1</div>
          <div id="Two">2</div>
          <div id="Three">3</div>
          <div id="Four">4</div>
          <div id="Five">5</div>
          <div id="Six">6</div>
          <div id="Seven">7</div>
    </div> 
    

    <div className="medals-Icons">
      
     <img id="Medal" src={Medal} alt="Medal" />
          <img id="Medal-1" src={Medal} alt="Medal" />
          <img id="Medal-2" src={Medal} alt="Medal" />
          <img id="Medal-3" src={Medal} alt="Medal" />
          <img id="Medal-4" src={Medal} alt="Medal" />
          <img id="Medal-5" src={Medal} alt="Medal" />
          <img id="Medal-6" src={Medal} alt="Medal" />

    </div> 

          <img id="Points-1" src={Points} alt="Points"/>
          <img id="Points-2" src={Points} alt="Points"/>
          <img id="Points-3" src={Points} alt="Points"/>
          <img id="Points-4" src={Points} alt="Points"/>
          <img id="Points-5" src={Points} alt="Points"/>
          <img id="Points-6" src={Points} alt="Points"/>
          <img id="Points-7" src={Points} alt="Points"/>
     
        </div>
        
        <PlayButton />
        <span id="HipHopText">@quizapp</span>
        <div></div>
        <div id="Description">
            <h3>Description</h3>
        </div>
        <div id="DescriptionContainer">
        <p>{data}</p>
        </div>
        <div id="SampleQuestions">
            <h3>Sample Questions</h3>
            <img  className="HandImage" src={Hand} alt="Hand"/>
            
            
            </div>
            <span id="Tupac"><p>Which is the densest element in the periodic table?</p></span>
            <div>
            <img  className="RecordImage" src={Record} alt="Hand"/>
            </div>
            <span id="Records"><p>What is chemistry a study of?</p></span>
          
                
            
        </div>
        </div>
    )
}

export default MolesAndBonds;
