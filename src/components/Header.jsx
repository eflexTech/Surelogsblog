import React from 'react'
import logo from '../assets/Logo.png'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const nav = useNavigate()
  return (
      <div className="collapseHeader">
                      <div className="logoContain">
                          <img className="logoDiv" src={logo} alt="" />
                          {/* <h2 className="bizName">Surelogsblog</h2> */}
                      </div>
      
                      <div className="getIn">
                          <button className="getInbtn" onClick={()=>nav("/login")}>Log in </button>
                      </div>
                  </div>
  )
}

export default Header