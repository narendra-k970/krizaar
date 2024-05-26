import React, { useState } from "react";
import Profile from "../componenth/profile/Profile";
import Header from "../componenth/header/Header";
import Footer from "../componenth/header/Footer";
import { REACT_BASE_PATH } from "../api";
import axios from "axios";

const EditAddress = () => {
  const myToken = localStorage.getItem("token");

  const userData = JSON.parse(myToken);

  const [fullName, setFullName] = useState();
  const [mobno, setMobno] = useState();
  const [zipcode, setZipcode] = useState();
  const [locality, setLocality] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [country, setCountry] = useState();
  const [landmark, setLandmark] = useState();
  const [altmobno, setAltmobno] = useState();
  const [addtype, setAddtype] = useState();

  const submitData = () => {
    const requestData = {
      address: {
        user_id: userData.userid,
        full_name: fullName,
        pin_code: zipcode,
        locality: locality,
        address_detail: address,
        country: country,
        state: state,
        city: city,
        landmark: landmark,
        alternate_phone_no: altmobno,
        address_type: addtype,
      },
    };
    console.log(requestData, "-----------------------");
    const headers = {
      Authorization: `Bearer ${userData.accessToken}`,
      "Content-Type": "application/json",
    };
    // console.log(headers);
    axios
      .post(`${REACT_BASE_PATH}/auth/user/create/address`, requestData, {
        headers,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Errorrrrr:", error);
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
              <p>Account Profile Information</p>
              <div className="form-border">
                <button className="addr-btn">
                  <i class="fa fa-map-marker"></i>Current Location
                </button>
                <div className="form-row">
                  <span className="inp-form">
                    <label htmlFor="input1">Full Name</label>
                    <input
                      type="text"
                      id="input1"
                      name="input1"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
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
                <div className="form-row">
                  <span className="inp-form">
                    <label htmlFor="input1">Zip Code</label>
                    <input
                      type="text"
                      id="input1"
                      name="input1"
                      value={zipcode}
                      onChange={(e) => setZipcode(e.target.value)}
                    />
                  </span>
                  <span className="inp-form">
                    <label htmlFor="input2">Locality</label>
                    <input
                      type="text"
                      id="input2"
                      name="input2"
                      value={locality}
                      onChange={(e) => setLocality(e.target.value)}
                    />
                  </span>
                </div>
                <div className="form-row">
                  <label htmlFor="input1">Address</label>
                  <textarea
                    type="textarea"
                    id="input1"
                    name="input1"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <div className="form-row">
                  <span className="inp-form">
                    <label htmlFor="input1">City/Town/ District</label>
                    <input
                      type="text"
                      id="input1"
                      name="input1"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </span>
                  <span className="inp-form">
                    <label htmlFor="input2">State</label>
                    <input
                      type="text"
                      id="input2"
                      name="input2"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                    />
                  </span>
                </div>
                <div className="form-row">
                  <span className="inp-form">
                    <label htmlFor="input1">Landmark (Optional)</label>
                    <input
                      type="text"
                      id="input1"
                      name="input1"
                      value={landmark}
                      onChange={(e) => setLandmark(e.target.value)}
                    />
                  </span>
                  <span className="inp-form">
                    <label htmlFor="input2">Alternate Phone No.</label>
                    <input
                      type="text"
                      id="input2"
                      name="input2"
                      value={altmobno}
                      onChange={(e) => setAltmobno(e.target.value)}
                    />
                  </span>
                </div>
                <div className="form-row">
                  <span className="inp-form">
                    <label htmlFor="input1">Country</label>
                    <input
                      type="text"
                      id="input1"
                      name="input1"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                    />
                  </span>
                </div>
                <p className="addr-typ">Address Type</p>
                <label className="radio-btn">
                  <input
                    type="radio"
                    name="address"
                    value="home"
                    checked={addtype === "home"}
                    onChange={(e) => setAddtype(e.target.value)}
                  />
                  Home
                </label>
                <label className="radio-btn ms-4">
                  <input
                    type="radio"
                    name="address"
                    value="office"
                    checked={addtype === "office"}
                    onChange={(e) => setAddtype(e.target.value)}
                  />
                  Office
                </label>
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

export default EditAddress;
