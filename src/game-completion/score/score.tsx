
export default function Score(){
    const score = JSON.stringify(localStorage.getItem("PlayerScore"));
    const ScoreOne = score.replace('"', "");
    const PlayerScore = ScoreOne.replace('"', "");
    
return(
<> 

    <h1>Your Final Score      {PlayerScore} </h1>

</>
)
}