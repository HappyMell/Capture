import React from "react";
import { Link } from "react-scroll";

import "./_footer.scss";
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <div>
          <div className="social-icons">
            <div className="social-icons-border">
              <img
                src={process.env.PUBLIC_URL + "/images/insta-white.svg"}
                alt="insta"
              />
            </div>
            <div className="social-icons-border">
              <img
                src={process.env.PUBLIC_URL + "/images/facebook-white.svg"}
                alt="facebook"
              />
            </div>
            <div className="social-icons-border">
              <img
                src={process.env.PUBLIC_URL + "/images/twitter.svg"}
                alt="twitter"
              />
            </div>
            <div className="social-icons-border">
              <img
                src={process.env.PUBLIC_URL + "/images/pinterest.svg"}
                alt="pinterest"
              />
            </div>
            <div className="social-icons-border">
              <img
                src={process.env.PUBLIC_URL + "/images/vimeo.svg"}
                alt="vimeo"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-menu">
        <div className="footer-menu__wrapper">
          <div className="footer-flex">
            <div className="logo">
              <div className="footer-logo">
                <img
                  src={process.env.PUBLIC_URL + "/images/logo.png"}
                  alt="logo"
                />
              </div>
            </div>
            <div className="footer-menu">
              <Link
                to="about"
                spy={true}
                smooth={true}
                className="navbarLink  link link--metis"
              >
                About Me
              </Link>
              <Link
                to="services"
                spy={true}
                smooth={true}
                className="navbarLink link link--metis"
              >
                Services
              </Link>
              <Link
                to="gallery-two"
                spy={true}
                smooth={true}
                className="navbarLink link link--metis"
              >
                Gallery
              </Link>
              <Link
                to="testimonials"
                spy={true}
                smooth={true}
                className="navbarLink link link--metis"
              >
                Testimonials
              </Link>
              <Link
                to="faq"
                spy={true}
                smooth={true}
                className="navbarLink link link--metis"
              >
                FAQ
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                className="navbarLink link link--metis"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
