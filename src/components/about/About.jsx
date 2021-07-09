import React from "react";
import Slide from "react-reveal/Slide";

import "./_about.scss";

export default function About() {
  return (
    <div className="about" id="about">
      <div className="about__wrapper">
        <div className="about__wrapper--flex">
          <Slide left>
            {" "}
            <div className="image">
              <img
                src={process.env.PUBLIC_URL + "/images/joe.jpeg"}
                alt="joe"
              />
            </div>
          </Slide>
          <div className="text-container">
            <Slide right>
              <div className="text-container__wrapper">
                <h3>About Me</h3>
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
                <div className="award">
                  <div className="award__wrapper">
                    <div className="award__wrapper--right">
                      <img
                        src={process.env.PUBLIC_URL + "/images/trophy.svg"}
                        alt="trohy"
                      />
                    </div>
                    <div className="award__wrapper--center">
                      <p>i was awarded as best photographer of the year</p>
                    </div>
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
