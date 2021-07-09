import React from "react";
import Fade from "react-reveal/Fade";
import "./_gallery.scss";

export default function Gallery() {
  return (
    <div className="gallery" id="gallery">
      <div className="gallery__wrapper">
        <div className="heading">
          <p className="title">Pictures</p>
          <h3>I Have a Passion for My Work</h3>
        </div>
        <div className="picture-container">
          <Fade bottom cascade>
            <div className="image-one">
              <img
                src={process.env.PUBLIC_URL + "/images/castle.jpeg"}
                alt="castle"
              />
            </div>
            <div className="image-two">
              <img
                src={process.env.PUBLIC_URL + "/images/field.jpg"}
                alt="field"
              />
            </div>
            <div className="image-three">
              <img
                src={process.env.PUBLIC_URL + "/images/table.jpeg"}
                alt="table"
              />
            </div>
            <div className="image-five">
              <img
                src={process.env.PUBLIC_URL + "/images/stand.jpeg"}
                alt="stand"
              />
            </div>
            <div className="image-six">
              <img
                src={process.env.PUBLIC_URL + "/images/couple.jpg"}
                alt="happy couple"
              />
            </div>
            <div className="image-four">
              <img
                src={process.env.PUBLIC_URL + "/images/light.jpeg"}
                alt="light"
              />
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}
