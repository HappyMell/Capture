import React from "react";
import "./_services.scss";
import Fade from "react-reveal";

export default function Services() {
  return (
    <div className="services" id="services">
      <div className="services__wrapper">
        <div className="heading-box">
          <p className="title">Services</p>
          <h2>These are Some of the Services I Offer</h2>
        </div>
        <div className="services__wrapper--flex">
          <Fade bottom cascade>
            <div className="feature-col">
              <div className="feature">
                <img
                  src={process.env.PUBLIC_URL + "/images/post.svg"}
                  alt="post"
                />
                <div className="top-margin">
                  <p className="title">Wedding Photography</p>
                </div>
                <div className="top-margin-10">
                  <p>I have the experience to make of your photo session.</p>
                </div>
              </div>
              <div className="feature">
                <img
                  src={process.env.PUBLIC_URL + "/images/color.svg"}
                  alt="post"
                />
                <div className="top-margin">
                  <p className="title">Color Correction</p>
                </div>
                <div className="top-margin-10">
                  <p>I have the experience to make of your photo session.</p>
                </div>
              </div>
              <div className="side-line" />
            </div>
            <div className="feature-col">
              <div className="feature">
                <img
                  src={process.env.PUBLIC_URL + "/images/bag.svg"}
                  alt="post"
                />
                <div className="top-margin">
                  <p className="title">Newborn Photo Shoot</p>
                </div>
                <div className="top-margin-10">
                  <p>I have the experience to make of your photo session.</p>
                </div>
              </div>
              <div className="feature">
                <img
                  src={process.env.PUBLIC_URL + "/images/ven.svg"}
                  alt="post"
                />
                <div className="top-margin">
                  <p className="title">Drone Recording</p>
                </div>
                <div className="top-margin-10">
                  <p>I have the experience to make of your photo session.</p>
                </div>
              </div>
              <div className="side-line" />
            </div>
            <div className="feature-col">
              <div className="feature">
                <img
                  src={process.env.PUBLIC_URL + "/images/plug.svg"}
                  alt="post"
                />
                <div className="top-margin">
                  <p className="title">Photo Booth</p>
                </div>
                <div className="top-margin-10">
                  <p>I have the experience to make of your photo session.</p>
                </div>
              </div>
              <div className="feature">
                <img
                  src={process.env.PUBLIC_URL + "/images/temp.svg"}
                  alt="post"
                />
                <div className="top-margin">
                  <p className="title">Model Direction</p>
                </div>
                <div className="top-margin-10">
                  <p>I have the experience to make of your photo session.</p>
                </div>
              </div>
              <div className="side-line" />
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}
