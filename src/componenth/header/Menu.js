import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                All categories
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <NavLink className="dropdown-item" to="#">
                  Hello Sign In
                </NavLink>
                <NavLink className="dropdown-item" to="#">
                  Mobile
                </NavLink>
                <NavLink className="dropdown-item" to="#">
                  Kids Fashion
                </NavLink>
              </div>
            </div>
            <navLink>Best Seller</navLink>
            <navLink>Today Deal</navLink>
            <navLink>Home & Furniture</navLink>
            <navLink>Appliances</navLink>
            <navLink>More</navLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default Menu;
