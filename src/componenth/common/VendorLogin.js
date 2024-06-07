import React from "react";
import Header from "../header/Header";
import Footer from "../header/Footer";
import { useState } from "react";
import { REACT_BASE_PATH } from "../../api";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const VendorLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submitData = async () => {
    try {
      const response = await axios.post(
        `${REACT_BASE_PATH}/auth/vendor/login`,
        {
          vendor: {
            vendor_contact: email,
            password: password,
          },
        }
      );
      navigate("/dashboard");

      console.log(response.data, "Login Succesfully");
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  return (
    <>
      <Header />
      <section>
        <div className="container">
          <div className="row mb-5">
            <div className="signin-box">
              <div className="signin-box1">
                <h4 className="text-center mt-5">Krizaar.com</h4>
                <div className="sign-form">
                  <h5 className="mb-4">Signin</h5>
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    id="username"
                    name="password"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="email-input"
                    placeholder=""
                    required
                  />
                  <label htmlFor="email">Password</label>
                  <input
                    type="text"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="email-input"
                    placeholder=""
                    required
                  />
                  <br />
                  <br />
                  <div className="sbtn-box">
                    <button
                      type="submit"
                      className="sub-btn"
                      onClick={() => {
                        submitData();
                      }}
                    >
                      Login
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <hr className="mt-4" />
            <div className="amazon-box">
              <span className="amazon">or</span>
            </div>
            <div className="create-acc-box">
              <NavLink to="/vendorsignup">
                <button className="create-acc">
                  If You have not Signup. Plz Signup Before
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default VendorLogin;
