import React from "react";
import Header from "../header/Header";
import Footer from "../header/Footer";

const Resetpassword = () => {
  const submitData = () => {
    console.log(submitData);
  };
  return (
    <>
      <Header />
      <section>
        <div className="container">
          <div className="row">
            <div className="signin-box">
              <div className="signin-box1">
                <h4 className="text-center mt-5">Krizaar.com</h4>
                <div className="sign-form">
                  <h5 className="mb-4">Resetpassword</h5>
                  <p>Give your new password</p>
                  <form>
                    <label htmlFor="email">Password</label>
                    <br />
                    <input
                      type="text"
                      id="password"
                      name="password"
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
                        Submit
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

export default Resetpassword;
