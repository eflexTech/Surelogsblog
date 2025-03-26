import React from "react";
import "./rules.css";
import { FaRegCircle } from "react-icons/fa";

const Rules = () => {
  return (
    <div className="ruleBody">
      <div className="whitePaper">
        <div className="whitFront">
          <div className="ruleshead">
            <p>RULES AT SURESBLOG SOCIAL</p>
          </div>
          <div className="rulesText1">
            <span>
              <FaRegCircle />
            </span>
            <p>Always Secure your accts few hours after login</p>
          </div>
          <div className="rulesText">
            <span>
              <FaRegCircle />
            </span>
            <p>Accounts cannot be replaced after changing the password.</p>
          </div>
          <div className="rulesText">
            <span>
              <FaRegCircle />
            </span>
            <p>We replace bad accounts, if fault is from us (not after use)</p>
          </div>
          <div className="rulesText">
            <span>
              <FaRegCircle />
            </span>
            <p>This rules can be changed at any time without prior notice.</p>
          </div>
          <div className="rulesText">
            <span>
              <FaRegCircle />
            </span>
            <p>
              Obscene language to the admins may be grounds for service refusal.
            </p>
          </div>
          <div className="rulesText">
            <span>
              <FaRegCircle />
            </span>
            <p>
              Ignorance of the rules does not absolve you of responsibility.
            </p>
          </div>
          <div className="rulesText">
            <span>
              <FaRegCircle />
            </span>
            <p>
              The response time for technical support and the resolution of all
              problems/claims is 24/7.
            </p>
          </div>
          <div className="rulesText">
            <span>
              <FaRegCircle />
            </span>
            <p>
              Accounts are always checked by our private program on private
              mobile proxy prior to sale, so we can guarantee 100% validity of
              the items.
            </p>
          </div>
          <div className="rulesText">
            <span>
              <FaRegCircle />
            </span>
            <p>
              Accounts cannot be returned; instead, they can only be replaced if
              bad, provided that other rules are complied with.
            </p>
          </div>
          <div className="rulesText">
            <span>
              <FaRegCircle />
            </span>
            <p>
              The store is not liable for any account activity. How your account
              will last depends on how it’s used. No replacement or refund for
              an account suspended/disabled/logged out after a successful login.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rules;
