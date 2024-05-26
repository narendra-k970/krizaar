import React from "react";
import Popup from "./Popup";
import "../dashboard.css";

const Productcategories = () => {
  return (
    <>
      <div className="m-2 mt-24 md:m-10 p-2 md:p-10 bg-white rounded-3xl comp-bg">
        <section>
          <div className="container">
            <div className="row">
              <div className="cat-top">
                <div>All Categories</div>
                <div>
                  <Popup />
                </div>
              </div>
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Mobiles & Computers
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <div className="row cat-row">
                        <div className="cat-icond">
                          <div>
                            <i className="fas fa-ellipsis-v"></i> Computers &
                            Accessories
                          </div>
                          <div>
                            <span className="category-icon">
                              <i className="fa fa-eye"></i>
                            </span>
                            <span className="category-icon">
                              <i className="fa fa-edit"></i>
                            </span>
                            <span className="category-icon">
                              <i className="fa fa-trash"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="row cat-row ms-4">
                        <div className="cat-icond">
                          <div>
                            <i className="fas fa-ellipsis-v"></i> All Computer &
                            Accessories
                          </div>
                          <div>
                            <span className="category-icon">
                              <i className="fa fa-eye"></i>
                            </span>
                            <span className="category-icon">
                              <i className="fa fa-edit"></i>
                            </span>
                            <span className="category-icon">
                              <i className="fa fa-trash"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Fashion
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <div className="row cat-row">
                        <div className="cat-icond">
                          <div>
                            <i className="fas fa-ellipsis-v"></i> Bags,
                            Suitcases & Luggage
                          </div>
                          <div>
                            <span className="category-icon">
                              <i className="fa fa-eye"></i>
                            </span>
                            <span className="category-icon">
                              <i className="fa fa-edit"></i>
                            </span>
                            <span className="category-icon">
                              <i className="fa fa-trash"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="row cat-row ms-4">
                        <div className="cat-icond">
                          <div>
                            <i className="fas fa-ellipsis-v"></i> All
                          </div>
                          <div>
                            <span className="category-icon">
                              <i className="fa fa-eye"></i>
                            </span>
                            <span className="category-icon">
                              <i className="fa fa-edit"></i>
                            </span>
                            <span className="category-icon">
                              <i className="fa fa-trash"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Accordion Item #3
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <strong>This is the third item's accordion body.</strong>{" "}
                      It is hidden by default, until the collapse plugin adds
                      the appropriate classNamees that we use to style each
                      element. These classNamees control the overall appearance,
                      as well as the showing and hiding via CSS transitions. You
                      can modify any of this with custom CSS or overriding our
                      default variables. It's also worth noting that just about
                      any HTML can go within the <code>.accordion-body</code>,
                      though the transition does limit overflow.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Productcategories;
