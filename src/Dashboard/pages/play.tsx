import '../components/PlayButton/popUp.css';
import { useHistory } from 'react-router-dom';
function Playandshare(props:any) {
  const history = useHistory();
      return (
      <div>  
           <span ><button  className="blue-btn" onClick={()=> history.push(props.path)}>
                Play
          </button></span>     
      </div>
      )
}
export default Playandshare;