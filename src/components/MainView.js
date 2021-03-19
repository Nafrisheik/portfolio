import React from "react";
import Button from "./Button";
import "../App.css";

import "./MainView.css";
function MainView() {
  return (
    <div className="hero-container">
      <video src="/Videos/video.mp4" autoPlay loop muted></video>
      <h1> My Portfolio</h1><br></br>
      <p></p>      <p>I build Web apps using Javascript FrameWorks</p><p>Full Stack Applications</p>

      <br></br><br></br><br></br>
      {/* <div className="hero-btn">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Start Exploring
        </Button>
      </div> */}
      {/* <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Watch trailer <i className="far fa-play-circle"></i>
        </Button>
      </div> */}
    </div>
  );
}

export default MainView;
