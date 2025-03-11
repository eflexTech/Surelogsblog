import React from 'react'
import { Button } from 'antd';
import { AiOutlineVerticalAlignTop } from "react-icons/ai";

const Footer = () => {
  const year = new Date().getFullYear();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
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
  )
}

export default Footer