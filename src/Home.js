import React from 'react'
import "./App.css"
import { Link} from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <h1>Memory Game</h1>
      <div className="selection-menu">
        <button><Link to="/GamePlay" >New Game</Link></button>

        <button>Level</button>

        <button><Link to="/Leaderboard" >Leaderboard</Link></button>
      </div>
    </div>
  );
}

export default Home
