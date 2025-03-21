import React from "react";
import "./profile.css";
import { TbLockUp } from "react-icons/tb";
import { TbLogout2 } from "react-icons/tb";

const Profile = () => {
  return (
    <div className="profilePage">
      <div className="profilePic">
        <div className="pic"></div>
        <p>Dexel</p>
        <p>ezenrielvis@gmail.com</p>
      </div>
      <div className="Total">
        <div className="Spent">
          <h3>Total Spent</h3> <p>NGN 0.00</p>
        </div>
        <div className="Spent">
          <h3>Total Bought</h3> <p>0.00</p>
        </div>
      </div>
      <div className="auth">
        <p>
          <span>
            <TbLockUp />
          </span>
          Change Password
        </p>
        <p>
          <span>
            <TbLogout2 />
          </span>
          Log Out
        </p>
      </div>
    </div>
  );
};

export default Profile;
