import React from "react";
import Header from "../componenth/header/Header";
import Footer from "../componenth/header/Footer";
import img1 from "../img/caret-down.png";

const Payment = () => {
  return (
    <>
      <Header />
      <section>
        <div className="container my-5">
          <div className="row mt-5">
            <div className="col-lg-6">
              <p>Account {">"} Payment</p>
              <h5>Saved Credit and Debit Cards</h5>
              <div className="my-3">
                <p className="d-inline-flex gap-1">
                  <a
                    className="btn tog-btn"
                    data-bs-toggle="collapse"
                    href="#multiCollapseExample1"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample1"
                  >
                    <span className="debit-card">visa</span> SBI Credit card
                    ending in 1234{" "}
                    <img src={img1} alt="dropdown" className="down-img" />
                  </a>
                </p>
                <div className="row">
                  <div className="col">
                    <div
                      className="collapse multi-collapse"
                      id="multiCollapseExample1"
                    >
                      <div className="card card-body">
                        Some placeholder content for the first collapse
                        component of this multi-collapse example. This panel is
                        hidden by default
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-3">
                <p className="d-inline-flex gap-1">
                  <a
                    className="btn tog-btn"
                    data-bs-toggle="collapse"
                    href="#multiCollapseExample2"
                    role="button"
                    aria-expanded="false"
                    aria-controls="multiCollapseExample2"
                  >
                    <span className="debit-card">visa</span> SBI Credit card
                    ending in 1234
                    <img src={img1} alt="dropdown" className="down-img" />
                  </a>
                </p>
                <div className="row">
                  <div className="col">
                    <div
                      className="collapse multi-collapse"
                      id="multiCollapseExample2"
                    >
                      <div className="card card-body">
                        Some placeholder content for the first collapse
                        component of this multi-collapse example. This panel is
                        hidden by default
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bill-box">
                <p>HDF Credit card ending in 1234</p>
                <div className="bill-det">
                  <div>
                    <span>Name </span>
                    <br />
                    <span>Neeraj</span>
                  </div>
                  <div>
                    <span>Billing Address</span>
                    <br />
                    <span>Neeraj</span>
                  </div>
                </div>
                <div className="bill-btn">
                  <button className="bill-edit">Edit</button>
                  <button className="bill-edit">Remove</button>
                </div>
              </div>
            </div>
            <div className="col-lg-6"></div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Payment;
