import React from "react";
import "./header.css";

const Footer = () => {
  return (
    <>
      <section className="footer pt-1">
        <div className="container-fluid">
          <div className="row my-4">
            <div className="col-lg-5">
              <div className="row b-bor">
                <p className="sec-store">Download App</p>
                <div className="col-lg-4">
                  <button
                    type="button"
                    className="btn"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      background: "rgb(194, 45, 87)",
                      color: "#fff",
                    }}
                  >
                    <div>
                      {" "}
                      <i className="fab fa-google-play"></i>
                    </div>
                    <div className="mx-2" style={{ textAlign: "justify" }}>
                      <span>Get It on</span>
                      <br />
                      <span>Google play</span>
                    </div>
                  </button>
                </div>
                <div className="col-lg-6">
                  <button
                    type="button"
                    className="btn"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      background: "rgb(194, 45, 87)",
                      color: "#fff",
                    }}
                  >
                    <div>
                      <i className="fab fa-google-play"></i>
                    </div>
                    <div className="mx-2" style={{ textAlign: "justify" }}>
                      <span>Download on the</span>
                      <br />
                      <span>App store</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <p className="sec-store">Security store</p>
            </div>
          </div>
          <div className="row footer-news">
            <div className="col-lg-4">
              <h3>
                <i className="fa fa-envelope footer-env" aria-hidden="true"></i>
                Sign up for Newsletter
              </h3>
            </div>
            <div className="col-lg-4">
              <p className="mt-2">
                Shopping First For Coupon $20 Receive and.....
              </p>
            </div>
            <div className="col-lg-4">
              <div className="subscribe-form">
                <input
                  type="email"
                  className="subscribe-input"
                  placeholder="info@krizaar.com"
                />
                <button className="subscribe-button">Subscribe</button>
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-4">
              <p className="sec-store">Store information</p>
              <div className="foot-info">
                <i className="fa fa-map-marker ft-icon" aria-hidden="true"></i>
                Shopping First For Coupon $20 Receive and.....
              </div>
              <div className="foot-info">
                <i className="fa fa-phone ft-icon"></i>0123456789
              </div>
              <div className="foot-info">
                <i className="fa fa-envelope ft-icon" aria-hidden="true"></i>
                info@krizaar.com
              </div>
            </div>
            <div className="col-lg-2 f-info">
              <p className="sec-store">Quick links</p>
              <ul>
                <li className="foot-info">About Us</li>
                <li className="foot-info">Compare</li>
                <li className="foot-info">Contact Us</li>
                <li className="foot-info">Legal Notice</li>
              </ul>
            </div>
            <div className="col-lg-2 f-info">
              <p className="sec-store">My Account</p>
              <ul>
                <li className="foot-info">whislist</li>
                <li className="foot-info">Delivery</li>
                <li className="foot-info">T&C</li>
                <li className="foot-info">All collection</li>
                <li className="foot-info">Contact us</li>
              </ul>
            </div>
            <div className="col-lg-2 f-info">
              <p className="sec-store">Products</p>
              <ul>
                <li className="foot-info">About Us</li>
                <li className="foot-info">Compare</li>
                <li className="foot-info">Contact Us</li>
                <li className="foot-info">Legal Notice</li>
              </ul>
            </div>
            <div className="col-lg-2 f-info">
              <p className="sec-store">Our company</p>
              <ul>
                <li className="foot-info">Shipping</li>
                <li className="foot-info"> FAQ</li>
                <li className="foot-info"> Delivery</li>
                <li className="foot-info"> T&C</li>
                <li className="foot-info">Legal Notice</li>
              </ul>
            </div>
          </div>
          <div className="row mt-4">
            <span>
              <button className="ft-cbtn">Mobiles :</button>About
              us/Compare/Contact Us/Legal Notice
            </span>
          </div>
          <div className="row mt-2">
            <span>
              <button className="ft-cbtn">Mobile Accessories :</button>About
              us/Compare/Contact Us/Legal Notice
            </span>
            <br />
          </div>
          <div className="row mt-2">
            <span>
              <button className="ft-cbtn">Memory Card :</button>About
              us/Compare/Contact Us/Legal Notice
            </span>
          </div>
          <div className="row copy-right">
            <p>
              Copyright 2024 Degine & Developed By Dreamvessels technology Pvt.
              Ltd. Powered by Krizaar
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
