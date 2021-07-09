import React from "react";
import Lightbox from "../lightbox/Lightbox";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Slide from "react-reveal/Slide";

import "./_photo.scss";
export default function Photo() {
  const photoLinks = [
    process.env.PUBLIC_URL + "/images/holding.jpg",
    process.env.PUBLIC_URL + "/images/dress.jpg",
    process.env.PUBLIC_URL + "/images/field.jpg",
    process.env.PUBLIC_URL + "/images/close.jpg",
  ];
  const photoItems = photoLinks.map((photo) => {
    return <Lightbox key={photo.toString()} link={photo} />;
  });
  return (
    <div className="photo">
      <div className="photo__wrapper">
        <div className="photo__wrapper--flex">
          <div className="left">
            <div className="sticky">
              <p className="title">Photo</p>
              <div className="top-margin">
                <h3>Wedding Photography</h3>
              </div>
              <div>
                <p>
                  And purpose resonates. Sincere core values are key to
                  connecting with real people in a digital first society.
                </p>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="lightbox">
              <SimpleReactLightbox>
                <SRLWrapper>
                  <Slide bottom>{photoItems}</Slide>
                </SRLWrapper>
              </SimpleReactLightbox>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
