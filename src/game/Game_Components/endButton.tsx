import { Link } from 'react-router-dom';
import '../Game_Play/playgame.css';


function EndButton(){
 
    return(
        
           <button className="onend"><Link className="link" to='/Score'>End</Link></button> 
        
    )
}
export default EndButton;