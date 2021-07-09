import React from "react";
import { Link } from "react-scroll";
import Fade from "react-reveal/Fade";

import "./_intro.scss";

export default function Intro() {
  return (
    <div className="intro">
      <div className="intro__wrapper">
        <div className="heading-box">
          <p className="title">Intro</p>
          <h2>
            Alan is a professional photographer based in the beautiful city of
            San Francisco
          </h2>
        </div>
        <div className="intro__wrapper--flex">
          <Fade top cascade>
            <div>
              <div className="intro-feature">
                <img
                  src={process.env.PUBLIC_URL + `/images/wheel.svg`}
                  alt="wheel icon"
                />
                <div className="intro-feature--title">
                  <p>About Me</p>
                </div>
                <div className="intro-feature--desc">
                  <p>
                    I have the experience to make of your photo session a
                    breeze.
                  </p>
                </div>
                <div className="intro-feature--button">
                  <Link to="about" spy={true} smooth={true}>
                    <button className="learn-more">Learn More</button>
                  </Link>
                </div>
              </div>

              <div className="intro-feature">
                <img
                  src={process.env.PUBLIC_URL + "/images/camera.svg"}
                  alt="camera icon"
                />
                <div className="intro-feature--title">
                  <p>My Services</p>
                </div>
                <div className="intro-feature--desc">
                  <p>
                    I have the experience to make of your photo session a
                    breeze.
                  </p>
                </div>
                <div className="intro-feature--button">
                  <Link to="services" spy={true} smooth={true}>
                    <button className="learn-more">Learn More</button>
                  </Link>
                </div>
              </div>
              <div className="intro-feature">
                <img
                  src={process.env.PUBLIC_URL + `/images/scope.svg`}
                  alt="scope icon"
                />
                <div className="intro-feature--title">
                  <p>Contact Me</p>
                </div>
                <div className="intro-feature--desc">
                  <p>
                    I have the experience to make of your photo session a
                    breeze.
                  </p>
                </div>
                <div className="intro-feature--button">
                  <Link to="contact" spy={true} smooth={true}>
                    <button className="learn-more">Learn More</button>
                  </Link>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}
