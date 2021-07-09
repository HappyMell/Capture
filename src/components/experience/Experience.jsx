import React from "react";
import Slide from "react-reveal/Slide";

import "./_experience.scss";
export default function Experience() {
  return (
    <div className="exp">
      <div className="exp__wrapper">
        <div className="exp__wrapper--flex">
          <div className="left">
            <div className="sticky">
              <p className="title">Experience</p>
              <div className="quote">
                And purpose resonates sincere core values are key connecting
                with real people in a digital first society as an agency that
                exists to create.
              </div>
              <div className="signature">
                <img
                  src={process.env.PUBLIC_URL + "/images/signature-black.png"}
                  alt="signature"
                />
              </div>
            </div>
          </div>
          <div className="right">
            <div className="info">
              <p>
                As an agency that exists to create remarkably beautiful things
                that make an impact, shape culture seek  fearless partners with
                belief in their brand to create.
              </p>
              <p>
                Experiences that will empower action, and build and legacy
                through innovation.
              </p>
              <p>
                Exists to create remarkably beautiful things that make an
                impact, shape culture seek  fearless partners with belief in
                their brand to create.
              </p>
              <p>
                Experiences that will empower action, and build and legacy
                through innovation.
              </p>
              <p>
                As an agency that exists to create remarkably beautiful things
                that make an impact, shape culture seek  fearless partners with
                belief in their brand to create.
              </p>
              <Slide left>
                {" "}
                <div className="img">
                  <img
                    src={process.env.PUBLIC_URL + "/images/standing.jpg"}
                    alt="woman standing"
                  />
                </div>{" "}
              </Slide>
              <p>
                As an agency that exists to create remarkably beautiful things
                that make an impact, shape culture seek  fearless partners with
                belief in their brand to create.
              </p>
              <p>
                Experiences that will empower action, and build and legacy
                through innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
