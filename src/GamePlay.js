import React from 'react'
import "./App.css"
import { Link, Route, Routes } from "react-router-dom";
import StandardGame from "./standard/standardGame";

function GamePlay() {
  return (
    <div className="HEADING">
        <h1>Please choose your Game Mode</h1>
        <div className="game-menu">
            <Link to="/StandardGame" ><button>Standard Mode</button></Link>
            <Link to="/GameL1" ><button>Standard Mode 1</button></Link>
            <Link to="/GameL2" ><button>Standard Mode 2</button></Link>
            <Link to="/GameL3" ><button>Standard Mode 3</button></Link>
            <Link to="/GameL4" ><button>Standard Mode 4</button></Link>
            <Link to="/GameL5" ><button>Standard Mode 5</button></Link>
            <Link to="/Challenge" ><button>Challenge Mode</button></Link>
        </div>


    </div> 
  )
}

export default GamePlay