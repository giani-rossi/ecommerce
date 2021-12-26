import React, { Fragment, useState } from "react";
import CartWidget from "./CartWidget";
import icon from "../assets/icon.svg";
import icon2 from "../assets/icon2.svg";
import Navbar from "./Navbar.css";
import Hamburger from "hamburger-react";
import HamburgerOpen from "./HamburgerOpen";
import WalletMessage from "./WalletMessage";
import DigitalClock from "./DigitalClock";


const NavBar = (props) => {
  const [hamburger, setHamburgerOpen] = useState(false);
  const [logWallet, setLogWallet] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    //console.log(hamburger);
    setHamburgerOpen(!hamburger);
  };

  const clickHandlerWallet = (e) => {
    e.preventDefault();
    setLogWallet(!logWallet);
  };

  return (
    <Fragment>
      <div className="navBar navbar-dark bg-dark">
        <img className="icon" src={icon} alt="icon"></img>

        <ul className="servicesNav">
          <a href="#home">
            {" "}
            <li>Services</li>{" "}
          </a>
          <a href="#home">
            {" "}
            <li>Trade</li>{" "}
          </a>
          <a href="#home">
            {" "}
            <li>NFT</li>{" "}
          </a>
        </ul>

        <div className="iconsNav">
          <CartWidget className="iconCart" />
          <img
            className="icons iconWallet"
            src={icon2}
            alt="icon"
            onClick={clickHandlerWallet}
          ></img>
          {logWallet === true ? <WalletMessage /> : null}
        </div>

        <div className="ham" onClick={handleClick}>
          <Hamburger size={18} />
          {hamburger === true ? <HamburgerOpen /> : null}
        </div>
       
        <DigitalClock/>
      </div>
    </Fragment>
  );
};

export default NavBar;
