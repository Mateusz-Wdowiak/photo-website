import React, { useState } from "react";
import { Link } from "react-router-dom";

import { BsFillCameraFill } from "react-icons/bs";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import "./header.css";

const list = [
  { id: 1, name: "Home", to: "/", exact: true },
  { id: 2, name: "O nas", to: "/aboutUs" },
  { id: 3, name: "Portfolio", to: "/portfolio" },
  { id: 4, name: "Kontakt", to: "/contact" },
];

const Header = () => {
  const [isActive, setActive] = useState(true);

  const toggleClass = () => {
    setActive(!isActive);
    const nav = document.querySelector(".nav");
  };

  const menu = list.map((item) => (
    <li key={item.id}>
      <Link to={item.to} exact={item.exact ? item.exact : "false"}>
        {item.name}
      </Link>
    </li>
  ));

  return (
    <>
      <header>
        <nav className="nav">
          <div className="logo">
            <Link to="/">
              <span className="span__logo">
                <BsFillCameraFill />
                PHOTO
              </span>
            </Link>
          </div>
          <ul
            id="headerUl"
            className={isActive ? null : "active"}
            onClick={toggleClass}>
            {menu}
          </ul>
          <div className="socials">
            <ul className={isActive ? "active" : null}>
              <li>
                <AiFillFacebook />
              </li>
              <li>
                <AiOutlineInstagram />
              </li>
              <li>
                <AiOutlineTwitter />
              </li>
            </ul>
          </div>
          <div onClick={toggleClass} className="hamburger">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </header>
      <div className="mainText">
        <span>W fotografii nie mamy sobie równych !</span>
      </div>
    </>
  );
};

export default Header;
