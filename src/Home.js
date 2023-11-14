import React from 'react'
import "./App.css"
import { Link, Route, Routes } from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <h1>Memory Game</h1>
      <div className="selection-menu">
        <button><Link to="/GamePlay" >New Game</Link></button>

        <button>Level</button>

        <button>Leaderboard</button>
      </div>
    </div>
  );
}

export default Home
