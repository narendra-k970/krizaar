import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import product2 from "../img/image-18.png";
import product3 from "../img/image-19.png";
import product4 from "../img/image-20.png";
import product5 from "../img/image-21.png";
import banner from "../img/apple-watch.png";
import boy from "../img/boy.png";
import watch from "../img/watch.png";
import shoes from "../img/shoes1.png";
import bag from "../img/bags.png";
import bottel from "../img/bottel.png";
import contain from "../img/contain.png";
import vegitables from "../img/vegitables.png";
import almira from "../img/almira.png";
import wiper from "../img/wiper.png";
import accessories from "../img/accessories.png";
import hammer from "../img/hammer.png";
import extension from "../img/board.png";
import banner1 from "../img/boss-banner.png";
import CountdownTimer from "./CountdownTimer";

const Slider = () => {
  return (
    <>
      <section>
        <div className="container-fluid">
          <div className="row prod-slider">
            <div className="col-lg-4">
              <div className="spe-box">
                <CountdownTimer />
              </div>
            </div>
            <div className="col-lg-8">
              <Swiper
                breakpoints={{
                  576: {
                    width: 576,
                    slidesPerView: 2,
                  },
                  768: {
                    width: 768,
                    slidesPerView: 3,
                  },
                }}
                spaceBetween={30}
                slidesPerView={2}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                navigation
                onSlideChange={() => console.log("slide change")}
              >
                <SwiperSlide>
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
                </SwiperSlide>
                <SwiperSlide>
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
                </SwiperSlide>
                <SwiperSlide>
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
                </SwiperSlide>
                <SwiperSlide>
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
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-fluid prod-section">
          <div className="row">
            <div className="heading-box">
              <h3 className="prod-heading">Electronics</h3>
              <span className="cate-btn-2">
                <span className="cate-btn">Tablets</span>
                <span className="cate-btn">Laptop</span>
                <span className="cate-btn">Smartwatch</span>
                <span className="cate-btn">Headphone</span>
                <span className="cate-btn">Router</span>
              </span>
            </div>
            <hr />
          </div>
          <div className="row">
            <Swiper
              breakpoints={{
                576: {
                  width: 576,
                  slidesPerView: 2,
                },
                768: {
                  width: 768,
                  slidesPerView: 3,
                },
              }}
              spaceBetween={20}
              slidesPerView={2}
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              navigation
              // pagination={{ clickable: true }}
              // scrollbar={{ draggable: true }}
              // onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide>
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
                  <div className="row">
                    <span>
                      <button className="ad-btn">
                        <i
                          className="fa fa-shopping-cart"
                          aria-hidden="true"
                        ></i>
                        Add to cart
                      </button>
                      <i className="fa fa-heart icon-ad" aria-hidden="true"></i>
                      <i
                        className="fa fa-exchange icon-ad"
                        aria-hidden="true"
                      ></i>
                    </span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
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
                  <div className="row">
                    <span>
                      <button className="ad-btn">
                        <i
                          className="fa fa-shopping-cart"
                          aria-hidden="true"
                        ></i>
                        Add to cart
                      </button>
                      <i className="fa fa-heart icon-ad" aria-hidden="true"></i>
                      <i
                        className="fa fa-exchange icon-ad"
                        aria-hidden="true"
                      ></i>
                    </span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
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
                  <div className="row">
                    <span>
                      <button className="ad-btn">
                        <i
                          className="fa fa-shopping-cart"
                          aria-hidden="true"
                        ></i>
                        Add to cart
                      </button>
                      <i className="fa fa-heart icon-ad" aria-hidden="true"></i>
                      <i
                        className="fa fa-exchange icon-ad"
                        aria-hidden="true"
                      ></i>
                    </span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
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
                  <div className="row">
                    <span>
                      <button className="ad-btn">
                        <i
                          className="fa fa-shopping-cart"
                          aria-hidden="true"
                        ></i>
                        Add to cart
                      </button>
                      <i className="fa fa-heart icon-ad" aria-hidden="true"></i>
                      <i
                        className="fa fa-exchange icon-ad"
                        aria-hidden="true"
                      ></i>
                    </span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
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
                  <div className="row">
                    <span>
                      <button className="ad-btn">
                        <i
                          className="fa fa-shopping-cart"
                          aria-hidden="true"
                        ></i>
                        Add to cart
                      </button>
                      <i className="fa fa-heart icon-ad" aria-hidden="true"></i>
                      <i
                        className="fa fa-exchange icon-ad"
                        aria-hidden="true"
                      ></i>
                    </span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
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
                  <div className="row">
                    <span>
                      <button className="ad-btn">
                        <i
                          className="fa fa-shopping-cart"
                          aria-hidden="true"
                        ></i>
                        Add to cart
                      </button>
                      <i className="fa fa-heart icon-ad" aria-hidden="true"></i>
                      <i
                        className="fa fa-exchange icon-ad"
                        aria-hidden="true"
                      ></i>
                    </span>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
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
                  <div className="row">
                    <span>
                      <button className="ad-btn">
                        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                        Add to cart
                      </button>
                      <i className="fa fa-heart icon-ad" aria-hidden="true"></i>
                      <i
                        className="fa fa-exchange icon-ad"
                        aria-hidden="true"
                      ></i>
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <hr />
        </div>
      </section>

      <section>
        <div className="container-fluid mt-5">
          <div className="row">
            <h5>
              <b>Love Apple? Think KIZAAR</b>
            </h5>
            <p>Get all the gadgets you want.</p>
          </div>
          <div className="row">
            <div className="col-lg-8">
              <Swiper
                spaceBetween={20}
                slidesPerView={3}
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                navigation
                onSlideChange={() => console.log("slide change")}
                breakpoints={{
                  // when window width is >= 320px
                  320: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  // when window width is >= 640px
                  640: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="product-box-2">
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
                </SwiperSlide>
                <SwiperSlide>
                  <div className="product-box-2">
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
                </SwiperSlide>
                <SwiperSlide>
                  <div className="product-box-2">
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
                </SwiperSlide>
                <SwiperSlide>
                  <div className="product-box-2">
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
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="col-lg-4">
              <img src={banner} alt="apple-watch" className="watch-banner" />
            </div>
          </div>
        </div>
      </section>

      <section className="my-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4">
              <div className="mix-img">
                <div className="bann-content">
                  <p>kitchen grinder</p>
                  <h5>Cook Up a win</h5>
                  <p>Shop Now</p>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="shoes">
                <div className="bann-content">
                  <h5>Beautiful shoes for girls</h5>
                  <p>Shop Now</p>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6 mt-3">
                  <div className="cen-img">
                    <div className="bann-content">
                      <h5>On Trend & Gorgeous</h5>
                      <p>Shop Now</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mt-3">
                  <div className="cen-img1">
                    <div className="bann-content">
                      <h5>Headphone</h5>
                      <p>Shop Now</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="cream-img">
                <div className="bann-content">
                  <p>Relax & refresh</p>
                  <h5>Time for me time</h5>
                  <p>Shop Now</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4">
              <div className="men-style-box">
                <h5>
                  <b>
                    Up to 60% off | Styles <br />
                    for men
                  </b>
                </h5>
                <div className="row">
                  <div className="col-lg-6 prod-box">
                    <img src={boy} alt="boy" className="men-style" />
                    <p>Clothing</p>
                  </div>
                  <div className="col-lg-6 prod-box">
                    <img src={watch} alt="boy" className="men-style" />
                    <p>Watches</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 prod-box">
                    <img src={shoes} alt="boy" className="men-style" />
                    <p>Footwear</p>
                  </div>
                  <div className="col-lg-6 prod-box">
                    <img src={bag} alt="boy" className="men-style" />
                    <p>Bags & Wallet</p>
                  </div>
                </div>
                <span>Explore all</span>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="men-style-box">
                <h5>
                  <b>Starting ₹199 | Amazon Brands & more</b>
                </h5>
                <div className="row">
                  <div className="col-lg-6 prod-box">
                    <img src={bottel} alt="boy" className="men-style" />
                    <p>Clothing</p>
                  </div>
                  <div className="col-lg-6 prod-box">
                    <img src={contain} alt="boy" className="men-style" />
                    <p>Watches</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 prod-box">
                    <img src={vegitables} alt="boy" className="men-style" />
                    <p>Footwear</p>
                  </div>
                  <div className="col-lg-6 prod-box">
                    <img src={almira} alt="boy" className="men-style" />
                    <p>Bags & Wallet</p>
                  </div>
                </div>
                <span>See More</span>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="men-style-box">
                <h5>
                  <b>Starting ₹199 | Amazon Brands & more</b>
                </h5>
                <div className="row">
                  <div className="col-lg-6 prod-box">
                    <img src={wiper} alt="boy" className="men-style" />
                    <p>Clothing</p>
                  </div>
                  <div className="col-lg-6 prod-box">
                    <img src={accessories} alt="boy" className="men-style" />
                    <p>Watches</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 prod-box">
                    <img src={hammer} alt="boy" className="men-style" />
                    <p>Footwear</p>
                  </div>
                  <div className="col-lg-6 prod-box">
                    <img src={extension} alt="boy" className="men-style" />
                    <p>Bags & Wallet</p>
                  </div>
                </div>
                <span>See More</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-fluid">
          <div className="row">
            <img src={banner1} alt="banner" className="b-banner" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Slider;
