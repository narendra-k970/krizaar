import React from "react";
import Header from "../componenth/header/Header";
import Footer from "../componenth/header/Footer";
import img1 from "../img/krizaar-1.png";
import img2 from "../img/shop-cart.png";

const Notification = () => {
  return (
    <>
      <Header />
      <section>
        <div className="container noti-cont">
          <div className="row">
            <p>Account {">"} Wishlist</p>
            <h5>All Notification</h5>
            <hr className="hor-line" />
          </div>
          <div className="row noti-box">
            <div className="col-lg-2"><img src={img1} alt="prod-img" className="noti-img img-fluid" /></div>
            <div className="col-lg-10 not-desc">Available in high-waist, flared, distressed, dkinny, jogger,
                boot-legged & more styles! Shop Now
                <br />2 JAN, 2024</div>
          </div>
          <div className="row noti-box1 mt-4">
            <div className="col-lg-2"><img src={img2} alt="prod-img" className="img-fluid" /></div>
            <div className="col-lg-10 not-desc">Available in high-waist, flared, distressed, dkinny, jogger,
                boot-legged & more styles! Shop Now
                <br />2 JAN, 2024</div>
          </div>
          <div className="row noti-box mt-4">
            <div className="col-lg-2"><img src={img1} alt="prod-img" className="noti-img img-fluid" /></div>
            <div className="col-lg-10 not-desc">Available in high-waist, flared, distressed, dkinny, jogger,
                boot-legged & more styles! Shop Now
                <br />2 JAN, 2024</div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Notification;
