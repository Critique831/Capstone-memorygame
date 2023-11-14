import "./App.css";
import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import GamePlay from "./GamePlay";
import StandardGame from "./standard/standardGame";

function App() {
  return (
    <div className="container">
      <nav>
        <ul>
          <Link to="/" class="list">
            Home
          </Link>
          <Link to="/GamePlay" class="list">
            GamePlay
          </Link>
          <Link to="/live" class="list">
            Live course
          </Link>
          <Link to="/contact" class="list">
            Contact
          </Link>
        </ul>
      </nav>

      {/* Defining routes path and rendering components as element */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/GamePlay" element={<GamePlay />} />
          <Route path="/standard/standardGame" element={<StandardGame/>} />
        {/* <Route path="/" element={<Live />} />
        <Route path="/" element={<Contact />} /> */}
      </Routes>
    </div>
  );
}

export default App;