import React, { useState } from "react";
import Header from "../componenth/header/Header";
import Footer from "../componenth/header/Footer";
import Profile from "../componenth/profile/Profile";
import { REACT_BASE_PATH } from "../api";
import axios from "axios";

const ProfileInfo = () => {
  const myToken = localStorage.getItem("token");

  const userData = JSON.parse(myToken);

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [mobno, setMobno] = useState();
  const [dob, setDob] = useState();
  const [gender, setGender] = useState("");

  const submitData = () => {
    const requestData = {
      user: {
        id: userData.userid,
        first_name: firstName,
        last_name: lastName,
        dob: dob,
        gender: gender,
      },
    };

    const headers = {
      Authorization: `Bearer ${userData.accessToken}`,
      "Content-Type": "application/json",
    };
    console.log(headers);
    axios
      .post(`${REACT_BASE_PATH}/auth/user/profile`, requestData, { headers })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <Header />
      <section>
        <div className="container my-5">
          <div className="row">
            <div className="col-lg-3">
              <Profile />
            </div>
            <div className="col-lg-9">
              <div>
                <span>Account {">"} Profile Information</span>
                <div className="form-row">
                  <span className="inp-form">
                    <label htmlFor="input1">First Name</label>
                    <input
                      type="text"
                      id="input1"
                      name="input1"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </span>
                  <span className="inp-form">
                    <label htmlFor="input2">Last Name</label>
                    <input
                      type="text"
                      id="input2"
                      name="input2"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </span>
                </div>
                <div className="form-row">
                  <span className="inp-form">
                    <label htmlFor="input1">Email Address</label>
                    <input
                      type="text"
                      id="input1"
                      name="input1"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </span>
                  <span className="inp-form">
                    <label htmlFor="input2">Mobile no.</label>
                    <input
                      type="text"
                      id="input2"
                      name="input2"
                      value={mobno}
                      onChange={(e) => setMobno(e.target.value)}
                    />
                  </span>
                </div>
                <div class="form-row">
                  <span className="inp-form">
                    <label htmlFor="input1">DOB</label>
                    <input
                      type="text"
                      id="input1"
                      name="input1"
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                    />
                  </span>
                </div>
                <div>
                  <button className="male-btn">
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      checked={gender === "male"}
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <br />
                    Male
                  </button>
                  <button className="female-btn">
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      checked={gender === "female"}
                      onChange={(e) => setGender(e.target.value)}
                    />
                    <br />
                    Female
                  </button>
                </div>
                <p className="mt-3">
                  In order to access some features of the Service, you will have
                  to fill out your account details. You may use it for buying
                  things also for shipping process for more details
                </p>
                <div className="form-btn">
                  <button
                    className="f-next"
                    type="submit"
                    onClick={() => {
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
      </section>
      <Footer />
    </>
  );
};

export default ProfileInfo;
