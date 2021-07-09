import React from "react";
import "./_morephotography.scss";
import Lightbox from "../lightbox/Lightbox";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import Slide from "react-reveal/Slide";

export default function MorePhotography() {
  const photoLinks = [
    process.env.PUBLIC_URL + "/images/handrun.jpg",
    process.env.PUBLIC_URL + "/images/icecream.jpg",
    process.env.PUBLIC_URL + "/images/sunset.jpg",
  ];
  const photoItems = photoLinks.map((photo) => {
    return <Lightbox key={photo.toString()} link={photo} />;
  });
  return (
    <div className="more">
      <div className="more__wrapper">
        <div className="more__wrapper--flex">
          <div className="right">
            <div className="lightbox">
              <SimpleReactLightbox>
                <SRLWrapper>
                  {" "}
                  <Slide bottom>{photoItems}</Slide>
                </SRLWrapper>
              </SimpleReactLightbox>
            </div>
          </div>
          <div className="left">
            <div className="sticky">
              <p className="title">Photo</p>
              <div className="top-margin">
                <h3>More Photography</h3>
                <div>
                  <p>
                    And purpose resonates. Sincere core values are key to
                    connecting with real people in a digital first society.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
