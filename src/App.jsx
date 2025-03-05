import React from 'react'
import { HashRouter, Route, Routes  } from 'react-router-dom'
import LandingPage from './pages/Landing/LandingPage'
import Login from './pages/Auth/Login'
import SignUp from './pages/Auth/SignUp'
import ForgotPassword from './pages/Auth/ForgotPassword'
import Resetpassword from './pages/Auth/Resetpassword'

const App = () => {
  return (
    <HashRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/forgot-password" element={<ForgotPassword />}/>
          <Route path="/reset-password" element={<Resetpassword />}/>
        </Routes>
    </HashRouter>
  )
}

export default App