import React from "react";
import Lightbox from "../lightbox/Lightbox";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import "./_gallerytwo.scss";
export default function GalleryTwo() {
  const photoLinks = [
    process.env.PUBLIC_URL + "/images/couple.jpg",
    process.env.PUBLIC_URL + "/images/dinner.jpg",
    process.env.PUBLIC_URL + "/images/table.jpeg",
  ];
  const flexLinks = [
    process.env.PUBLIC_URL + "/images/castlecouple.jpg",
    process.env.PUBLIC_URL + "/images/field.jpg",
  ];

  const bottomGallery = [
    process.env.PUBLIC_URL + "/images/dockcouple.jpg",
    process.env.PUBLIC_URL + "/images/tree.jpg",
  ];

  const flexItems = flexLinks.map((p, i) => {
    return <Lightbox key={p} link={p} />;
  });

  const photoItems = photoLinks.map((photo, i) => {
    return (
      <>
        <Lightbox key={photo} link={photo} />
      </>
    );
  });

  const bottomItems = bottomGallery.map((bottom, i) => {
    return <Lightbox key={bottom} link={bottom} />;
  });

  const options = {
    caption: {
      showCaption: false,
    },
  };

  return (
    <div className="gallery-two">
      <div className="gallery-two__wrapper">
        <div className="heading">
          <p className="title">Gallery</p>
          <h2>Take a Look At Some Of My Pictures</h2>
        </div>
        <div className="gallery-box">
          <SimpleReactLightbox>
            <SRLWrapper options={options}>
              {photoItems}
              <div className="flex">{flexItems}</div>
              {bottomItems}
            </SRLWrapper>
          </SimpleReactLightbox>
        </div>
      </div>
    </div>
  );
}
