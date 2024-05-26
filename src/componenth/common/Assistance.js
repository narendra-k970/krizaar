import React from "react";

const Assistance = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="signin-box">
              <div className="signin-box1">
                <h4 className="text-center mt-4">Krizaar.com</h4>
                <div className="sign-form">
                  <h5 className="mb-4">Password assistance</h5>
                  <p>
                    <b>IN +917042469640 Change</b>
                    <br />
                    Enter the email address or mobile phone number associated
                    with your Krizaar account.
                  </p>
                  <form>
                    <label for="email">Email or Phone Number</label>
                    <br />
                    <input
                      type="text"
                      id="otp"
                      name="otp"
                      className="email-input"
                      placeholder=""
                      required
                    />
                    <br />
                    <br />
                    <div className="sbtn-box">
                      <input
                        type="submit"
                        value="Continue"
                        className="sub-btn"
                      />
                    </div>
                    <p className="mt-3">
                      Has your email address or mobile phone number changed?
                    </p>
                  </form>
                  <p>
                    If you no longer use the e-mail address associated with your
                    Amazon account, you may contact Customer Service for help
                    restoring access to your account.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Assistance;
