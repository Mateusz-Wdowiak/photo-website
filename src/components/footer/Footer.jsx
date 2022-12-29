import React from "react";
import "./footer.css";

import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <span className="footerSpan">
        &copy; MWdowiak. Wszystkie prawa zastrzeżone
      </span>
      <div className="FooterSocials">
        <div className="facebook">
          <AiFillFacebook />
        </div>
        <div className="instagram">
          <AiOutlineInstagram />
        </div>
        <div className="twitter">
          <AiOutlineTwitter />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
