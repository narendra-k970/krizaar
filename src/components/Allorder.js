import React from "react";
import Header from "../componenth/header/Header";
import Footer from "../componenth/header/Footer";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import img1 from "../img/bagpack.png";

const Allorder = () => {
  return (
    <>
      <Header />
      <section className="">
        <div className="container my-4">
          <div className="row">
            <p>Account {">"} My Order</p>
            <div className="my-order">
              <h4>My Order</h4>
              <div className="search-container">
                <input type="search" placeholder="Search all order" />
              </div>
            </div>
          </div>
          <div className="row my-5">
              <Tabs>
                <TabList>
                  <Tab>All Order</Tab>
                  <Tab>Cancelled Order</Tab>
                </TabList>
                <div className="o-box">
                <TabPanel>
                  <div>
                    <div className="row o-top">
                      <div className="col-lg-2">
                        <span>
                          Order Placed
                          <br />
                          2, january, 2024
                        </span>
                      </div>
                      <div className="col-lg-2">
                        <span>
                          Amount
                          <br />$ 52
                        </span>
                      </div>
                      <div className="col-lg-2">
                        <span>
                          Shiped to
                          <br />
                          Neeraj
                        </span>
                      </div>
                      <div className="col-lg-6 o-id">
                        <span>
                          Order id
                          <br />
                          #1234
                        </span>
                      </div>
                    </div>
                    <div className="row">
                      <p>Status</p>
                      <div className="col-lg-4">
                        <div className="order-img">
                          <img src={img1} alt="bag" className="img-fluid" />
                          <div className="o-desc">
                          <p>
                            Backpacks
                            <br />
                            2, january, 2024
                          </p>
                          </div>      
                        </div>
                      </div>
                      <div className="col-lg-8">
                        <div className="o-btns">
                        <div>
                          <button className="order-btn">Track</button>
                          <br />
                          <button className="order-btn">
                            Return / Replace
                          </button>
                          <br />
                          <button className="order-btn">Product Review</button>
                          <br />
                          <button className="order-btn">Seller Review </button>
                          <br />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                <div>
                    <div className="row o-top">
                      <div className="col-lg-2">
                        <span>
                          Order Placed
                          <br />
                          2, january, 2024
                        </span>
                      </div>
                      <div className="col-lg-2">
                        <span>
                          Amount
                          <br />$ 52
                        </span>
                      </div>
                      <div className="col-lg-2">
                        <span>
                          Shiped to
                          <br />
                          Neeraj
                        </span>
                      </div>
                      <div className="col-lg-6 o-id">
                        <span>
                          Order id
                          <br />
                          #1234
                        </span>
                      </div>
                    </div>
                    <div className="row">
                      <p>Status</p>
                      <div className="col-lg-4">
                        <div className="order-img">
                          <img src={img1} alt="bag" className="img-fluid" />
                          <div className="o-desc">
                          <p>
                            Backpacks
                            <br />
                            2, january, 2024
                          </p>
                          </div>      
                        </div>
                      </div>
                      <div className="col-lg-8">
                        <div className="o-btns">
                        <div>
                          <button className="order-btn">Track</button>
                          <br />
                          <button className="order-btn">
                            Return / Replace
                          </button>
                          <br />
                          <button className="order-btn">Product Review</button>
                          <br />
                          <button className="order-btn">Seller Review </button>
                          <br />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>
                </div>
              </Tabs>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Allorder;
