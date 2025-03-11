import React, { useState } from "react";
import "./fundwallet.css";
import { Modal } from "antd";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const FundWallet = () => {
  const [userinput, setUserInput] = useState({
    amount: "",
    payment: "",
  });
  const [open, setOpen] = useState(false);

  const isopen = () => {
    if (!userinput.amount.trim() && !userinput.payment.trim()) {
      toast.error("please fill in details");
    }else if(userinput.payment === "MANUAL PAYMENT"){
      setOpen(false)

    }else {
      setOpen(true);
    }
  };
  const handlePay = () => {
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  console.log(userinput);
  return (
    <>
      <Modal
        open={open}
        onCancel={handleCancel}
        okButtonProps={{ style: { display: "none" } }}
        cancelButtonProps={{ style: { display: "none" } }}
        width={700}
      >
        <div className="payme">
          <h2>Paystack</h2>
        </div>
        <div className="final">
          <div className="price">
            <p>You have to pay</p>
            <h2>{userinput.amount} NGN</h2>
          </div>
          <button>Pay Now</button>
        </div>
      </Modal>
      <div className="mainBod">
        <div className="wall">
          <p>Top up your wallet easily</p>
        </div>

        <div className="learn">
          <button>Learn how to fund your wallet</button>
        </div>

        <div className="forme">
          <label>
            Enter Amount (NGN)
            <input
              type="number"
              value={userinput.amount}
              onChange={(e) =>
                setUserInput({ ...userinput, amount: e.target.value })
              }
            />
          </label>

          <label>
            Select Payment Gateway
            <select
              value={userinput.payment}
              onChange={(e) =>
                setUserInput({ ...userinput, payment: e.target.value })
              }
            >
              <option>Paystack NGN</option>
              <option>MANUAL PAYMENT</option>
            </select>
          </label>
          <button onClick={isopen}>Continue</button>
          <button className="tag">
            Have payment issues? Click here to Resolve
          </button>
        </div>

        <div className="history">
          <p>Latest Payments History</p>
        </div>
        <div className="historyD">
          <div className="heads">
            <p>DATE</p>
            <p>TYPE</p>
            <p>AMOUNT</p>
            <p>STATUS</p>
          </div>
          <div className="info">
            <p>1 hour ago</p>
            <p>Paystack</p>
            <p>9000.00</p>
            <span>Pending</span>
          </div>
          <div className="info">
            <p>1 hour ago</p>
            <p>Paystack</p>
            <p>9000.00</p>
            <span>Pending</span>
          </div>
        </div>
        <div className="foot"></div>
      </div>
    </>
  );
};

export default FundWallet;
