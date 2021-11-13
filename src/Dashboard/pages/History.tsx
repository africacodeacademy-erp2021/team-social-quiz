import React from "react";
import "../../App";
import Navbar from "../components/Navbar";

function History() {
  return (
    <div className="screen">
      <div className="hamburger">
        <Navbar />
      </div>
      <div className="sidebar">
        <h1>Recently played</h1>
      </div>
    </div>
  );
}

export default History;
