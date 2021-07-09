import React from "react";
import Fade from "react-reveal/Fade";
import "./_lightbox.scss";
export default function Lightbox(props) {
  return (
    <div className="top-margin">
      <Fade bottom>
        <a href={props.link}>
          <img src={props.link} alt="holding" />
        </a>
      </Fade>
    </div>
  );
}
