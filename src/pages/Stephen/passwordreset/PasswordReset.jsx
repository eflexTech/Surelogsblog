import React, { useState } from "react";
import "./passwordreset.css";
import { toast } from "react-toastify";

const PasswordReset = () => {
  const [userinput, setUserInput] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const handleReset = () =>{
    if(userinput.newPassword !== userinput.confirmPassword){
        toast.error("password must match")
    }else{
      toast.success("password reset successfull")
    }
  }
  return (
    <div className="resetPassword">
      <div className="update">
        <h3>Update your password</h3>
      </div>
      <label>
        Enter new password
        <input
          type="password"
          value={userinput.newPassword}
          onChange={(e) =>
            setUserInput({ ...userinput, newPassword: e.target.value })
          }
        />
      </label>
      <label>
        Confirm password
        <input
          type="password"
          value={userinput.confirmPassword}
          onChange={(e) =>
            setUserInput({ ...userinput, confirmPassword: e.target.value })
          }
        />
      </label>
      <button onClick={handleReset}>Reset Password</button>
    </div>
  );
};

export default PasswordReset;
