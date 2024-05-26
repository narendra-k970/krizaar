import React from "react";
import Header from "../componenth/header/Header";
import Footer from "../componenth/header/Footer";
import img1 from "../img/bagpack.png";
import Star from "../componenth/Star"

const Whishlist = () => {
  return (
    <>
      <Header />
      <section>
        <div className="container">
          <div className="row">
            <p>Account {">"} Wishlist</p>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <h5>My Wishlist</h5>
            </div>
            <div className="col-lg-6">
              <div className="filter-box">
                <div className="search-container">
                  <input type="search" placeholder="Search  this list" />
                </div>
                <div>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Filter & short
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                </div>
              </div>
            </div>
          </div>
          <hr className="hor-line" />
            <div className="row">
              <div className="col-lg-4">
                <div className="order-img">
                  <img src={img1} alt="bag" className="img-fluid" />
                  <div className="o-desc">
                    <p>
                      Backpacks
                      <br />
                      by HUGGI
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="o-btns">
                  <div>
                    <button className="order-btn1">Add to Cart</button>
                    <br />
                    <button className="order-btn1">Share</button>
                    <br />
                    <button className="order-btn1">Delete</button>
                    <br />
                  </div>
                </div>
              </div>
            </div>
            <hr className="hor-line" />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Whishlist;
