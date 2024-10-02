import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./views.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
export default function App() {
  const cust1 = "/image/img/cust1.jpg";
  const cust2 = "/image/img/cust2.jpg";
  const cust3 = "/image/img/cust3.jpg";
  const cust4 = "/image/img/cust4.jpg";
  const cust5 = "/image/img/cust5.jpg";
  const cust7 = "/image/img/cust7.jpg";
  const cust8 = "/image/img/cust8.jpg";
  return (
    <>
      <div className="container  ">
        <div className=" Popular-cat">
          <h3>What People Say</h3>
          {/* <button className="button">See All</button> */}
        </div>
        <Swiper
          // effect="coverflow"
          // onSwiper={setSwiperRef}
          slidesPerView={1}
          centeredSlides={true}
          autoplay={{
            delay: 1800,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          loop={true}
          pagination={{
            // type: "fraction",
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          breakpoints={{
            // عندما يكون عرض الشاشة أقل من 640 بكسل
            768: {
              slidesPerView: 3,
            },
            // وهكذا...
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="sw-con bg-light p-2">
              <div className="cus-con d-flex flex-colmun justify-content-start align-items-start ">
                <img src={cust1} />
                <div className="sub-cus-con d-flex flex-column col-12">
                  <h3 className="food-name ">Jown Mokh</h3>
                  <h3 className="food-item">Happy Customer</h3>
                </div>
              </div>
              <div className="d-flex  m-0 flex-column justify-content-start align-items-start ">
                <p className="loren">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elittne
                  adipisicing elit Lorem.
                </p>
                <div className="d-flex gap-0">
                  <FontAwesomeIcon
                    icon={faStar}
                    className="star_views  P_star"
                  />
                  <FontAwesomeIcon icon={faStar} className="star_views " />
                  <FontAwesomeIcon icon={faStar} className="star_views " />
                  <FontAwesomeIcon icon={faStar} className="star_views " />
                  <FontAwesomeIcon icon={faStar} className="star_views " />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sw-con  bg-light  p-2">
              <div className="cus-con  d-flex flex-colmun justify-content-start align-items-start ">
                <img src={cust2} />
                <div className="sub-cus-con col-12 d-flex flex-column ">
                  <h3 className="food-name ">Ali Ahmed</h3>
                  <h3 className="food-item">Happy Customer</h3>
                </div>
              </div>
              <div className="d-flex  m-0 flex-column justify-content-start align-items-start ">
                <p className="loren">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elittne
                  adipisicing elit Lorem.
                </p>
                <div className="d-flex gap-0">
                  <FontAwesomeIcon
                    icon={faStar}
                    className="star_views P_star"
                  />
                  <FontAwesomeIcon icon={faStar} className="star_views" />
                  <FontAwesomeIcon icon={faStar} className="star_views" />
                  <FontAwesomeIcon icon={faStar} className="star_views" />
                  <FontAwesomeIcon icon={faStar} className="star_views" />
                </div>
              </div>
            </div>
          </SwiperSlide>
         
          <SwiperSlide>
            <div className="sw-con  bg-light  p-2">
              <div className="cus-con d-flex flex-colmun justify-content-start align-items-start ">
                <img src={cust4} />
                <div className="sub-cus-con d-flex flex-column col-12">
                  <h3 className="food-name ">Gehan Nasr</h3>
                  <h3 className="food-item">Happy Customer</h3>
                </div>
              </div>
              <div className="d-flex  m-0 flex-column justify-content-start align-items-start ">
                <p className="loren">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elittne
                  adipisicing elit Lorem.
                </p>
                <div className="d-flex gap-0">
                  <FontAwesomeIcon
                    icon={faStar}
                    className="star_views P_star"
                  />
                  <FontAwesomeIcon icon={faStar} className="star_views" />
                  <FontAwesomeIcon icon={faStar} className="star_views" />
                  <FontAwesomeIcon icon={faStar} className="star_views" />
                  <FontAwesomeIcon icon={faStar} className="star_views" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sw-con  bg-light  p-2">
              <div className="cus-con d-flex flex-colmun justify-content-start align-items-start ">
                <img src={cust5} />
                <div className="sub-cus-con d-flex flex-column col-12">
                  <h3 className="food-name ">Moha foly</h3>
                  <h3 className="food-item">Happy Customer</h3>
                </div>
              </div>
              <div className="d-flex  m-0 flex-column justify-content-start align-items-start ">
                <p className="loren">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elittne
                  adipisicing elit Lorem.
                </p>
                <div className="d-flex gap-0">
                  <FontAwesomeIcon
                    icon={faStar}
                    className="star_views P_star"
                  />
                  <FontAwesomeIcon icon={faStar} className="star_views" />
                  <FontAwesomeIcon icon={faStar} className="star_views" />
                  <FontAwesomeIcon icon={faStar} className="star_views" />
                  <FontAwesomeIcon icon={faStar} className="star_views" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sw-con  bg-light  p-2">
              <div className="cus-con d-flex flex-colmun justify-content-start align-items-start ">
                <img src={cust7} />
                <div className="sub-cus-con d-flex flex-column col-12">
                  <h3 className="food-name ">Essam Ali</h3>
                  <h3 className="food-item">Happy Customer</h3>
                </div>
              </div>
              <div className=" d-flex  m-0 flex-column justify-content-start align-items-start ">
                <p className="loren">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elittne
                  adipisicing elit Lorem.
                </p>
                <div className="d-flex gap-0">
                  <FontAwesomeIcon
                    icon={faStar}
                    className="star_views P_star"
                  />
                  <FontAwesomeIcon icon={faStar} className="star_views" />
                  <FontAwesomeIcon icon={faStar} className="star_views" />
                  <FontAwesomeIcon icon={faStar} className="star_views" />
                  <FontAwesomeIcon icon={faStar} className="star_views" />
                </div>
              </div>
            </div>
          </SwiperSlide>
         
        </Swiper>
      </div>
    </>
  );
}
