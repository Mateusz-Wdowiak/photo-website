import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../../pages/home/Home";
import AboutUs from "../../pages/aboutUs/AboutUs";
import Portfolio from "../../pages/portfolio/Portfiolio";
import Contact from "../../pages/contact/Contact";
import NotFound from "../../pages/notFound/NotFound";

const Page = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/aboutUs" element={<AboutUs />}></Route>
      <Route path="/portfolio" element={<Portfolio />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};

export default Page;
