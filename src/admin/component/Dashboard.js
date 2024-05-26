import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Pendingorders from "./Pendingorders";
import Completeorders from "./Completeorders";
import Allcustomer from "./Allcustomer";
import Cancellationrequest from "./Cancellationrequest";
import Vendors from "./Vendors";
import Vendorrequest from "./Vendorrequest";
import Vendorsalereport from "./Vendorsalereport";
import Vendorproducts from "./Vendorproducts";
import Allproducts from "./Allproducts";
import Addnewproduct from "./Addnewproduct";
import Attributes from "./Attributes";
import Productcategories from "./Productcategories";

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState("allcustomer");

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="app">
      <Header collapsed={collapsed} onToggle={toggleSidebar} />
      <div className="main-container">
        <Sidebar
          collapsed={collapsed}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <div className="main-content">
          {activeTab === "allcustomer" && <Allcustomer />}
          {activeTab === "completeorders" && <Completeorders />}
          {activeTab === "pendingorders" && <Pendingorders />}
          {activeTab === "cancellationrequest" && <Cancellationrequest />}
          {activeTab === "vendors" && <Vendors />}
          {activeTab === "vendorrequest" && <Vendorrequest />}
          {activeTab === "vendorsalereport" && <Vendorsalereport />}
          {activeTab === "vendorproducts" && <Vendorproducts />}
          {activeTab === "allproducts" && <Allproducts />}
          {activeTab === "addnewproduct" && <Addnewproduct />}
          {activeTab === "attributes" && <Attributes />}
          {activeTab === "productcategories" && <Productcategories />}
        </div>
      </div>
    </div>
  );
};

export default App;
