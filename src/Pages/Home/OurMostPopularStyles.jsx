import React from "react";
import "./OurMostPopularStyles.css";

const PopularStyles = () => {
  return (
    <section className="popular-styles-section py-5">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-lg-6">
            <p className="popular-subtitle">OUR MOST POPULAR STYLES</p>

            <h1 className="popular-title">
              Save big on shoes <br />
              from last season
            </h1>

            <p className="popular-text">
              Morbi natoque id finibus natoque sapien turpis elementum maximus.
              Sociosqu auctor a urna consequat laoreet nisi accumsan magna.
              Adipiscing vulputate nec euismod, a aliquam enim.
            </p>

            <p className="popular-text">
              Molestie dolor mus vitae penatibus sed lectus convallis ut neque.
              Leo elementum euismod penatibus cras sociosqu aliquet tellus.
            </p>

            <button className="btn popular-btn">
              SHOP NOW →
            </button>
          </div>

          <div className="col-lg-6 d-flex gap-3 justify-content-center mt-4 mt-lg-0">

            <div className="popular-img-box">

              <img
                src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77"
                alt="shoe1"
                className="img-fluid"
              />

              <div className="hover-overlay">

                <svg viewBox="0 0 120 120" className="circle-text">
                  <defs>
                    <path
                      d="M 60,60 m -50,0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0"
                      id="textPath1"
                    />
                  </defs>
                  <text>
                    <textPath href="#textPath1">
                      Fashion style store
                    </textPath>
                  </text>
                </svg>

              </div>

            </div>

            <div className="popular-img-box">

              <img
                src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77"
                alt="shoe2"
                className="img-fluid"
              />

              <div className="always-overlay">

                <div className="circle-border"></div>

                <div className="play-btn">▶</div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default PopularStyles;