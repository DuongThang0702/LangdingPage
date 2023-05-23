import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import style from "./popularCourse.module.css";
import Image from "next/image";
import { faBook, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const popularCours = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: (
      <button
        type="button"
        className="slick-prev slick-arrow cursor-pointer"
      ></button>
    ),
    nextArrow: (
      <button
        type="button"
        className="slick-next slick-arrow cursor-pointer absolute right-0"
      ></button>
    ),
    autoplay: true,
    autoSpeed: 1000,
  };
  return (
    <div
      className="popularCourse w-full h-[70rem] text-center bg-[#eee] pt-[8rem]"
      id="popularCourse"
    >
      <div className="header popularCourse__header flex justify-center items-center flex-col">
        <h1 className="text-6xl font-bold text-[#2E2F42] mb-9">
          {"Các Môn Chuyên Ngành (Phần Mềm)"}
        </h1>
        <p className="w-1/2 text-[1.8rem] mb-10 text-[#2E2F42]">
          Chuyên ngành Ứng dụng phần mềm của Cao Đẳng Việt Mỹ hướng tới mục tiêu
          đào tạo những chuyên viên chuyên sâu lập trình JAVA hoặc C#, đồng thời
          có thể trở thành các chuyên viên kiểm thử phần mềm chuyên nghiệp.
        </p>
      </div>
      <div className="w-[120rem] m-auto h-[28rem] relative">
        <Slider {...settings} className="popularCourse-list relative my-4">
          <div className={`${style.slick_slide}`}>
            <div
              className={`${style.popularCourse_item} bg-white rounded-3xl relative`}
            >
              <Image
                width={280}
                height={280}
                src="/ImgPopular1.jpg"
                alt="Image"
                className={`${style.popularCourse_img} rounded-3xl mt-4`}
              />
              <h2 className="font-bold text-[1.6rem] ml-[-3rem] mt-[1rem] text-[#303030]">
                {"Lập Trình Hướng Đối Tượng"}
              </h2>
              <div className="popularCourse-statitic flex w-[25.5rem] justify-between absolute bottom-[2rem]">
                <Image
                  width={280}
                  height={280}
                  src="/ImgStar.jpg"
                  alt="Image"
                  className={`${style.popularCourse_img__star}`}
                />
                <ul className="popularCourse-amount flex">
                  <li className="popularCourse-amount__item flex items-center mr-6">
                    <span className="w-[3.2rem] h-[3.2rem] flex justify-center items-center bg-[#525FE1] rounded-full">
                      {/* <FaBookOpen className="text-[1.6rem] text-white" /> */}
                      <FontAwesomeIcon className="text-white" icon={faBook} />
                    </span>
                    <span className="ml-3">38</span>
                  </li>
                  <li className="popularCourse-amount__item flex items-center">
                    <span className="w-[3.2rem] h-[3.2rem] flex justify-center items-center bg-[#525FE1] rounded-full">
                      {/* <FaUser className="text-[1.6rem] text-white" /> */}
                      <FontAwesomeIcon className="text-white" icon={faUser} />
                    </span>
                    <span className="ml-3">80</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={`${style.slick_slide}`}>
            <div
              className={`${style.popularCourse_item} bg-white rounded-3xl relative`}
            >
              <Image
                width={280}
                height={280}
                src="/ImgPopular2.jpg"
                alt="Image"
                className={`${style.popularCourse_img} rounded-3xl mt-4`}
              />
              <h2 className="font-bold text-[1.6rem] ml-[-6rem] mt-[1rem] text-[#303030]">
                {"Cơ Sở Dữ Liệu (My SQL)"}
              </h2>
              <div className="popularCourse-statitic flex w-[25.5rem] justify-between absolute bottom-[2rem]">
                <Image
                  width={280}
                  height={280}
                  src="/ImgStar.jpg"
                  alt="Image"
                  className={`${style.popularCourse_img__star}`}
                />
                <ul className="popularCourse-amount flex">
                  <li className="popularCourse-amount__item flex items-center mr-6">
                    <span className="w-[3.2rem] h-[3.2rem] flex justify-center items-center bg-[#525FE1] rounded-full">
                      {/* <FaBookOpen className="text-[1.6rem] text-white" /> */}
                      <FontAwesomeIcon className="text-white" icon={faBook} />
                    </span>
                    <span className="ml-3">32</span>
                  </li>
                  <li className="popularCourse-amount__item flex items-center">
                    <span className="w-[3.2rem] h-[3.2rem] flex justify-center items-center bg-[#525FE1] rounded-full">
                      {/* <FaUser className="text-[1.6rem] text-white" /> */}
                      <FontAwesomeIcon className="text-white" icon={faUser} />
                    </span>
                    <span className="ml-3">24</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={`${style.slick_slide}`}>
            <div
              className={`${style.popularCourse_item} bg-white rounded-3xl relative`}
            >
              <Image
                width={280}
                height={280}
                src="/ImgPopular3.jpg"
                alt="Image"
                className={`${style.popularCourse_img} rounded-3xl mt-4`}
              />
              <h2 className="font-bold text-[1.6rem] ml-[-3rem] mt-[1rem] text-[#303030]">
                {"Phần Cứng & Mạng Máy Tính"}
              </h2>
              <div className="popularCourse-statitic flex w-[25.5rem] justify-between absolute bottom-[2rem]">
                <Image
                  width={280}
                  height={280}
                  src="/ImgStar.jpg"
                  alt="Image"
                  className={`${style.popularCourse_img__star}`}
                />
                <ul className="popularCourse-amount flex">
                  <li className="popularCourse-amount__item flex items-center mr-6">
                    <span className="w-[3.2rem] h-[3.2rem] flex justify-center items-center bg-[#525FE1] rounded-full">
                      {/* <FaBookOpen className="text-[1.6rem] text-white" /> */}
                      <FontAwesomeIcon className="text-white" icon={faBook} />
                    </span>
                    <span className="ml-3">23</span>
                  </li>
                  <li className="popularCourse-amount__item flex items-center">
                    <span className="w-[3.2rem] h-[3.2rem] flex justify-center items-center bg-[#525FE1] rounded-full">
                      {/* <FaUser className="text-[1.6rem] text-white" /> */}
                      <FontAwesomeIcon className="text-white" icon={faUser} />
                    </span>
                    <span className="ml-3">56</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={`${style.slick_slide}`}>
            <div
              className={`${style.popularCourse_item} bg-white rounded-3xl relative`}
            >
              <Image
                width={280}
                height={280}
                src="/ImgPopular4.jpg"
                alt="Image"
                className={`${style.popularCourse_img} rounded-3xl mt-4`}
              />
              <h2 className="font-bold text-[1.6rem] ml-[-2.2rem] mt-[1rem] text-[#303030]">
                {"Cấu Trúc Dữ Liệu & Giải Thuật"}
              </h2>
              <div className="popularCourse-statitic flex w-[25.5rem] justify-between absolute bottom-[2rem]">
                <Image
                  width={280}
                  height={280}
                  src="/ImgStar.jpg"
                  alt="Image"
                  className={`${style.popularCourse_img__star}`}
                />
                <ul className="popularCourse-amount flex">
                  <li className="popularCourse-amount__item flex items-center mr-6">
                    <span className="w-[3.2rem] h-[3.2rem] flex justify-center items-center bg-[#525FE1] rounded-full">
                      {/* <FaBookOpen className="text-[1.6rem] text-white" /> */}
                      <FontAwesomeIcon className="text-white" icon={faBook} />
                    </span>
                    <span className="ml-3">84</span>
                  </li>
                  <li className="popularCourse-amount__item flex items-center">
                    <span className="w-[3.2rem] h-[3.2rem] flex justify-center items-center bg-[#525FE1] rounded-full">
                      {/* <FaUser className="text-[1.6rem] text-white" /> */}
                      <FontAwesomeIcon className="text-white" icon={faUser} />
                    </span>
                    <span className="ml-3">61</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={`${style.slick_slide}`}>
            <div
              className={`${style.popularCourse_item} bg-white rounded-3xl relative`}
            >
              <Image
                width={280}
                height={280}
                src="/ImgPopular5.jpg"
                alt="Image"
                className={`${style.popularCourse_img} rounded-3xl mt-4`}
              />
              <h2 className="font-bold text-[1.6rem] ml-[-1rem] mt-[1rem] text-[#303030]">
                {"Quy Trình Phát Triển Phần Mềm"}
              </h2>
              <div className="popularCourse-statitic flex w-[25.5rem] justify-between absolute bottom-[2rem]">
                <Image
                  width={280}
                  height={280}
                  src="/ImgStar.jpg"
                  alt="Image"
                  className={`${style.popularCourse_img__star}`}
                />
                <ul className="popularCourse-amount flex">
                  <li className="popularCourse-amount__item flex items-center mr-6">
                    <span className="w-[3.2rem] h-[3.2rem] flex justify-center items-center bg-[#525FE1] rounded-full">
                      {/* <FaBookOpen className="text-[1.6rem] text-white" /> */}
                      <FontAwesomeIcon className="text-white" icon={faBook} />
                    </span>
                    <span className="ml-3">54</span>
                  </li>
                  <li className="popularCourse-amount__item flex items-center">
                    <span className="w-[3.2rem] h-[3.2rem] flex justify-center items-center bg-[#525FE1] rounded-full">
                      {/* <FaUser className="text-[1.6rem] text-white" /> */}
                      <FontAwesomeIcon className="text-white" icon={faUser} />
                    </span>
                    <span className="ml-3">49</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default popularCours;
