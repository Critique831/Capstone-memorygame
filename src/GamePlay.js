import React from 'react'
import "./App.css"
import { Link, Route, Routes } from "react-router-dom";
import StandardGame from "./standard/standardGame";

function GamePlay() {
  return (
    <div className="HEADING">
        <h1>Please choose your Game Mode</h1>
        <div className="game-menu">
            <button><Link to="/standard/standardGame" >Standard Mode</Link></button>
            <button><Link to="/Challenge" >Challenge Mode</Link></button>
        </div>

      <Routes>
        <Route path="/standardGame" element={<StandardGame />} />
        {/* <Route path="/" element={<Live />} />
        <Route path="/" element={<Contact />} /> */}
      </Routes>

    </div> 
  )
}

export default GamePlay