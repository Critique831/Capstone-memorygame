import React from 'react'
import "./App.css"
import { Link} from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <h1>Memory Game</h1>
      <div className="selection-menu">
        <Link to="/GamePlay" ><button>New Game</button></Link>

        <button>Level</button>

        <button><Link to="/Leaderboard" >Leaderboard</Link></button>
      </div>
    </div>
  );
}

export default Home
