import React from "react";
import Header from "../header/Header";
import Footer from "../header/Footer";
import { REACT_BASE_PATH } from "../../api";
import axios from "axios";
import { useState } from "react";

const Vendorsignup = () => {
  const [fname, setFname] = useState();
  const [lname, setLname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [vsupplier, setVsupplier] = useState();
  const [ecommerce, setEcommerce] = useState();
  const [eselling, setEselling] = useState();
  const [otp, setOtp] = useState();

  const [showFirst, setShowFirst] = useState(true);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);
  const [showFour, setShowFour] = useState(false);
  const [showFive, setShowFive] = useState(false);

  const [vendor, setVendor] = useState({});
  console.log(vendor, "------------------------------");

  const submitData = () => {
    axios
      .post(`${REACT_BASE_PATH}/auth/vendor/registration`, {
        vendor: {
          vendor_contact: email,
          password: password,
          first_name: fname,
          last_name: lname,
          vendor_supplier_type: 0,
          vendor_ecommerce_type: 0,
          product_selling_type: 0,
        },
      })
      .then((resp) => {
        console.log(resp);
        setVendor(resp.data);
      })
      .catch((err) => {
        console.log("error");
      });
  };

  const submitSupplier = () => {
    axios
      .post(`${REACT_BASE_PATH}/auth/vendor/registration`, {
        vendor: {
          vendor_contact: email,
          password: password,
          first_name: fname,
          last_name: lname,
          vendor_supplier_type: 0,
          vendor_ecommerce_type: "",
          product_selling_type: 0,
        },
      })
      .then((resp) => {
        console.log(resp);
        setVendor(resp.data);
      })
      .catch((err) => {
        console.log("error");
      });
  };

  const verifyEmail = () => {
    console.log("chali api");
    if (otp) {
      axios
        .post(`${REACT_BASE_PATH}/auth/vendor/otpvarification`, {
          vendor: {
            vendor_contact: vendor.mail,
            vendorid: vendor.vendorid,
            otp: otp,
          },
        })
        .then((resp) => {
          console.log(resp);
          setVendor(resp.data);
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
                    <h5 className="mb-4">Vendor Sign up</h5>
                    <label htmlFor="name">First Name</label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      value={fname}
                      onChange={(e) => setFname(e.target.value)}
                      className="email-input"
                      required
                    />
                    <label htmlFor="email">Last Name</label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      value={lname}
                      onChange={(e) => setLname(e.target.value)}
                      className="email-input"
                      required
                    />
                    <label htmlFor="email">Email/Phone No.</label>
                    <input
                      type="mail"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="email-input"
                      required
                    />

                    <label htmlFor="email">Password</label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="email-input"
                      required
                    />
                    <br />
                    <span>Signup As -</span>
                    <div className="vendor-btn">
                      <button className="radio-box">
                        <input
                          type="radio"
                          name="vsupplier"
                          value="retailor"
                          checked={vsupplier === "retailor"}
                          onChange={(e) => setVsupplier(e.target.value)}
                          onClick={() => {
                            setShowFirst(false);
                            setShowSecond(true);
                          }}
                        />
                        Retailor E-commerce
                      </button>
                      <button className="radio-box">
                        <input
                          type="radio"
                          name="vsupplier"
                          value="supplier"
                          checked={vsupplier === "supplier"}
                          onChange={(e) => setVsupplier(e.target.value)}
                          onClick={() => {
                            setShowFirst(false);
                            setShowFour(true);
                          }}
                        />
                        Wholesale/Supplier
                        <br />
                        /Manufacturer
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {showSecond && (
            <div className="row">
              <div className="signin-box">
                <div className="signin-box1">
                  <h4 className="text-center mt-4">Krizaar.com</h4>
                  <div className="sign-form">
                    <div className="vendor-btn">
                      <button className="radio-box">
                        <input
                          type="radio"
                          name="vecommerce"
                          value="eindependent"
                          checked={ecommerce === "eindependent"}
                          onChange={(e) => setEcommerce(e.target.value)}
                          onClick={() => {
                            setShowFirst(false);
                            setShowSecond(true);
                            setShowThird(true);
                          }}
                        />
                        <br />
                        E-commerce Independent
                      </button>
                      <button className="radio-box">
                        <input
                          type="radio"
                          name="vecommerce"
                          value="ekrizaar"
                          checked={ecommerce === "ekrizaar"}
                          onChange={(e) => setEcommerce(e.target.value)}
                          onClick={() => {
                            setShowFirst(false);
                            setShowSecond(true);
                            setShowThird(true);
                          }}
                        />
                        <br />
                        E-commerce Krizaar
                      </button>
                    </div>
                    {showThird && (
                      <div className="signin-box1">
                        <label>
                          <input
                            type="checkbox"
                            name="prodselling"
                            value="sfbm"
                            checked={eselling === "sfbm"}
                            onChange={(e) => setEselling(e.target.value)}
                          />
                          FBM
                        </label>
                        <label>
                          <input
                            type="checkbox"
                            name="prodselling"
                            value="pfbk"
                            checked={eselling === "pfbk"}
                            onChange={(e) => setEselling(e.target.value)}
                          />
                          FBK
                        </label>
                      </div>
                    )}

                    <div className="sbtn-box mt-4">
                      <button
                        className="sub-btn"
                        onClick={() => {
                          setShowFirst(false);
                          setShowSecond(false);
                          setShowFive(true);
                          submitData();
                        }}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {showFour && (
            <div className="row">
              <div className="signin-box">
                <div className="signin-box1">
                  <h4 className="text-center mt-4">Krizaar.com</h4>
                  <div className="sign-form">
                    <div className="signin-box1">
                      <label>
                        <input
                          type="checkbox"
                          name="prodselling"
                          value="sfbm"
                          checked={eselling === "sfbm"}
                          onChange={(e) => setEselling(e.target.value)}
                        />
                        FBM
                      </label>
                      <label>
                        <input
                          type="checkbox"
                          name="prodselling"
                          value="pfbk"
                          checked={eselling === "pfbk"}
                          onChange={(e) => setEselling(e.target.value)}
                        />
                        FBK
                      </label>
                    </div>

                    <div className="sbtn-box mt-4">
                      <button
                        className="sub-btn"
                        onClick={() => {
                          setShowFirst(false);
                          setShowFour(false);
                          setShowFive(true);
                          submitSupplier();
                        }}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {showFive && (
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

export default Vendorsignup;
