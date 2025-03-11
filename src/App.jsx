import React from 'react'
import { HashRouter, Route, Routes  } from 'react-router-dom'
// import LandingPage from './pages/Landing/LandingPage'
import Login from './pages/Auth/Login'
import SignUp from './pages/Auth/SignUp'
import ForgotPassword from './pages/Auth/ForgotPassword'
import Resetpassword from './pages/Auth/Resetpassword'
import FundWallet from './pages/Stephen/fundwallet/FundWallet'
import Payment from './pages/Stephen/payment/Payment'

const App = () => {
  return (
    <HashRouter>
        <Routes>
          <Route path="/" element={<FundWallet />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/forgot-password" element={<ForgotPassword />}/>
          <Route path="/reset-password" element={<Resetpassword />}/>
          <Route path="/user/deposit/manual" element={<Payment />}/>
        </Routes>
    </HashRouter>
  )
}

export default App