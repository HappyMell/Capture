import React, { useState, useRef, useEffect } from "react";
import NavbarBootstrap from "react-bootstrap/Navbar";
import { Link } from "react-scroll";
import Nav from "react-bootstrap/Nav";

import "./_navbar.scss";

export default function Navbar() {
  const [navBackground, setNavBackground] = useState(false);
  const navRef = useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 500;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <NavbarBootstrap
        expand="md"
        variant="dark"
        style={{
          transition: "1s ease",
          backgroundColor: navBackground ? "#88969d" : "transparent",
        }}
      >
        <div className="top">
          <NavbarBootstrap.Brand>
            <Link to="home" spy={true} smooth={true}>
              <img
                className="logo"
                src={process.env.PUBLIC_URL + "/images/logo.png"}
                alt="Logo"
              />
            </Link>
          </NavbarBootstrap.Brand>
          <NavbarBootstrap.Toggle
            aria-controls="basic-navbar-nav"
            className="hamburger"
          />
        </div>
        <NavbarBootstrap.Collapse id="basic-navbar-nav" className="dropdown ">
          <Nav>
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
          </Nav>
        </NavbarBootstrap.Collapse>
      </NavbarBootstrap>
    </>
  );
}
