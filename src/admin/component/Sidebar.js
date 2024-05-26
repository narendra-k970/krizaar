import React, { useState } from "react";
import Icon1 from "../icon/organization.png";
import { NavLink } from "react-router-dom";

const Sidebar = ({ collapsed, activeTab, setActiveTab }) => {
  const [dropdowns, setDropdowns] = useState({
    customers: false,
    vendors: false,
    products: false,
  });

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const handleDropdownClick = (dropdownName) => {
    setDropdowns((prevState) => ({
      customers: dropdownName === "customers" ? !prevState.customers : false,
      vendors: dropdownName === "vendors" ? !prevState.vendors : false,
      products: dropdownName === "products" ? !prevState.products : false,
    }));
  };

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <ul className="nav nav-drop">
        {!collapsed && (
          <>
            <h4 className="mb-3" style={{ color: "#fff" }}>
              Dashboard
            </h4>
            <p className="drop-btn">
              <a
                className="btn drop-menu"
                data-bs-toggle="collapse"
                href="#collapseCustomers"
                role="button"
                aria-expanded={dropdowns.customers ? "true" : "false"}
                aria-controls="collapseCustomers"
                onClick={() => handleDropdownClick("customers")}
              >
                <i className="fas fa-user-alt me-2"></i>
                Customers
                <i
                  className={`fas fa-caret-${
                    dropdowns.customers ? "down" : "up"
                  } org-icon ms-5`}
                ></i>
              </a>
            </p>
            <div
              className={`collapse ${dropdowns.customers ? "show" : ""}`}
              id="collapseCustomers"
            >
              <div className="card card-body">
                <NavLink
                  className={activeTab === "allcustomer" ? "active" : ""}
                  onClick={() => handleTabClick("allcustomer")}
                >
                  <img src={Icon1} alt="notification" className="org-icon" />{" "}
                  <span className="org-tit">All Customers</span>
                </NavLink>
                <NavLink
                  className={activeTab === "completeorders" ? "active" : ""}
                  onClick={() => handleTabClick("completeorders")}
                >
                  <img src={Icon1} alt="notification" className="org-icon" />{" "}
                  <span className="org-tit">Complete Orders</span>
                </NavLink>
                <NavLink
                  className={activeTab === "pendingorders" ? "active" : ""}
                  onClick={() => handleTabClick("pendingorders")}
                >
                  <img src={Icon1} alt="notification" className="org-icon" />{" "}
                  <span className="org-tit">Pending Orders</span>
                </NavLink>
                <NavLink
                  className={
                    activeTab === "cancellationrequest" ? "active" : ""
                  }
                  onClick={() => handleTabClick("cancellationrequest")}
                >
                  <img src={Icon1} alt="notification" className="org-icon" />{" "}
                  <span className="org-tit">Cancellation Request</span>
                </NavLink>
              </div>
            </div>

            <p className="drop-btn">
              <a
                className="btn drop-menu"
                data-bs-toggle="collapse"
                href="#collapseVendors"
                role="button"
                aria-expanded={dropdowns.vendors ? "true" : "false"}
                aria-controls="collapseVendors"
                onClick={() => handleDropdownClick("vendors")}
              >
                <i className="fas fa-user-alt me-2"></i>
                Vendors
                <i
                  className={`fas fa-caret-${
                    dropdowns.vendors ? "down" : "up"
                  } org-icon ms-5`}
                ></i>
              </a>
            </p>
            <div
              className={`collapse ${dropdowns.vendors ? "show" : ""}`}
              id="collapseVendors"
            >
              <div className="card card-body">
                <NavLink
                  className={activeTab === "vendors" ? "active" : ""}
                  onClick={() => handleTabClick("vendors")}
                >
                  <img src={Icon1} alt="notification" className="org-icon" />{" "}
                  <span className="org-tit">Vendors</span>
                </NavLink>
                <NavLink
                  className={activeTab === "vendorrequest" ? "active" : ""}
                  onClick={() => handleTabClick("vendorrequest")}
                >
                  <img src={Icon1} alt="notification" className="org-icon" />{" "}
                  <span className="org-tit">Vendor Request</span>
                </NavLink>
                <NavLink
                  className={activeTab === "vendorsalereport" ? "active" : ""}
                  onClick={() => handleTabClick("vendorsalereport")}
                >
                  <img src={Icon1} alt="notification" className="org-icon" />{" "}
                  <span className="org-tit">Vendor Sale Report</span>
                </NavLink>
                <NavLink
                  className={activeTab === "vendorproducts" ? "active" : ""}
                  onClick={() => handleTabClick("vendorproducts")}
                >
                  <img src={Icon1} alt="notification" className="org-icon" />{" "}
                  <span className="org-tit">Vendor Products</span>
                </NavLink>
              </div>
            </div>

            <p className="drop-btn">
              <a
                className="btn drop-menu"
                data-bs-toggle="collapse"
                href="#collapseProducts"
                role="button"
                aria-expanded={dropdowns.products ? "true" : "false"}
                aria-controls="collapseProducts"
                onClick={() => handleDropdownClick("products")}
              >
                <i className="fas fa-user-alt me-2"></i>
                Products
                <i
                  className={`fas fa-caret-${
                    dropdowns.products ? "down" : "up"
                  } org-icon ms-5`}
                ></i>
              </a>
            </p>
            <div
              className={`collapse ${dropdowns.products ? "show" : ""}`}
              id="collapseProducts"
            >
              <div className="card card-body">
                <NavLink
                  className={activeTab === "allproducts" ? "active" : ""}
                  onClick={() => handleTabClick("allproducts")}
                >
                  <img src={Icon1} alt="notification" className="org-icon" />{" "}
                  <span className="org-tit">All Products</span>
                </NavLink>
                <NavLink
                  className={activeTab === "addnewproduct" ? "active" : ""}
                  onClick={() => handleTabClick("addnewproduct")}
                >
                  <img src={Icon1} alt="notification" className="org-icon" />{" "}
                  <span className="org-tit">Add New Product</span>
                </NavLink>
                <NavLink
                  className={activeTab === "productcategories" ? "active" : ""}
                  onClick={() => handleTabClick("productcategories")}
                >
                  <img src={Icon1} alt="notification" className="org-icon" />{" "}
                  <span className="org-tit">Product Categories</span>
                </NavLink>
                <NavLink
                  className={activeTab === "attributes" ? "active" : ""}
                  onClick={() => handleTabClick("attributes")}
                >
                  <img src={Icon1} alt="notification" className="org-icon" />{" "}
                  <span className="org-tit">Product Attributes</span>
                </NavLink>
              </div>
            </div>
          </>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
