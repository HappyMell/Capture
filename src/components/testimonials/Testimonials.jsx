import React from "react";
import Fade from "react-reveal/Fade";
import "./_testimonials.scss";
export default function Testimonials() {
  const starNum = 5;

  return (
    <div className="testimonials">
      <div className="testimonials__wrapper">
        <div className="heading">
          <p className="title">Testimonials</p>
          <h2>What People Say About My Work</h2>
        </div>

        <div className="narrow-wrapper">
          <div className="narrow-wrapper--flex">
            <div className="testimonial-col">
              <Fade bottom>
                <div className="testimonial">
                  <div>
                    <p>
                      “Working with the team took us from being just normal to
                      be awesome the team took us from being with the team took
                      us from being just normal to  from being with ”
                    </p>
                    <div className="stars">
                      {[...Array(starNum)].map((e, i) => (
                        <img
                          src={process.env.PUBLIC_URL + "/images/star.svg"}
                          alt="star"
                          key={i}
                        />
                      ))}
                    </div>
                    <div className="top-margin">
                      <p className="title">Israel morris | Ceo Reddit</p>
                    </div>
                  </div>
                </div>
                <div className="testimonial">
                  <div>
                    <p>
                      “Working with the team took us from being just normal to
                      be awesome”
                    </p>
                    <div className="stars">
                      {[...Array(starNum)].map((e, i) => (
                        <img
                          src={process.env.PUBLIC_URL + "/images/star.svg"}
                          alt="star"
                          key={i}
                        />
                      ))}
                    </div>
                    <div className="top-margin">
                      <p className="title">THOMAS DOE | Cfo Webflow</p>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
            <div className="testimonial-col">
              <Fade top>
                <div className="testimonial">
                  <div>
                    <p>
                      “Working with the team took us from being just normal to
                      be awesome”
                    </p>
                    <div className="stars">
                      {[...Array(starNum)].map((e, i) => (
                        <img
                          src={process.env.PUBLIC_URL + "/images/star.svg"}
                          alt="star"
                          key={i}
                        />
                      ))}
                    </div>
                    <div className="top-margin">
                      <p className="title">Roger ville | business owner</p>
                    </div>
                  </div>
                </div>
                <div className="testimonial">
                  <div>
                    <p>
                      “Working with the team took us from being just normal to
                      be awesome the team took us from being with the team took
                      us from being just normal to  from being with ”
                    </p>
                    <div className="stars">
                      {[...Array(starNum)].map((e, i) => (
                        <img
                          src={process.env.PUBLIC_URL + "/images/star.svg"}
                          alt="star"
                          key={i}
                        />
                      ))}
                    </div>
                    <div className="top-margin">
                      <p className="title">MARIO ROSSETTI | Ceo bmw</p>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
            <div className="testimonial-col">
              <Fade bottom>
                <div className="testimonial">
                  <div>
                    <p>
                      “Working with the team took us from being just normal to
                      be awesome the team took us from being with the team took
                      us from being just normal to  from being with ”
                    </p>
                    <div className="stars">
                      {[...Array(starNum)].map((e, i) => (
                        <img
                          src={process.env.PUBLIC_URL + "/images/star.svg"}
                          alt="star"
                          key={i}
                        />
                      ))}
                    </div>
                    <div className="top-margin">
                      <p className="title">ALAN ROGERS | entrepreneur</p>
                    </div>
                  </div>
                </div>
                <div className="testimonial">
                  <div>
                    <p>
                      “Working with the team took us from being just normal to
                      be awesome”
                    </p>
                    <div className="stars">
                      {[...Array(starNum)].map((e, i) => (
                        <img
                          src={process.env.PUBLIC_URL + "/images/star.svg"}
                          alt="star"
                          key={i}
                        />
                      ))}
                    </div>
                    <div className="top-margin">
                      <p className="title">margaret Smith | Cto twitter</p>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
