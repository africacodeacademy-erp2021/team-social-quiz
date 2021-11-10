import React from 'react'
import Leaderboards from '../../game-completion/leaderboard/leaderboard';
import Navbar from '../components/Navbar';

function Leaderboard() {
    return (
        <div className="screen">
        <div className="hamburger">
          <Navbar />
        </div>
        <div className="sidebar">
            <Leaderboards/>
            </div>
        </div>
      
    )
}
export default Leaderboard;