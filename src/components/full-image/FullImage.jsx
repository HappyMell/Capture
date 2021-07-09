import React from "react";
import "./_fullimage.scss";
export default function FullImage() {
  return (
    <div className="full-image">
      <div className="full-image__wrapper">
        <img src={process.env.PUBLIC_URL + "/images/horse.jpg"} alt="horse" />
      </div>
    </div>
  );
}
