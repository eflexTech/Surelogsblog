import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/Landing/LandingPage";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import Resetpassword from "./pages/Auth/Resetpassword";
import TermsOfUse from "./pages/Stephen/terms-of-use/TermsOfUse";
import SideBar from "./components/SideBar";
import Profile from "./pages/Stephen/profile/Profile";
import FundWallet from "./pages/Stephen/fundwallet/FundWallet";
import PasswordReset from "./pages/Stephen/passwordreset/PasswordReset";
import Referral from "./pages/Stephen/referral/Referral";
import Rules from "./pages/Stephen/rules/Rules";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<Resetpassword />} />
        <Route path="/dashboard" element={<SideBar />}>
        <Route path="" element={"Dashboard"} />
        <Route path="profile" element={<Profile />} />
        <Route path="fund-your-wallet" element={<FundWallet />} />
        <Route path="password-reset" element={<PasswordReset />} />
        <Route path="referral" element={<Referral />} />
        <Route path="rules" element={<Rules />} />
        <Route path="T&Cs" element={<TermsOfUse />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
