import React from 'react'
import "./explore.css"
import { MdFacebook } from "react-icons/md";
import { LuInstagram } from "react-icons/lu";
import { IoLogoTiktok } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaSnapchat } from "react-icons/fa6";
import { FaTwitch } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { AiOutlineVerticalAlignTop } from "react-icons/ai";



const Explore = () => {
    const navigate = useNavigate()
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };
      const year = new Date().getFullYear();
  return (
    <div className='Explore'>
      <div className='footerWrapper'>
        <div className='container'>
            <div className='textcontainer'>
                <h1>Explore our solutions</h1>
            </div>
            <div className='SMboxes'>
                <div className='facebookbox'>
                    <div className='icon'><MdFacebook /></div>
                    <div className='SMname'>
                        <h3>Facebook</h3>
                        <p>Quality Facebook Service</p>
                    </div>
                </div>
                <div className='facebookbox'>
                    <div className='icon insta'><LuInstagram /></div>
                    <div className='SMname'>
                    <h3>Instagram</h3>
                    <p>Quality Instagram Service</p>
                    </div>
                </div>
                <div className='facebookbox'>
                    <div className='icon tiktok'><IoLogoTiktok /></div>
                    <div className='SMname'>
                    <h3>TikTik</h3>
                    <p>Quality Tiktok Service</p>
                    </div>
                </div>
                <div className='facebookbox'>
                    <div className='icon twiter'><FaTwitter /></div>
                    <div className='SMname'>
                    <h3>Twitter</h3>
                    <p>Quality Twitter Service</p>
                    </div>
                </div>
                <div className='facebookbox'>
                    <div className='icon snapchat'><FaSnapchat /></div>
                    <div className='SMname'>
                    <h3>Snapchat</h3>
                    <p>Quality Snapchat Service</p>
                    </div>
                </div>
                <div className='facebookbox'>
                    <div className='icon twitch'><FaTwitch /></div>
                    <div className='SMname'>
                    <h3>Twitch</h3>
                    <p>Quality Twitch Service</p>
                    </div>
                </div>
            </div>
            <button className='btn'
            onClick={()=>navigate("/")}
            >Shop Now</button>
        </div>
      </div>
      <div className='Footertext'>
            <div className='Textbg'>
                <h5>
                {year} © All rights reserved by <br className='break'/> <span>Surelogsblog</span> 
                </h5>
                <footer className='scrbtn'>
      <Button type="primary" onClick={scrollToTop} className='scricon'>
      <AiOutlineVerticalAlignTop />
      </Button>
    </footer>
            </div>
        </div>
      </div>
  )
}

export default Explore
