import React from "react";
import "./_photostudio.scss";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

export default function PhotoStudio() {
  return (
    <div className="photostudio">
      <div className="photostudio__wrapper">
        <div className="photostudio__wrapper--flex">
          <Slide left>
            {" "}
            <div className="image">
              <img
                src={process.env.PUBLIC_URL + "/images/snug.jpg"}
                alt="snug"
              />
            </div>{" "}
          </Slide>
          <div className="text">
            <Slide right>
              <div>
                <h3>Photo Studio</h3>
                <p>
                  And purpose resonates. Sincere core values are key to
                  connecting with real people in a digital first society.
                </p>
                <p>
                  As an agency that exists to create remarkably beautiful things
                  that make an impact, shape culture seek  fearless partners
                  with belief in their brand to create.
                </p>
                <p>
                  Experiences that will empower action, and build and legacy
                  through innovation.
                </p>
                <div className="top-margin">
                  <div className="top-margin--flex">
                    <Fade right>
                      <div className="mini-feature">
                        <img
                          src={process.env.PUBLIC_URL + "/images/roll.svg"}
                          alt="camera roll"
                        />
                        <div className="top-margin">
                          <p className="title">Pro Gear</p>
                        </div>
                      </div>
                      <div className="mini-feature">
                        <img
                          src={process.env.PUBLIC_URL + "/images/film.svg"}
                          alt="camera roll"
                        />
                        <div className="top-margin">
                          <p className="title">Photo Studio</p>
                        </div>
                      </div>
                      <div className="mini-feature">
                        <img
                          src={process.env.PUBLIC_URL + "/images/pano.svg"}
                          alt="camera roll"
                        />
                        <div className="top-margin">
                          <p className="title">Picture Quality</p>
                        </div>
                      </div>
                    </Fade>
                  </div>
                </div>
              </div>
            </Slide>
          </div>
        </div>
      </div>
    </div>
  );
}
