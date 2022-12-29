import React from "react";
import { BiErrorAlt } from "react-icons/bi";

import "./notFound.css";

const NotFound = () => {
  return (
    <div className="errorPage">
      <BiErrorAlt></BiErrorAlt>
      <span className="text_errorPage">Strona nie została odnaleziona !</span>
    </div>
  );
};

export default NotFound;
