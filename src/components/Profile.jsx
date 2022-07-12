import React from "react";
import "./Profile.css";
import Photo from "../Headshot.jpg";

export default function Profile() {
  return (
    <div className="profile">
      <div className="leftDiv">
        <div className="innerDiv">
          <h6 className="monotype">Hi, my name is</h6>
          <h1 className="name">Jacob Binnie.</h1>
          <h1 className="slogan">I build for the web.</h1>
          <p className="expertise">
            I’m a software engineer with 1.5 years experience specializing in
            frontend web applications.
          </p>
          <div className="buttons">
            <a
              href="https://linkedin.com/in/jacobbinnie"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="button">LinkedIn</button>
            </a>
            <a
              href="https://github.com/jacobbinnie"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="button">Github</button>
            </a>

            <a
              href="https://www.dropbox.com/s/qwxc62isi187wgq/Resume-Jacob%20Binnie-July5.pdf?dl=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="button">Resume</button>
            </a>
          </div>
        </div>
      </div>
      <div className="rightDiv">
        <img src={Photo} alt="headshot" className="headshot"></img>
      </div>
    </div>
  );
}
