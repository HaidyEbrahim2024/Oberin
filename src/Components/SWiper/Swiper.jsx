import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiper.css";
import { Pagination, Navigation } from "swiper/modules";

export default function App() {
  const breakfast = "/image/img/1.jpg";
  const lunch = "/image/img/9.avif";
  const dinner = "/image/img/7.jpg";
  const fruits = "/image/img/12.avif";

  const breakBg = { backgroundColor: "rgb(254, 244, 234)" };
  const lunchBg = { backgroundColor: "rgb(245, 245, 245)" };
  const dinnerBg = { backgroundColor: "rgb(234, 244, 244)" };
  const fruitsBg = { backgroundColor: "rgb(234, 245, 227)" };

  return (
    <>
      <div className="container  ">
        <div className=" Popular-cat">
          <h3>Popular Categories</h3>
          <div className="Link">
            <Link to="/CatAll" className="button">
              See All
              <FontAwesomeIcon icon={faArrowRightLong} className="mx-2" />
            </Link>
          </div>
        </div>
        <Swiper
          effect="coverflow"
          slidesPerView={1}
          centeredSlides={true}
          spaceBetween={30}
          loop={true}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          <SwiperSlide>
            <Link to="/lunch" className=" lunch links_meal">
              <div className="sw-conn ">
                <img src={lunch} className="image" />
                <h2 >Lunch</h2>
                <h6 >9 Items</h6>
                <div className="overlay"></div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/dinner" className=" din links_meal">
              <div className="sw-conn ">
                <img src={dinner} className=" image" />
                <h2 >Dinner</h2>
                <h6 >9 Items</h6>
                <div className="overlay"></div>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/fruit" className="fruit links_meal">
              <div className="sw-conn ">
                <img src={fruits} className="image" />
                <h2 >Fruits</h2>
                <h6>9 Items</h6>
                <div className="overlay"></div>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link to="/breakfast" className=" break links_meal">
              <div className="sw-conn">
                <img src={breakfast} className="image" />
                <h2 >Breakfast</h2>
                <h6 >9 Items</h6>
                <div className="overlay"></div>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
