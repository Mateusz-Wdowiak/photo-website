import React from "react";
import { Link } from "react-router-dom";
import "./aboutUs.css";

import {
  BsFillChatDotsFill,
  BsFillPeopleFill,
  BsFilm,
  BsFillCalendarCheckFill,
} from "react-icons/bs";
import { AiFillCamera } from "react-icons/ai";
import { FaPencilRuler } from "react-icons/fa";
import { BiHelpCircle } from "react-icons/bi";
import { MdWork } from "react-icons/md";
import { RiChatCheckFill } from "react-icons/ri";

const AboutUs = () => {
  const textTab = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius iure cumque asperiores facilis dolorum voluptatum reprehenderit. Cum non voluptatum commodi, ea ab tempora laudantium doloribus consequatur inventore, et porro! Tempora?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa modi eius adipisci corporis omnis officia dolorem dicta rem autem eum?",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam sunt impedit iusto consequuntur nobis maiores?",
  ];

  const handleText1 = () => {
    const span = document.querySelector(".span");
    span.textContent = textTab[0];
  };

  const handleText2 = () => {
    const span = document.querySelector(".span");
    span.textContent = textTab[1];
  };

  const handleText3 = () => {
    const span = document.querySelector(".span");
    span.textContent = textTab[2];
  };
  return (
    <>
      <div className="containerAboutUs">
        <div className="containerAboutUs__aboutUsInfo aboutUsInfo">
          <div className="aboutUsInfo__menu menu">
            <p id="first" onClick={handleText1}>
              Doświadczenie
            </p>
            <p href="/" id="second" onClick={handleText2}>
              Wsparcie
            </p>
            <p id="third" onClick={handleText3}>
              Opinie
            </p>
          </div>
          <span className="span">{textTab[0]}</span>
        </div>
        <div className="containerAboutUs__aboutUsServices aboutUsServices">
          <div>
            <BsFillChatDotsFill className="aboutUsServices__aboutUsIcon aboutUsIcon"></BsFillChatDotsFill>
            <h4>PR ONLINE</h4>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, odit
              atque! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur.
            </span>
          </div>
          <div>
            <BsFillPeopleFill className="aboutUsServices__aboutUsIcon aboutUsIcon"></BsFillPeopleFill>
            <h4>SOCIAL MEDIA</h4>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, odit
              atque! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur.
            </span>
          </div>
          <div>
            <BsFilm className="aboutUsServices__aboutUsIcon aboutUsIcon"></BsFilm>
            <h4>FILMY I ANIMACJE</h4>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, odit
              atque! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur.
            </span>
          </div>
          <div>
            <AiFillCamera className="aboutUsServices__aboutUsIcon aboutUsIcon"></AiFillCamera>
            <h4>FOTOGRAFIA</h4>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, odit
              atque! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur.
            </span>
          </div>
          <div>
            <FaPencilRuler className="aboutUsServices__aboutUsIcon aboutUsIcon"></FaPencilRuler>
            <h4>PROJEKTY GRAFICZNE</h4>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, odit
              atque! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur.
            </span>
          </div>
          <div>
            <BiHelpCircle className="aboutUsServices__aboutUsIcon aboutUsIcon"></BiHelpCircle>
            <h4>POMOC</h4>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, odit
              atque! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur.
            </span>
          </div>
          <div>
            <MdWork className="aboutUsServices__aboutUsIcon aboutUsIcon"></MdWork>
            <h4>DOŚWIADCZENIE</h4>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, odit
              atque! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur.
            </span>
          </div>
          <div>
            <BsFillCalendarCheckFill className="aboutUsServices__aboutUsIcon aboutUsIcon"></BsFillCalendarCheckFill>
            <h4>WOLNE TERMINY</h4>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, odit
              atque! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur.
            </span>
          </div>
          <div>
            <RiChatCheckFill className="aboutUsServices__aboutUsIcon aboutUsIcon"></RiChatCheckFill>
            <h4>POZYTYWNE OPINIE</h4>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, odit
              atque! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur.
            </span>
          </div>
        </div>
        <div className="containerAboutUs__aboutUsContact aboutUsContact">
          <span>W razie pytań lub propozycji zapraszamy do kontaktu</span>
          <Link to="/contact">KONTAKT</Link>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
