import React from "react";
import "./contact.css";

import { AiFillPhone } from "react-icons/ai";

const contact = () => {
  const handlePreventDefault = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="contactContainer">
        <div className="contactContainer__contact contact">
          <h3>Kontakt</h3>
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam
            aut sapiente incidunt eius ullam enim qui, ipsum modi earum,
            veritatis repudiandae dolore labore, perspiciatis sequi nam impedit
            velit cum non.
          </span>
          <form action="/">
            <div>
              <label htmlFor="name">Imię</label>
              <input type="text" id="name" />
            </div>
            <div>
              <label htmlFor="lastName">Nazwisko</label>
              <input type="text" id="lastName" />
            </div>
            <div>
              <label htmlFor="email">email</label>
              <input type="email" id="email" />
            </div>
            <div>
              <label htmlFor="phone">Telefon</label>
              <input type="number" id="phone" />
            </div>
            <div className="textArea">
              <label htmlFor="message">Wiadomość</label>
              <textarea id="message" cols="100" rows="10"></textarea>
            </div>
            <button type="submit" onClick={handlePreventDefault}>
              Wysyłam
            </button>
          </form>
        </div>
        <div className="contactContainer__contactNumber contactNumber">
          <div className="data__contactNumber data">
            <h4>Photo company digital marketing</h4>
            <span>ul. xyz 3</span>
            <span>99-999 Wałbrzych</span>
            <span>email: xyz@photo.com</span>
            <span>tel.: +48 999 999 999</span>
          </div>
          <div className="contactNumber__numer number">
            <span>
              <span className="number__phoneIcon phoneIcon">
                <AiFillPhone></AiFillPhone>
              </span>
              (+48) 999 999 999
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default contact;
