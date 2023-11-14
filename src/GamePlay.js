import React from 'react'
import "./App.css"
import { Link, Route, Routes } from "react-router-dom";

function GamePlay() {
  return (
    <div className="HEADING">
        <h1>Please choose your Game Mode</h1>
        <div className="game-menu">
            <button><Link to="/Standard" >Standard Mode</Link></button>
            <button><Link to="/Challenge" >Challenge Mode</Link></button>
        </div>
    </div> 
  )
}

export default GamePlay