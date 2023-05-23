import React, { Component, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import style from "./browseCourse.module.css";
import Image from "next/image";

const BrowseCourse = () => {
  const contentHeader =
    "Tại Cao Đẳng Việt Mỹ, chuyên ngành Lập trình Web và Ứng dụng phần mềm đón đầu các xu thế mới nhất trong công nghệ thông tin, trang bị cho người học những kỹ năng, kiến thức và công nghệ mới nhất để xây dựng các dự án một cách chuyên nghiệp. Bạn sẽ được học tập trong một môi trường chuyên nghiệp, năng động và giàu tính thực tiễn.";
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    autoSpeed: 1500,
  };

  const items = [
    "Ngôn Ngữ Lập Trình",
    "Thiết Kế Phần Mêm",
    "Cơ Sở Dữ Liệu",
    "Phát Triển Phần Mềm",
    "Kiểm Thử Phần Mềm",
    "Quản Lý Dự Án",
  ];

  return (
    <>
      <div
        className="browseCourse w-full text-center mb-[5rem] mt-[7rem]"
        id="education program"
      >
        <div className="header browseCourse__header flex justify-center items-center flex-col">
          <h1 className="text-6xl font-bold text-[#2E2F42] my-9">
            {"Chương Trình Giảng Dạy"}
          </h1>
          <p className="text-[1.8rem] text-[#8F959B] w-1/2">
            {contentHeader}
          </p>
        </div>
      </div>
      <div className="w-[120rem] mx-auto mb-[12rem]">
        <Slider {...settings} className={`${style.slick_list}`}>
          {items.map((item: string, index: number) => (
            <div
              key={index}
              className={`${style.course_item} mb-[4rem] rounded-2xl`}
            >
              <Image
                className={style.course_img}
                src={`/course${index}.png`}
                width={200}
                height={150}
                alt="Image"
              />
              <span className="course_name font-bold mt-5 text-[1.4rem] text-[#2E2F42]">
                {item}
              </span>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default BrowseCourse;
