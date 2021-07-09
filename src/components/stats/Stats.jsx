import React from "react";
import "./_stats.scss";
import Fade from "react-reveal/Fade";

export default function Stats() {
  return (
    <div className="stats">
      <div className="stats__wrapper">
        <div className="stats__wrapper--flex">
          <Fade left>
            <div className="left">
              <h4>My Numbers</h4>
            </div>
          </Fade>
          <div className="right">
            <Fade right duration={2000}>
              <div className="numbers-container">
                <div className="numbers-item">
                  <p className="number">120,370</p>
                  <div className="top-margin">
                    <p className="title">Photos Taken</p>
                  </div>
                  <div className="top-margin">
                    <p className="info">
                      And purpose resonates. Sincere core values are key to
                      connecting with real people in a digital first society.
                    </p>
                  </div>
                </div>
                <div className="numbers-item">
                  <p className="number">10,370</p>
                  <div className="top-margin">
                    <p className="title">FB Friends</p>
                  </div>
                  <div className="top-margin">
                    <p className="info">
                      And purpose resonates. Sincere core values are key to
                      connecting with real people in a digital first society.
                    </p>
                  </div>
                </div>
              </div>
            </Fade>
            <Fade right>
              <div className="numbers-container">
                <div className="numbers-item">
                  <p className="number">23,580</p>
                  <div className="top-margin">
                    <p className="title">Editing Hours</p>
                  </div>
                  <div className="top-margin">
                    <p className="info">
                      And purpose resonates. Sincere core values are key to
                      connecting with real people in a digital first society.
                    </p>
                  </div>
                </div>
                <div className="numbers-item">
                  <p className="number">41,125</p>
                  <div className="top-margin">
                    <p className="title">Video Minutes</p>
                  </div>
                  <div className="top-margin">
                    <p className="info">
                      And purpose resonates. Sincere core values are key to
                      connecting with real people in a digital first society.
                    </p>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}
