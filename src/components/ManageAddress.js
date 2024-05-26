import React from "react";
import Profile from "../componenth/profile/Profile";
import Header from "../componenth/header/Header";
import Footer from "../componenth/header/Footer";
import { NavLink } from "react-router-dom";

const ManageAddress = () => {
  return (
    <>
      <Header />
      <section>
        <div className="container my-4">
          <div className="row">
            <div className="col-lg-3">
              <Profile />
            </div>
            <div className="col-lg-9">
              <p>Account {">"}Profile Information</p>
              <button className="addr-btn">
                <i className="fa fa-plus"></i>Add New
              </button>
              <div className="form-row">
                <label for="input1">Home</label>
                <textarea type="textarea" id="input1" name="input1" />
              </div>
              <div className="form-row">
                <label for="input1">Office</label>
                <textarea type="textarea" id="input1" name="input1" />
              </div>
              <p>
                In order to access some features of the Service, you will have
                to fill out your account details. You may use it for buying
                things also for shipping process for more details{" "}
              </p>
              <div className="form-btn">
                <NavLink to="/userprofile">
                  <button className="f-save">Back</button>
                </NavLink>
                <NavLink to="/editaddress">
                  <button className="f-next">Next</button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ManageAddress;
