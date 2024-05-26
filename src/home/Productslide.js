import React from "react";
import radio from "../img/radio.png";
import icon1 from "../img/clock.png";
import icon2 from "../img/heart-1.png";
import icon3 from "../img/compare.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import product1 from "../img/image-8.png";
import product2 from "../img/image-18.png";
import product3 from "../img/image-19.png";
import product4 from "../img/image-20.png";
import product5 from "../img/image-21.png";
import product6 from "../img/image-22.png";
import product7 from "../img/image-23.png";
import product8 from "../img/image-24.png";
import product9 from "../img/image-25.png";
import product10 from "../img/image-26.png";
import pgallery1 from "../img/progallery1.png";
import pgallery2 from "../img/progallery2.png";
import pgallery3 from "../img/progallery3.png";
import pgallery4 from "../img/progallery4.png";

const Productslide = () => {
  return (
    <>
      <section>
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-lg-7 weekly-box">
              <div className="pro-slidebox">
                <h3 className="prod-heading">WEEKLY DEAL</h3>
                <hr />
                <div
                  id="carouselExampleIndicators"
                  class="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="0"
                      className="active indicate-btn"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="1"
                      className="indicate-btn"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="2"
                      className="indicate-btn"
                      aria-label="Slide 3"
                    ></button>
                  </div>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="row">
                        <div className="col-lg-5">
                          <img
                            src={radio}
                            className="productslide1"
                            alt="..."
                          />
                        </div>
                        <div className="col-lg-7">
                          <span className="timer">
                            <img src={icon1} alt="clock" />
                            <span className="time-number">
                              200 days : 24H : 45M : 20S
                            </span>
                          </span>
                          <p className="pt-3">
                            <b>
                              Atomik PS30 Pro Wireless Bluetooth 30W Outdoor
                              Party Speaker
                            </b>
                          </p>
                          <span>
                            <span className="rate">36$</span>
                            <span className="prod-price">84$</span>
                          </span>
                          <hr />
                          <p>
                            Outdoor Party Speaker Karaoke Ready Phone Holder All
                            Bluetooth Audio devices supporting.....
                          </p>
                          <span>
                            <button className="addc-btn">
                              <i
                                class="fa fa-shopping-cart"
                                aria-hidden="true"
                              ></i>
                              Add to Cart
                            </button>
                            <span className="prod-icon1">
                              <img
                                src={icon2}
                                alt="whish"
                                className="prod-icon2"
                              />
                            </span>
                            <span className="prod-icon1">
                              <img
                                src={icon3}
                                alt="whish"
                                className="prod-icon2"
                              />
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="row">
                        <div className="col-lg-5">
                          <img
                            src={radio}
                            className="productslide1"
                            alt="..."
                          />
                        </div>
                        <div className="col-lg-7">
                          <span className="timer">
                            <img src={icon1} alt="clock" />
                            <span className="time-number">
                              200 days : 24H : 45M : 20S
                            </span>
                          </span>
                          <p className="pt-3">
                            <b>
                              Atomik PS30 Pro Wireless Bluetooth 30W Outdoor
                              Party Speaker
                            </b>
                          </p>
                          <span>
                            <span className="rate">36$</span>
                            <span className="prod-price">84$</span>
                          </span>
                          <hr />
                          <p>
                            Outdoor Party Speaker Karaoke Ready Phone Holder All
                            Bluetooth Audio devices supporting.....
                          </p>
                          <span>
                            <button className="addc-btn">
                              <i
                                class="fa fa-shopping-cart"
                                aria-hidden="true"
                              ></i>
                              Add to Cart
                            </button>
                            <span className="prod-icon1">
                              <img
                                src={icon2}
                                alt="whish"
                                className="prod-icon2"
                              />
                            </span>
                            <span className="prod-icon1">
                              <img
                                src={icon3}
                                alt="whish"
                                className="prod-icon2"
                              />
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="row">
                        <div className="col-lg-5">
                          <img
                            src={radio}
                            className="productslide1"
                            alt="..."
                          />
                        </div>
                        <div className="col-lg-7">
                          <span className="timer">
                            <img src={icon1} alt="clock" />
                            <span className="time-number">
                              200 days : 24H : 45M : 20S
                            </span>
                          </span>
                          <p className="pt-3">
                            <b>
                              Atomik PS30 Pro Wireless Bluetooth 30W Outdoor
                              Party Speaker
                            </b>
                          </p>
                          <span>
                            <span className="rate">36$</span>
                            <span className="prod-price">84$</span>
                          </span>
                          <hr />
                          <p>
                            Outdoor Party Speaker Karaoke Ready Phone Holder All
                            Bluetooth Audio devices supporting.....
                          </p>
                          <span>
                            <button className="addc-btn">
                              <i
                                class="fa fa-shopping-cart"
                                aria-hidden="true"
                              ></i>{" "}
                              Add to Cart
                            </button>
                            <span className="prod-icon1">
                              <img
                                src={icon2}
                                alt="whish"
                                className="prod-icon2"
                              />
                            </span>
                            <span className="prod-icon1">
                              <img
                                src={icon3}
                                alt="whish"
                                className="prod-icon2"
                              />
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="pro-slidebox">
                <h3 className="prod-heading">ENDING SOON</h3>
                <hr />
                <Swiper
                  spaceBetween={50}
                  slidesPerView={1}
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  navigation
                  // pagination={{ clickable: true }}
                  // scrollbar={{ draggable: true }}
                  // onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log("slide change")}
                >
                  <SwiperSlide>
                    <div className="product-box">
                      <div className="row">
                        <div className="col-lg-5">
                          <img
                            src={radio}
                            className="productslide1"
                            alt="..."
                          />
                        </div>
                        <div className="col-lg-7">
                          <span className="timer">
                            <img src={icon1} alt="clock" />
                            <span className="time-number">
                              200 days : 24H : 45M : 20S
                            </span>
                          </span>
                          <p className="pt-3">
                            <b>
                              Atomik PS30 Pro Wireless Bluetooth 30W Outdoor
                              Party Speaker
                            </b>
                          </p>
                          <span>
                            <span className="rate">36$</span>
                            <span className="prod-price">84$</span>
                          </span>
                          <hr />
                          <p>
                            Outdoor Party Speaker Karaoke Ready Phone Holder All
                            Bluetooth Audio devices supporting.....
                          </p>
                          <span>
                            <button className="addc-btn">
                              <i
                                class="fa fa-shopping-cart"
                                aria-hidden="true"
                              ></i>{" "}
                              Add to Cart
                            </button>
                            <span className="prod-icon1">
                              <img
                                src={icon2}
                                alt="whish"
                                className="prod-icon2"
                              />
                            </span>
                            <span className="prod-icon1">
                              <img
                                src={icon3}
                                alt="whish"
                                className="prod-icon2"
                              />
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="product-box">
                      <div className="row">
                        <div className="col-lg-5">
                          <img
                            src={radio}
                            className="productslide1"
                            alt="..."
                          />
                        </div>
                        <div className="col-lg-7">
                          <span className="timer">
                            <img src={icon1} alt="clock" />
                            <span className="time-number">
                              200 days : 24H : 45M : 20S
                            </span>
                          </span>
                          <p>
                            <b>
                              Atomik PS30 Pro Wireless Bluetooth 30W Outdoor
                              Party Speaker
                            </b>
                          </p>
                          <span>
                            <span className="rate">36$</span>
                            <span className="prod-price">84$</span>
                          </span>
                          <hr />
                          <p>
                            Outdoor Party Speaker Karaoke Ready Phone Holder All
                            Bluetooth Audio devices supporting.....
                          </p>
                          <span>
                            <button className="addc-btn">
                              <i
                                class="fa fa-shopping-cart"
                                aria-hidden="true"
                              ></i>
                              Add to Cart
                            </button>
                            <span className="prod-icon1">
                              <img
                                src={icon2}
                                alt="whish"
                                className="prod-icon2"
                              />
                            </span>
                            <span className="prod-icon1">
                              <img
                                src={icon3}
                                alt="whish"
                                className="prod-icon2"
                              />
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="product-box">
                      <div className="row">
                        <div className="col-lg-5">
                          <img
                            src={radio}
                            className="productslide1"
                            alt="..."
                          />
                        </div>
                        <div className="col-lg-7">
                          <span className="timer">
                            <img src={icon1} alt="clock" />
                            <span className="time-number">
                              200 days : 24H : 45M : 20S
                            </span>
                          </span>
                          <p className="pt-3">
                            <b>
                              Atomik PS30 Pro Wireless Bluetooth 30W Outdoor
                              Party Speaker
                            </b>
                          </p>
                          <span>
                            <span className="rate">36$</span>
                            <span className="prod-price">84$</span>
                          </span>
                          <hr />
                          <p>
                            Outdoor Party Speaker Karaoke Ready Phone Holder All
                            Bluetooth Audio devices supporting.....
                          </p>
                          <span>
                            <button className="addc-btn">
                              <i
                                class="fa fa-shopping-cart"
                                aria-hidden="true"
                              ></i>
                              Add to Cart
                            </button>
                            <span className="prod-icon1">
                              <img
                                src={icon2}
                                alt="whish"
                                className="prod-icon2"
                              />
                            </span>
                            <span className="prod-icon1">
                              <img
                                src={icon3}
                                alt="whish"
                                className="prod-icon2"
                              />
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>

                <div className="row">
                  <div>
                    <span className="p-gal">
                      <img
                        src={pgallery1}
                        alt="pro-gallery"
                        className="img-fluid"
                      />
                    </span>
                    <span className="p-gal">
                      <img
                        src={pgallery2}
                        alt="pro-gallery"
                        className="img-fluid"
                      />
                    </span>
                    <span className="p-gal">
                      <img
                        src={pgallery3}
                        alt="pro-gallery"
                        className="img-fluid"
                      />
                    </span>
                    <span className="p-gal">
                      <img
                        src={pgallery4}
                        alt="pro-gallery"
                        className="img-fluid"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* products */}

      <section>
        <div className="container-fluid prod-section">
          <div className="row">
            <div className="heading-box">
              <span>
                <h3 className="prod-heading">New Arrivals</h3>
              </span>
              <span>
                <h3 className="prod-heading-2 ps-auto">View More</h3>
              </span>
            </div>
            <hr />
          </div>
          <div className="row">
            <div className="col-lg-2 prod-box">
              <div className="product-box-1">
                <img src={product1} alt="product" className="prod-img" />
                <p className="product-title">Kevin beeftongue</p>
                <span>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                </span>
                <p className="rate">$53.00</p>
                <div className="icons">
                  <i className="fas fa-shopping-cart cart-icon"></i>
                  <i className="fas fa-heart wishlist-icon"></i>
                  <i className="fa fa-eye eye-icon"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-2 prod-box">
              <div className="product-box-1">
                <img src={product2} alt="product" className="prod-img" />
                <p className="product-title">Doner Porchetta</p>
                <span>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                </span>
                <p className="rate">$65.00</p>
                <div className="icons">
                  <i className="fas fa-shopping-cart cart-icon"></i>
                  <i className="fas fa-heart wishlist-icon"></i>
                  <i className="fa fa-eye eye-icon"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-2 prod-box">
              <div className="product-box-1">
                <img src={product3} alt="product" className="prod-img" />
                <p className="product-title">Kevin beeftongue</p>
                <span>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                </span>
                <p className="rate">$83.00</p>
                <div className="icons">
                  <i className="fas fa-shopping-cart cart-icon"></i>
                  <i className="fas fa-heart wishlist-icon"></i>
                  <i className="fa fa-eye eye-icon"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-2 prod-box">
              <div className="product-box-1">
                <img src={product4} alt="product" className="prod-img" />
                <p className="product-title">Kevin beeftongue</p>
                <span>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                </span>
                <p className="rate">$153.00</p>
                <div className="icons">
                  <i className="fas fa-shopping-cart cart-icon"></i>
                  <i className="fas fa-heart wishlist-icon"></i>
                  <i className="fa fa-eye eye-icon"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-2 prod-box">
              <div className="product-box-1">
                <img src={product5} alt="product" className="prod-img" />
                <p className="product-title">Kevin beeftongue</p>
                <span>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                </span>
                <p className="rate">$53.00</p>
                <div className="icons">
                  <i className="fas fa-shopping-cart cart-icon"></i>
                  <i className="fas fa-heart wishlist-icon"></i>
                  <i className="fa fa-eye eye-icon"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-2 prod-box">
              <div className="product-box-1">
                <img src={product6} alt="product" className="prod-img" />
                <p className="product-title">Kevin beeftongue</p>
                <span>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                </span>
                <p className="rate">$53.00</p>
                <div className="icons">
                  <i className="fas fa-shopping-cart cart-icon"></i>
                  <i className="fas fa-heart wishlist-icon"></i>
                  <i className="fa fa-eye eye-icon"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-lg-2 prod-box">
              <div className="product-box-1">
                <img src={product7} alt="product" className="prod-img" />
                <p className="product-title">Kevin beeftongue</p>
                <span>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                </span>
                <p className="rate">$53.00</p>
                <div className="icons">
                  <i className="fas fa-shopping-cart cart-icon"></i>
                  <i className="fas fa-heart wishlist-icon"></i>
                  <i className="fa fa-eye eye-icon"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-2 prod-box">
              <div className="product-box-1">
                <img src={product8} alt="product" className="prod-img" />
                <p className="product-title">Doner Porchetta</p>
                <span>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                </span>
                <p className="rate">$65.00</p>
                <div className="icons">
                  <i className="fas fa-shopping-cart cart-icon"></i>
                  <i className="fas fa-heart wishlist-icon"></i>
                  <i className="fa fa-eye eye-icon"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-2 prod-box">
              <div className="product-box-1">
                <img src={product9} alt="product" className="prod-img" />
                <p className="product-title">Kevin beeftongue</p>
                <span>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                </span>
                <p className="rate">$83.00</p>
                <div className="icons">
                  <i className="fas fa-shopping-cart cart-icon"></i>
                  <i className="fas fa-heart wishlist-icon"></i>
                  <i className="fa fa-eye eye-icon"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-2 prod-box">
              <div className="product-box-1">
                <img src={product10} alt="product" className="prod-img" />
                <p className="product-title">Kevin beeftongue</p>
                <span>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                  <i className="fa fa-star" aria-hidden="true"></i>
                </span>
                <p className="rate">$153.00</p>
                <div className="icons">
                  <i className="fas fa-shopping-cart cart-icon"></i>
                  <i className="fas fa-heart wishlist-icon"></i>
                  <i className="fa fa-eye eye-icon"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-2 prod-box">
              <div className="product-box-1">
                <img src={product5} alt="product" className="prod-img" />
                <p className="product-title">Kevin beeftongue</p>
                <span>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                </span>
                <p className="rate">$53.00</p>
                <div className="icons">
                  <i className="fas fa-shopping-cart cart-icon"></i>
                  <i className="fas fa-heart wishlist-icon"></i>
                  <i className="fa fa-eye eye-icon"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-2 prod-box">
              <div className="product-box-1">
                <img src={product6} alt="product" className="prod-img" />
                <p className="product-title">Kevin beeftongue</p>
                <span>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                </span>
                <p className="rate">$53.00</p>
                <div className="icons">
                  <i className="fas fa-shopping-cart cart-icon"></i>
                  <i className="fas fa-heart wishlist-icon"></i>
                  <i className="fa fa-eye eye-icon"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Productslide;
