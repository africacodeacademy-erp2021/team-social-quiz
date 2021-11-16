import { useHistory } from "react-router";

function RouterLeaderboad(props:any) {
        let history = useHistory();
         const clickHandlerleaderboard = () => {
                   history.push(".Category");
      
        }
         return(
            <div>
              <button id="backButton" onClick={clickHandlerleaderboard}>Back</button>
            </div>
        )
      }
  export default RouterLeaderboad;