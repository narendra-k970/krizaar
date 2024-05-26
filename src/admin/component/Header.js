import React from "react";
import { Menu } from "@mui/icons-material";
import Icon from "../icon/notif.png";
import profile from "../icon/pro-pc.png";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

const Header = ({ collapsed, onToggle }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <header className="header">
      <div className="row">
        <div className="col-lg-2 box-h1">
          <button className="header-toggle-button" onClick={onToggle}>
            <Menu />
          </button>
          <span className="dash-title">Krizaar</span>
        </div>
        <div className="col-lg-4 mt-2 box-h2">
          <form>
            <input
              type="email"
              id="emailInput"
              placeholder="Search.."
              required
              className="dash-input"
            />
            <button type="submit" className="sdash-icon">
              <SearchIcon />
            </button>
          </form>
        </div>
        <div className="col-lg-6 pro-box">
          {/* <img src={Icon1} alt='wishlist' className='noti-icon'/> */}
          <img src={Icon} alt="notification" className="noti-icon" />
          <div className="dropdown-container">
            <img
              src={profile}
              alt="profile"
              onClick={toggleDropdown}
              className="image-trigger pro-pic"
            />

            {dropdownVisible && (
              <div className="dropdown-content">
                <ul>
                  <li>
                    <a href="/profile">My Profile</a>
                  </li>
                  <li>
                    <a href="/profile">Edit Profile</a>
                  </li>
                  <li>
                    <a href="/change-password">Change Password</a>
                  </li>
                  <li>
                    <a href="/logout">Logout</a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
