import React from "react";
import "./about.css";
import { SlSocialDropbox } from "react-icons/sl";
import { BsLightbulb } from "react-icons/bs";
import { BsBarChart } from "react-icons/bs";
import { BsBasket } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const About = () => {
  const nav = useNavigate()

  return (
    <div className="mainCardj">
      <div className="leftBodyj">
        <div className="wrapperj">
          <div className="cardj">
            <div className="wrappk">
              <div className="icon" style={{background: "rgb(31,7,87)"}}><SlSocialDropbox /></div>
              <h3>Professional service</h3>
              <p>
                Our team is always ready to assist you with selection, answer
                your questions, and provide you with all the necessary
                information about each of our items.
              </p>
            </div>
          </div>
          <div className="cardk">
            <div className="wrappk">
            <div className="icon" style={{background: "rgb(25,135,84)"}}><BsLightbulb /></div>
              <h3>Wide range of options</h3>
              <p>
                Regardless of your needs, we offer a variety of accounts with
                different numbers of followers and account ages. You can choose
                what best suits your goals.
              </p>
            </div>
          </div>
        </div>
        <div className="wrapperk">
          <div className="cardj">
            <div className="wrappk">
            <div className="icon" style={{background: "rgb(255,193,7)"}}>< BsBarChart/></div>
              <h3>What sets us apart?</h3>
              <p>
                Quality and verified accounts: We guarantee that every account
                offered in our store has undergone thorough validation. We are
                confident in the quality of what we offer and ensure the highest
                quality of our accounts.
              </p>
            </div>
          </div>
          <div className="cardk">
            <div className="wrappk">
            <div className="icon" style={{background: "#3F0140"}}><BsBasket /></div>
              <h3 style={{color: "white"}}>Secure Transactions</h3>
              <p style={{color: "rgb(194, 186, 186)"}}>
                Shop with confidence knowing that our platform prioritizes
                security. Your transactions are protected, and we facilitate a
                secure environment for both buyers and sellers.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="rightBodyj">
        <div className="wrapj">
          <h2>
            <span>Surelogs Blog</span>
            <br />
            We focus on quality socials accounts.
          </h2>
          <p>
            At Log marketplace, we specialize in offering a wide selection of
            accounts that can be useful for various purposes, whether it's for{" "}
            <br />
            marketing, brand promotion, newsletters, and much more.
          </p>
          <button
            onClick={() => {
              nav("/login")
            }}
          >Shop now</button>
        </div>
      </div>
    </div>
  );
};

export default About;
