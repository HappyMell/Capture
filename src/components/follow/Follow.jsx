import React from "react";
import Slide from "react-reveal/Slide";
import "./_follow.scss";

export default function Follow() {
  return (
    <div className="follow">
      <div className="follow__wrapper">
        <div className="heading">
          <img
            src={process.env.PUBLIC_URL + "/images/insta.svg"}
            alt="instagram"
          />
          <h2>Follow Me on Instagram</h2>
        </div>
        <div className="follow__wrapper--flex">
          <Slide right cascade>
            <div>
              <div className="insta-pic">
                <img
                  src={process.env.PUBLIC_URL + "/images/insta1.jpeg"}
                  alt="insta pic"
                />
                <div className="insta-pic-hover">
                  <img
                    src={process.env.PUBLIC_URL + "/images/insta.svg"}
                    alt="instagram"
                  />
                </div>
              </div>
              <div className="insta-pic-two">
                <img
                  src={process.env.PUBLIC_URL + "/images/mountains.jpeg"}
                  alt="insta pic"
                />
                <div className="insta-pic-hover">
                  <img
                    src={process.env.PUBLIC_URL + "/images/insta.svg"}
                    alt="instagram"
                  />
                </div>
              </div>
              <div className="insta-pic-three">
                <img
                  src={process.env.PUBLIC_URL + "/images/eagle.jpeg"}
                  alt="insta pic"
                />
                <div className="insta-pic-hover">
                  <img
                    src={process.env.PUBLIC_URL + "/images/insta.svg"}
                    alt="instagram"
                  />
                </div>
              </div>
              <div className="insta-pic-four">
                <img
                  src={process.env.PUBLIC_URL + "/images/hoodie.jpeg"}
                  alt="insta pic"
                />
                <div className="insta-pic-hover">
                  <img
                    src={process.env.PUBLIC_URL + "/images/insta.svg"}
                    alt="instagram"
                  />
                </div>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
}
