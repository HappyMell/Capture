import React from "react";
import Accordion from "../accordion/Accordion";

import "./_faq.scss";

export default function Faq() {
  return (
    <div className="faq">
      <div className="faq__wrapper">
        <div className="heading">
          <p className="title">FAQ</p>
          <h2>Frequently Asked Questions</h2>
        </div>
        <div className="narrow-wrapper" />

        <div className="top-margin">
          <Accordion title={"What Are Your Hourly Rates?"}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.{" "}
            </p>
          </Accordion>
          <Accordion title={"Do You Offer Drone Video Capture?"}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.{" "}
            </p>
          </Accordion>
          <Accordion title={"Can You Come To My Wedding In My City?"}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.{" "}
            </p>
          </Accordion>
          <Accordion title={"I Have More Questions. How I Contact You?"}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.{" "}
            </p>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
