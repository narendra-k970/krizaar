import React, { useState } from "react";
import Header from "../header/Header";
import Footer from "../header/Footer";
import axios from "axios";
import { REACT_BASE_PATH } from "../../api";

const Forgotpassword = () => {
  const [email, setEmail] = useState();

  const submitData = () => {
    axios
      .post(`${REACT_BASE_PATH}/auth/user/forget-password`, {
        email: email,
      })

      .then((resp) => {
        console.log(resp);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  return (
    <>
      <Header />
      <section>
        <div className="container my-5">
          <div className="row">
            <div className="signin-box">
              <div className="signin-box1">
                <h4 className="text-center mt-5">Krizaar.com</h4>
                <div className="sign-form">
                  <h5 className="mb-4">Forgotpassword</h5>
                  <p>Give your email to reset password</p>
                  <form>
                    <label htmlFor="email">Email</label>
                    <br />
                    <input
                      type="text"
                      id="password"
                      name="password"
                      className="email-input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <hr className="mt-4" />
            <div className="amazon-box">
              <span className="amazon">or</span>
            </div>
            <div className="create-acc-box">
              <button className="create-acc">Get an OTP on your Phone</button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Forgotpassword;
