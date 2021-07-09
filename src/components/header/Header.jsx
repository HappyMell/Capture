import React from "react";
import Slider from "react-slick";
import { Link } from "react-scroll";
import Fade from "react-reveal/Fade";
import "./_header.scss";
export default function Header() {
  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };
  return (
    <div className="header" id="home">
      <div className="slider">
        <Slider {...settings}>
          <div className="sliderItem">
            <img
              src={process.env.PUBLIC_URL + "/images/castle.jpg"}
              alt="slide 1"
            />
          </div>
          <div className="sliderItem">
            <img
              src={process.env.PUBLIC_URL + "/images/dockcouple.jpg"}
              alt="slide 2"
            />
          </div>
          <div className="sliderItem">
            <img
              src={process.env.PUBLIC_URL + "/images/hands.jpg"}
              alt="slide 3"
            />
          </div>
        </Slider>
      </div>

      <div className="content-wrapper">
        <div className="content-wrapper--flex">
          <Fade bottom duration={2000}>
            <p>Welcome</p>
          </Fade>

          <div className="sliderWelcome">
            <Fade bottom delay={500}>
              <h1>
                Alan <i>Photography</i>
              </h1>
            </Fade>
            <Fade bottom delay={600}>
              <div className="signature">
                <img
                  src={process.env.PUBLIC_URL + "/images/signature.png"}
                  alt="signature"
                />
              </div>
            </Fade>
          </div>
        </div>
      </div>

      <div className="scroll-down">
        <Link to="intro" spy={true} smooth={true}>
          {" "}
          <p>Scroll Down</p>{" "}
        </Link>
      </div>
    </div>
  );
}
