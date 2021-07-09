import React, { useState } from "react";
import Fade from "react-reveal/Fade";

import "./_accordion.scss";

export default function Accordion(props) {
  const [isOpen, setIsOpen] = useState(false);

  const { title } = props;
  return (
    <Fade bottom cascade>
      <div className="accordion-wrapper">
        <div className="accordion-trigger" onClick={() => setIsOpen(!isOpen)}>
          <div className="full-width">
            <div className="flex-no-wrap">
              <h3>{title}</h3>
            </div>
          </div>
          <div className="open-close-box" aria-expanded={isOpen}>
            <img
              src={process.env.PUBLIC_URL + "/images/chevron.svg"}
              alt="chevron"
            />
          </div>
        </div>
        <div className="accordion-content" aria-expanded={!isOpen}>
          {props.children}
        </div>
      </div>
    </Fade>
  );
}
