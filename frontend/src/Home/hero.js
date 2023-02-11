import React from 'react'
import Typewriter from "typewriter-effect";
import "./hero.css"
import "./background.css";

function Hero() {
  return (
    <div className="main">
      <div className="sp-container">
        <div className="sp-content">
          <div className="sp-globe"></div>
          <h2 className="frame-1">Unlock the Truth </h2>
          <h2 className="frame-2">with the Greatest Detective</h2>
          <h2 className="frame-3">Join the Hunt</h2>
          <h2 className="frame-4">for Justice!</h2>
          <h2 className="frame-5">
            <span>The Mystery Match</span>
            {/* <span>Mystery</span>
            <span>Match</span> */}
          </h2>
          {/* <a className="sp-circle-link" href="https://nick.mkrtchyan.ga">
            by Nick
          </a> */}
        </div>
      </div>
      {/* <div className="hero1">
        <div className="xyz">
          <div className="drop"></div>
          <div className="wave"></div>
        </div>
        </div> */}
      {/* <div className="hero_logo relative">
        Mystery Match */}
      {/* <Typewriter
          options={{
            strings: ["Mystery Match"],
            // strings:["2022"],
            autoStart: true,
            pauseFor: 2500,
            loop: true,
          }}
        /> */}
      {/* </div> */}
      {/* Unlock the Truth with the Master Detective: Join the Hunt for Justice */}
      {/* <h1 className="hero_slogan text-white font-semibold blur-md">
        <span className="spn-slgn">Unlock</span>
        <span className="spn-slgn">the</span>
        <span className="spn-slgn">Truth </span>
        <span className="spn-slgn">with</span>
        <span className="spn-slgn">the</span>
        <span className="spn-slgn">Master</span>
        <span className="spn-slgn">Detective:</span>
        <span className="spn-slgn">: </span>
        <br></br>
        <span className="spn-slgn pl-32">Join</span>
        <span className="spn-slgn">the</span>
        <span className="spn-slgn">Hunt</span>
        <span className="spn-slgn">for</span>
        <span className="spn-slgn">Justice</span>
      </h1> */}
      {/* </div> */}
      <div className="register">
        <button className="btn rounded">
          <a href="/sign-in">
            <span className="btn-span">Click to Apply</span>
          </a>
        </button>
      </div>
    </div>
  );
}

export default Hero 