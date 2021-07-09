import React from "react";
import Fade from "react-reveal/Fade";
import "./_contact.scss";
export default function Contact() {
  return (
    <div className="contact">
      <div className="contact__wrapper">
        <div className="contact__wrapper--flex">
          <Fade right>
            <div className="left">
              <div className="contact-col">
                <div>
                  <h3>Contact Me</h3>
                </div>
                <div className="top-margin">
                  <p>Phone</p>
                  <p>436-256-752</p>
                </div>
                <div className="top-margin">
                  <p>Email</p>
                  <p>support@website.com</p>
                </div>
                <div className="top-margin">
                  <p>Office Hours</p>
                  <p>Mon - Fri 9 am - 5 pm</p>
                  <p>Holidays 11 am - 3 pm</p>
                </div>
              </div>
            </div>
          </Fade>
          <Fade right>
            <div className="form-block">
              <p className="title">Contact form</p>
              <form>
                <input type="text" placeholder="name" />
                <input type="text" placeholder="last name" />
                <input
                  type="text"
                  placeholder="email"
                  className="email-input"
                />
                <input
                  type="text"
                  placeholder="phone"
                  className="phone-input"
                />
                <textarea placeholder="Message"></textarea>
                <button className="submit">Submit</button>
              </form>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}
