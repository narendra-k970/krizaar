import React from "react";
import { useState } from "react";
import axios from "axios";
import Header from "../header/Header";
import Footer from "../header/Footer";
import { REACT_BASE_PATH } from "../../api";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [showFirst, setShowFirst] = useState(true);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [otp, setOtp] = useState();

  const [user, setUser] = useState({});

  const submitData = () => {
    if (email && password) {
      axios
        .post(`${REACT_BASE_PATH}/auth/user/registration`, {
          user: {
            user_contact: email,
            password: password,
          },
        })
        .then((resp) => {
          // console.log(resp);
          setUser(resp.data);
        })
        .catch((err) => {
          console.log("error");
        });
    }
  };

  const verifyEmail = () => {
    console.log("chali api");
    if (otp) {
      axios
        .post(`${REACT_BASE_PATH}/auth/user/otpvarification`, {
          user: {
            user_contact: user.mail,
            userId: user.userId,
            otp: otp,
          },
        })
        .then((resp) => {
          // console.log(resp);
          if (resp.status === 200) {
            console.log(user);
            axios
              .post(`${REACT_BASE_PATH}/auth/user/login`, {
                user: {
                  user_contact: email,
                  password: password,
                },
              })
              .then((resp) => {
                if (resp.status === 200) {
                  console.log(resp.data, "data aya");
                  const tokenString = JSON.stringify(resp.data);
                  localStorage.setItem("token", tokenString);
                  navigate("/");
                }
              })
              .catch((err) => {
                console.log("error");
              });
          }
        })
        .catch((err) => {
          console.log("error");
        });
    }
  };

  return (
    <>
      <Header />
      <section>
        <div className="container my-5">
          {showFirst && (
            <div className="row">
              <div className="signin-box">
                <div className="signin-box1">
                  <h4 className="text-center mt-4">Krizaar.com</h4>
                  <div className="sign-form">
                    <h5 className="mb-4">Sign up</h5>
                    <label htmlFor="email">Email or Phone Number</label>
                    <br />
                    <input
                      type="text"
                      id="email"
                      name="email"
                      className="email-input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <br />
                    <br />
                    <div className="sbtn-box">
                      <button
                        onClick={() => {
                          setShowFirst(false);
                          setShowSecond(true);
                          setShowThird(false);
                        }}
                        className="sub-btn"
                      >
                        continue
                      </button>
                    </div>
                    <p className="mt-4">
                      By continuing, you agree to krizaar's Conditions of
                      Use and Privacy Notice.
                    </p>
                    <span>
                      <i className="fa fa-caret-right"></i> Need Help
                    </span>
                    <p className="mt-3">
                      <b>Buying for work?</b>
                      <br />
                      Shop on Krizaar Business
                    </p>
                  </div>
                </div>
              </div>
              <hr className="mt-4" />
              <div className="amazon-box">
                <span className="amazon">New to Amazon?</span>
              </div>
              <div className="create-acc-box">
                <button className="create-acc">
                  Create your Krizaar account
                </button>
              </div>
            </div>
          )}

          {showSecond && (
            <div className="row">
              <div className="signin-box">
                <div className="signin-box1">
                  <h4 className="text-center mt-5">Krizaar.com</h4>
                  <div className="sign-form">
                    <h5 className="mb-4">Sign in</h5>
                    <label htmlFor="email">Password</label>
                    <br />
                    <input
                      type="text"
                      id="password"
                      name="password"
                      className="email-input"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <br />
                    <br />
                    <div className="sbtn-box">
                      <button
                        onClick={() => {
                          setShowFirst(false);
                          setShowSecond(false);
                          setShowThird(true);
                          submitData();
                        }}
                        className="sub-btn"
                      >
                        Submit
                      </button>
                    </div>
                    <label htmlFor="agree" className="mt-4">
                      <input type="checkbox" id="agree" name="agree" /> I agree
                      to the terms and conditions
                    </label>
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
          )}

          {showThird && (
            <div className="row">
              <div className="signin-box">
                <div className="signin-box1">
                  <h4 className="text-center mt-4">Krizaar.com</h4>
                  <div className="sign-form">
                    <h5 className="mb-4">Authentication required</h5>
                    <p>
                      <b>IN +917042469640 Change</b>
                      <br />
                      We’ve sent a One Time Password (OTP) to the mobile number
                      above. Please enter it to complete verification
                    </p>
                    <label htmlFor="email">Enter OTP</label>
                    <br />
                    <input
                      type="text"
                      id="otp"
                      name="otp"
                      className="email-input"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      required
                    />
                    <br />
                    <br />
                    <div className="sbtn-box">
                      <button
                        onClick={() => {
                          verifyEmail();
                        }}
                        className="sub-btn"
                      >
                        Verify
                      </button>
                    </div>
                    <p className="resend-otp">Resend OTP</p>
                  </div>
                </div>
              </div>
              <hr className="mt-4" />
              <div className="amazon-box">
                <span className="amazon">or</span>
              </div>
              <div className="create-acc-box">
                <button className="create-acc">
                  Sign in with your Password
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Signup;
