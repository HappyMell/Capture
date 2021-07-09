import React from "react";
import { Link } from "react-scroll";
import Slide from "react-reveal/Slide";

import "./_photobutton.scss";

export default function PhotoButton() {
  return (
    <div className="photobutton">
      <div className="photobutton__wrapper">
        <div className="photobutton__wrapper--flex">
          <Slide left>
            <div className="image">
              <img
                src={process.env.PUBLIC_URL + "/images/hat.jpg"}
                alt="woman in hat"
              />
            </div>{" "}
          </Slide>
          <div className="info">
            <Slide right>
              {" "}
              <div className="info__wrapper">
                <h3>Wide Experience</h3>
                <p>
                  And purpose resonates. Sincere core values are key to
                  connecting with real people in a digital first society.
                </p>
                <p>
                  As an agency that exists to create remarkably beautiful things
                  that make an impact, shape culture seek fearless partners with
                  belief in their brand to create.
                </p>
                <p>
                  Experiences that will empower action, and build and legacy
                  through innovation.
                </p>
                <div className="top-margin">
                  <Link to="gallery-two" spy={true} smooth={true}>
                    <button className="learn-more">Learn More</button>
                  </Link>
                </div>
              </div>
            </Slide>
          </div>
        </div>
      </div>
    </div>
  );
}
