import React from "react";
import { NavLink } from "react-router-dom";

const Profile = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div
              style={{
                display: "flex",
                background: "#D9D9D9",
                color: "#000",
                padding: "5px",
                borderRadius: "5px",
              }}
            >
              <i className="fa fa-user-circle prof-icon"></i>
              <span className="ps-3">
                Hello <br />
                Khushi sahu
              </span>
            </div>

            <div
              style={{
                display: "flex",
                background: "#D9D9D9",
                color: "#000",
                padding: "5px",
                borderRadius: "5px",
                marginTop: "10px",
              }}
            >
              <i className="fas fa-user-alt prof-icon"></i>
              <div className="dropdown">
                <NavLink
                  className="prof-info"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Account Details
                </NavLink>

                <ul class="dropdown-menu">
                  <li>
                    <NavLink class="dropdown-item" href="#">
                      Profile information
                    </NavLink>
                  </li>
                  <li>
                    <NavLink class="dropdown-item" href="#">
                      Manage Address
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
