import '../components/PlayButton/popUp.css';
import { useHistory } from 'react-router-dom';
function Playandshare() {
  const history = useHistory();
      return (
      <div>  
           <span ><button  className="blue-btn" onClick={()=> history.push("/HipHop")}>
                Play
          </button></span>     
      </div>
      )
}
export default Playandshare;