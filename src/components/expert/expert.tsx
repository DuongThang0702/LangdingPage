import React from "react";
import style from "./expert.module.css";
import Image from "next/image";
// import ImgExpert1 from "../../../../public/expert1.jpg";
// import ImgExpert2 from "../../../../public/expert2.jpg";
// import ImgExpert3 from "../../../../public/expert3.jpg";
// import ImgExpert4 from "../../../../public/expert4.jpg";

const Expert = () => {
  const expertDes =
    "Tận tâm, có kinh nghiệm làm dự án tại các doanh nghiệp lớn.";
  return (
    <>
      <div
        className="expert flex justify-center items-center m-auto pb-20 bg-[#082F49] h-[60rem]"
        id="teacher"
      >
        <div className="expert__content w-[35%]">
          <div className="header expert__title">
            <h1 className="text-6xl font-bold text-[#FFF] my-9 leading-[5rem]">
              {"Giảng Viên Có Kinh Nghiệm & Chuyên Môn Cao"}
            </h1>
          </div>
          <p className="expert__des text-[1.8rem] text-[#8F959B] w-[50rem] my-6 leading-9">
            {expertDes}
          </p>
        </div>
        <div className="flex">
          <div className="expert-img h-[30rem] w-[20rem] rounded-3xl ml-[4rem] relative text-center">
            <Image
              width={200}
              height={300}
              src="/expert1.jpg"
              alt="Image"
              className={`rounded-3xl w-[20rem] h-[30rem] ${style.expert_img}`}
            />
            <p className="absolute bottom-[-14%] text-white text-[2rem]">
              {"TS. Trần Công Mua"}
            </p>
            <p className="absolute bottom-[-37%] text-white text-[1.4rem]">
              {
                "Giảng viên chuyên ngành công nghệ thông tin, chuyên ngành Website"
              }
            </p>
          </div>
          <div className="expert-img h-[30rem] w-[20rem] rounded-3xl ml-[4rem] relative text-center">
            <Image
              width={200}
              height={300}
              src="/expert2.jpg"
              alt="Image"
              className={`rounded-3xl w-[20rem] h-[30rem] ${style.expert_img}`}
            />
            <p className="absolute bottom-[-14%] text-white text-[2rem]">
              {"TS. Huỳnh Tấn Dũng"}
            </p>
            <p className="absolute bottom-[-37%] text-white text-[1.4rem]">
              {
                "Giảng viên chuyên ngành công nghệ thông tin, phụ trách khoa Quản Trị"
              }
            </p>
          </div>
          <div className="expert-img h-[30rem] w-[20rem] rounded-3xl ml-[4rem] relative text-center">
            <Image
              width={200}
              height={300}
              src="/expert3.jpg"
              alt="Image"
              className={`rounded-3xl w-[20rem] h-[30rem] ${style.expert_img}`}
            />
            <p className="absolute bottom-[-14%] text-white text-[2rem] text-center">
              {"TS. Nguyễn Huỳnh"}
            </p>
            <p className="absolute bottom-[-30%] text-white text-[1.4rem]">
              {"Giảng viên Thiết kế đồ hoạ tại Khoa Thiết Kế"}
            </p>
          </div>
          <div className="expert-img h-[30rem] w-[20rem] rounded-3xl ml-[4rem] relative text-center">
            <Image
              width={200}
              height={300}
              src="/expert4.jpg"
              alt="Image"
              className={`rounded-3xl w-[20rem] h-[30rem] ${style.expert_img}`}
            />
            <p className="absolute bottom-[-24%] text-white text-[2rem]">
              {"TS. Nguyễn Thành Thiên Kim"}
            </p>
            <p className="absolute bottom-[-40%] text-white text-[1.4rem]">
              {"Giảng viên Thiết kế đồ hoạ tại Khoa Thiết Kế"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Expert;
