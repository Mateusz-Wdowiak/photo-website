import React from "react";
import "./portfolio.css";
import img1 from "../../images/swiper_1.jpg";
import img2 from "../../images/swiper_2.jpg";
import img3 from "../../images/swiper_3.jpg";
import img4 from "../../images/swiper_4.jpg";

import { AiFillCamera } from "react-icons/ai";
import { FaPortrait } from "react-icons/fa";
import { MdPortrait, MdInsertPhoto } from "react-icons/md";
import { BsCameraReelsFill } from "react-icons/bs";
import { IoMdPhotos } from "react-icons/io";

import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

const Portfiolio = () => {
  return (
    <>
      <div className="portfolioContainer">
        <div className="portfolioContainer__portfolioSpan portfolioSpan">
          <span>Poniżej kilka fotografii z zeszłego roku</span>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={true}
          className="mySwiper">
          <SwiperSlide className="swiperslide">
            <img src={img1} alt="tree" />
          </SwiperSlide>
          <SwiperSlide className="swiperslide">
            <img src={img2} alt="bird" />
          </SwiperSlide>
          <SwiperSlide className="swiperslide">
            <img src={img3} alt="cofee" />
          </SwiperSlide>
          <SwiperSlide className="swiperslide">
            <img src={img4} alt="landscape" />
          </SwiperSlide>
        </Swiper>
        <h3 className="portfolioContainer__portfolioh3 portfolioh3">
          Co oferujemy
        </h3>
        <div className="portfolioContainer__offer offer">
          <div>
            <AiFillCamera className="portfolioIcon"></AiFillCamera>
            <h4>Zdjęcia grupowe</h4>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, culpa.
            </span>
          </div>
          <div>
            <FaPortrait className="portfolioIcon"></FaPortrait>
            <h4>Zdjęcia indywidualne</h4>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, culpa.
            </span>
          </div>
          <div>
            <MdPortrait className="portfolioIcon"></MdPortrait>
            <h4>Portrety</h4>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, culpa.
            </span>
          </div>
          <div>
            <BsCameraReelsFill className="portfolioIcon"></BsCameraReelsFill>
            <h4>Filmy</h4>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, culpa.
            </span>
          </div>
          <div>
            <IoMdPhotos className="portfolioIcon"></IoMdPhotos>
            <h4>Komplety zdjęć</h4>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, culpa.
            </span>
          </div>
          <div>
            <MdInsertPhoto className="portfolioIcon"></MdInsertPhoto>
            <h4>Zdjęcia krajobrazowe</h4>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, culpa.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfiolio;
