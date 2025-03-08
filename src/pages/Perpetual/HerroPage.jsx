import React from 'react'
import './HerroPage.css'
import { GoDotFill } from "react-icons/go";
import { useNavigate } from 'react-router-dom';


const HerroPage = () => {
    const nav = useNavigate()

  return (
    <div className="generalHeader">
            <div className="marketPlace">
                <div className='marketplaceDiv'>
                    <div className="desCription">
                        <p>Best</p>
                        <GoDotFill size={10} color="white" />
                        <p>Long Lasting</p>
                        <GoDotFill size={10} color="white" />
                        <p>Strong</p>
                    </div>

                    <div className='marketAcount'>
                        <h1 className='marketText'>   
                            Marketplace
                            <br />
                            for Unique Accounts
                        </h1>
                    </div>


                    <div className='paraGraph'>
                        <p>
                            One stop shop for all social accounts.
                        </p>
                    </div>

                    <div className='btnCorner'>
                        <button className="register" onClick={()=>nav("/signup")}>Register</button>
                        <button className="entryButton" onClick={()=>nav("/login")}>Login</button>
                    </div>

                </div>
                <div className='picsonPics'>
                         <img className='picsImage' src="https://www.fadded-socials.com/assets/front/img/illustrator/hero-3.png" alt="" />
                    </div>
                <div className='picsonPics2'>
                         <img className='picsImage' src="https://www.fadded-socials.com/assets/front/img/illustrator/hero-3.png" alt="" />
                    </div>


                    {/* <div className='authentication'>

                    </div> */}

            </div>

        </div>

  )
}

export default HerroPage