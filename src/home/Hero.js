import React from "react";
import banner from "../img/banner.png";
import banner2 from "../img/banner2.png";
import banner3 from "../img/banner3.png";
import icon1 from "../img/icon_1.png";
import icon2 from "../img/icon_2.png";
import icon3 from "../img/icon_3.png";
import icon4 from "../img/icon_4.png";
import icon5 from "../img/icon_5.png";
import icon6 from "../img/icon_6.png";

const Hero = () => {
  return (
    <>
      <section>
        <div className="container-fluid">
          <div
            id="carouselExample"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={banner} className="banner" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={banner2} className="banner" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={banner3} className="banner" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>

      <section className="sec-pad">
        <div className="container-fluid pay-row">
          <div className="row">
            <div className="col-lg-2 prod-box">
              <div className="pay-box">
                <img src={icon1} alt="icon-1" className="pay-icon" />
                <p className="icon-p">
                  100% <br />
                  Payment Secured{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-2 prod-box">
              <div className="pay-box">
                <img src={icon2} alt="icon-1" className="pay-icon" />
                <p className="icon-p">
                  Support lots <br />
                  of Payments
                </p>
              </div>
            </div>
            <div className="col-lg-2 prod-box">
              <div className="pay-box">
                <img src={icon3} alt="icon-1" className="pay-icon" />
                <p className="icon-p">
                  24hours/7days
                  <br /> Support
                </p>
              </div>
            </div>
            <div className="col-lg-2 prod-box">
              <div className="pay-box">
                <img src={icon4} alt="icon-1" className="pay-icon" />
                <p className="icon-p">
                  Free Delivery
                  <br /> with $50{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-2 prod-box">
              <div className="pay-box">
                <img src={icon5} alt="icon-1" className="pay-icon" />
                <p className="icon-p">
                  Best Price
                  <br /> Guaranteed
                </p>
              </div>
            </div>
            <div className="col-lg-2 prod-box">
              <div className="pay-box">
                <img src={icon6} alt="icon-1" className="pay-icon" />
                <p className="icon-p">
                  Mobile <br />
                  Apps Ready
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
