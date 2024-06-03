import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import ProfileInfo from "./components/ProfileInfo";
import ManageAddress from "./components/ManageAddress";
import EditAddress from "./components/EditAddress";
import Allorder from "./components/Allorder";
import Payment from "./components/Payment";
import Whishlist from "./components/Whishlist";
import Notification from "./components/Notification";
import Signup from "./componenth/common/Signup";
import Signin from "./componenth/common/Signin";
import Resetpassword from "./componenth/common/Resetpassword";
import Dashboard from "./admin/component/Dashboard";
import Vendorsignup from "./componenth/common/Vendorsignup";
import Forgotpassword from "./componenth/common/Forgotpassword";
import Brand from "./admin/add/Brand";
import VendorLogin from "./componenth/common/VendorLogin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userprofile" element={<ProfileInfo />} />
        <Route path="/manageaddress" element={<ManageAddress />} />
        <Route path="/editaddress" element={<EditAddress />} />
        <Route path="allorder" element={<Allorder />} />
        <Route path="payment" element={<Payment />} />
        <Route path="whishlist" element={<Whishlist />} />
        <Route path="notification" element={<Notification />} />
        <Route path="signup" element={<Signup />} />
        <Route path="signin" element={<Signin />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="/forgotpassword" element={<Forgotpassword />} />
        <Route path="/resetpassword" element={<Resetpassword />} />
        <Route path="/vendorsignup" element={<Vendorsignup />} />
        <Route path="/vendorlogin" element={<VendorLogin />} />
        <Route path="/brand" element={<Brand />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
