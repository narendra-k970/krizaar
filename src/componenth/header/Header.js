import React from "react";
import envalope from "../img/envelope.png";
import phone from "../img/phone-alt.png";
import heart from "../img/heart.png";
import download from "../img/download.png";
import logo from "../img/krizaar-logo.png";
import Geolocation from "../common/Geolocation";
import map from "../img/map-marker-alt.png";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Logging out...");

    // Clear all localStorage data
    localStorage.clear();

    // Check localStorage to ensure it's cleared
    console.log("localStorage after clear:", localStorage);

    // Redirect to the login page
    navigate("/signin");
    console.log("Redirecting to /signin");
  };

  return (
    <>
      <section className="top">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <span className="info">
                <img src={envalope} alt="envalope" className="header-icon" />
                info@krizaar.com
              </span>
              <span className="info">
                <img src={phone} alt="envalope" className="header-icon" />
                +910123456789
              </span>
            </div>
            <div className="col-lg-6 header-sec">
              <span className="info">
                <img src={heart} alt="envalope" className="header-icon" />
                Whishlist
              </span>
              <span className="info">
                <img src={download} alt="envalope" className="header-icon" />
                Download App
              </span>
              <span className="info">Customer Services</span>
              <span className="info">About Us</span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-fluid">
          <div className="row header-sec2">
            <div className="col-lg-2">
              <img src={logo} alt="logo" className="logo" />
            </div>
            <div className="col-lg-2 res-box">
              <div className="map-box">
                <img src={map} alt="map" className="map-img" />
                <Geolocation />
              </div>
            </div>
            <div className="col-lg-4 res-box">
              <div className="search-container">
                <select className="category-dropdown">
                  <option value="all">All</option>
                  <option value="category1">Category 1</option>
                  <option value="category2">Category 2</option>
                  <option value="category3">Category 3</option>
                </select>
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search Krizaar.com"
                />
                <button className="search-button">Search</button>
              </div>
            </div>
            <div className="col-lg-2 res-box">
              <div className="dropdown drop-login">
                <button
                  className="btn btn-secondary dropdown-toggle drop-btn"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FaUserCircle />
                  Login/Signup
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item" to="/signup">
                      Signup
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/signin">
                      Login
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="#">
                      <button onClick={handleLogout}>Logout</button>
                    </NavLink>
                  </li>
                </ul>
              </div>
              <span>
                <i className="fa fa-shopping-cart icon-img1 ms-2"></i>
              </span>
              <span>
                <i className="fa fa-exchange icon-img1 ms-2"></i>
              </span>
            </div>
            <div className="col-lg-2 be-seller">
              <button className="seller-btn">Become A Seller</button>
            </div>
          </div>
        </div>
      </section>

      <section className="menu">
        <div className="container-fluid">
          <div className="row menu-bg">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid">
                <button
                  className="navbar-toggler toggle-bg"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink
                        className="nav-link active"
                        aria-current="page"
                        to="#"
                      >
                        All categories
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="#">
                        Best Seller
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="#">
                        Today Deal
                      </NavLink>
                    </li>
                    <li className="nav-item dropdown">
                      <NavLink
                        className="nav-link dropdown-toggle"
                        to="#"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Electronics
                      </NavLink>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <li>
                          <NavLink className="dropdown-item" to="#">
                            Action
                          </NavLink>
                        </li>
                        <li>
                          <NavLink className="dropdown-item" to="#">
                            Another action
                          </NavLink>
                        </li>
                        <li>
                          <NavLink className="dropdown-item" to="#">
                            Something else here
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown">
                      <NavLink
                        className="nav-link dropdown-toggle"
                        to="#"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Fashion
                      </NavLink>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <li>
                          <NavLink className="dropdown-item" to="#">
                            Action
                          </NavLink>
                        </li>
                        <li>
                          <NavLink className="dropdown-item" to="#">
                            Another action
                          </NavLink>
                        </li>
                        <li>
                          <NavLink className="dropdown-item" to="#">
                            Something else here
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="#">
                        Home & Furniture
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="#">
                        Appliances
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="#">
                        More
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
