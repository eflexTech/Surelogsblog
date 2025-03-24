import React from "react";
import "./referral.css";
import { MdOutlineCopyAll } from "react-icons/md";
import { BsFillExclamationTriangleFill } from "react-icons/bs";
import { toast } from "react-toastify";

const Referral = () => {

  const  handleCopy = () =>{
    navigator.clipboard.writeText("https://www.suresblog-socials.com/user/register?code=75495")
    toast.success("copied to clipboard")
  }
  return (
    <div className="mainGet">
      <div className="refT">
        <p>Earn money when people you refer Buy our Products! T&Cs apply</p>
      </div>
      <div className="refDash">
        <k>Referral Link</k>
        <div className="link">
          <span>
          https://www.suresblog-socials.com/user/register?code=75495
          </span>
          <p onClick={handleCopy}><MdOutlineCopyAll /></p>
        </div>
      </div>
      <div className="reward">
        <div className="card"><h3>Reward</h3><p>NGN 0</p></div>
        <div className="card"><h3>Withdrawal</h3><p>NGN 0</p></div>
        <div className="card"><h3>Total Click</h3><p>0</p></div>
        <div className="card"><h3>Total Sign up</h3> <p>0</p></div>
      </div>
      <div className="wall">
        <h3>Referral Wallet</h3>
        <p>NGN 0.00</p>
        <button>Cash out reward</button>
      </div>
      <div className="history">
        <div className="histo">Referral History</div>
        <div className="histData"><p><BsFillExclamationTriangleFill /></p> <k>No data found</k></div>
        <div className="status"><p>Commission Earned</p> <p>Status</p></div>
      </div>
    </div>
  );
};

export default Referral;
