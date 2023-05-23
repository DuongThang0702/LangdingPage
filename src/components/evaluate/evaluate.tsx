import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import style from "./evaluate.module.css";
import Image from "next/image";
// import ImgEvaluate1 from "../../../../public/student4.png";
// import ImgEvaluate2 from "../../../../public/student5.png";
// import ImgEvaluate3 from "../../../../public/student6.png";

const Evaluate = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoSpeed: 1500,
  };
  return (
    <>
      <div className="evaluate text-center bg-[#eee] py-[8rem]" id="evaluate">
        <div className="evaluate__header mb-[4rem]">
          <h1 className="text-6xl font-bold text-[#2E2F42] py-9 leading-[5rem]">
            {"Đánh Giá Của Sinh Viên"}
          </h1>
        </div>
        <div className="w-[60rem] h-[60rem] m-auto">
          <Slider {...settings} className="evaluateStudent-list">
            <div className={`${style.slick_slide} evaluateStudent-item mb-8`}>
              <Image
                width={300}
                height={300}
                className="evaluateStudent-img rounded-full w-[30rem] h-[30rem]"
                src="/student4.png"
                alt="Image"
              />
              <div className="evaluateStudent-infor flex flex-col my-[4rem]">
                <span className="font-bold text-[1.8rem] text-[#2E2F42]">
                  {"Nguyễn Văn A"}
                </span>
                <span className="text-[#8F959B] text-[1.4rem]">
                  {"Quản Trị Nhà Hàng, Khách Sạn"}
                </span>
              </div>
              <div className="evaluateStudent-content font-bold text-[1.8rem] text-[#2E2F42] w-[50rem]">
                {"\" Chất lượng chuyên môn phải nói là trên cả sự mong đợi, cơ sở vật chất chuẩn 5 sao. Chương trình học áp sát thực tế, không lang mang, đáp ứng đầy đủ những tiêu chí mà doanh nghiệp cần. \""}
              </div>
            </div>
            <div className={`${style.slick_slide} evaluateStudent-item`}>
              <Image
                width={300}
                height={300}
                className="evaluateStudent-img rounded-full w-[30rem] h-[30rem]"
                src="/student5.png"
                alt="Image"
              />
              <div className="evaluateStudent-infor flex flex-col my-[4rem]">
                <span className="font-bold text-[1.8rem] text-[#2E2F42]">
                  {"Lê Thị B"}
                </span>
                <span className="text-[#8F959B] text-[1.4rem]">
                  {"Thiết Kế Thời Trang"}
                </span>
              </div>
              <div className="evaluateStudent-content font-bold text-[1.8rem] text-[#2E2F42] w-[50rem]">
                {"\" Chất lượng chuyên môn phải nói là trên cả sự mong đợi, cơ sở vật chất chuẩn 5 sao. Chương trình học áp sát thực tế, không lang mang, đáp ứng đầy đủ những tiêu chí mà doanh nghiệp cần. \""}
              </div>
            </div>
            <div className={`${style.slick_slide} evaluateStudent-item`}>
              <Image
                width={300}
                height={300}
                className="evaluateStudent-img rounded-full w-[30rem] h-[30rem]"
                src="/student6.png"
                alt="Image"
              />
              <div className="evaluateStudent-infor flex flex-col my-[4rem]">
                <span className="font-bold text-[1.8rem] text-[#2E2F42]">
                  {"Trần Văn C"}
                </span>
                <span className="text-[#8F959B] text-[1.4rem]">
                  {"Công Nghệ Thông Tin"}
                </span>
              </div>
              <div className="evaluateStudent-content font-bold text-[1.8rem] text-[#2E2F42] w-[50rem]">
                {"\" Chất lượng chuyên môn phải nói là trên cả sự mong đợi, cơ sở vật chất chuẩn 5 sao. Chương trình học áp sát thực tế, không lang mang, đáp ứng đầy đủ những tiêu chí mà doanh nghiệp cần. \""}
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Evaluate;
