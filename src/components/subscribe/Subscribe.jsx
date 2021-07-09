import React, { useState, useEffect } from "react";

import "./_subscribe.scss";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
export default function Subscribe({ status, message, onValidated }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    if (status === "success") clearFields();
  }, [status]);

  const clearFields = () => {
    setName("");
    setEmail("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      name &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
        MERGE1: name,
      });
  };

  return (
    <div className="subscribe">
      <div className="subscribe--flex">
        <Fade up>
          <div className="left">
            <div
              className="absolute"
              style={{
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + "/images/brush.jpg"
                })`,
              }}
            ></div>
          </div>
        </Fade>
        <div className="right">
          <Slide right>
            <div>
              <h3>Stay In the Loop</h3>
              <p>
                And purpose resonates. Sincere core values are key to connecting
                with real people in a digital first society.
              </p>

              <div className="top-margin">
                {status === "sending" && (
                  <div className="mc__alert mc__alert--sending">sending...</div>
                )}
                {status === "error" && (
                  <div
                    className="mc__alert mc__alert--error"
                    dangerouslySetInnerHTML={{ __html: message }}
                  />
                )}
                {status === "success" && (
                  <div
                    className="mc__alert mc__alert--success"
                    dangerouslySetInnerHTML={{ __html: message }}
                  />
                )}
                <div className="form">
                  <form onSubmit={(e) => handleSubmit(e)}>
                    <input
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      type="text"
                      placeholder="Name"
                    />
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      type="email"
                      placeholder="Email"
                    />
                    <button values={[email, name]} className="subsribe-button">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
}
