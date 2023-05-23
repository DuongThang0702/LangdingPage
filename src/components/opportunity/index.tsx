import React from "react";
import { Fragment } from "react"
import style from "./opportunity.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faUser, faDatabase, faGear, faListCheck } from "@fortawesome/free-solid-svg-icons";

const Opportunity = () => {
    return (
        <Fragment>
            <div className="opportunity flex flex-col items-center py-[14rem]" id="opportunity">
                <div className="flex w-[150rem] items-center mb-14">
                    <div className="w-1/2 ml-12">
                        <h1 className="text-6xl font-bold text-[#2E2F42] text-center mb-8">
                            {"Cơ hội nghề nghiệp?"}
                        </h1>
                        <p className="text-[1.8rem] text-[#8F959B] text-center">
                            {"Cơ hội nghề nghiệp khi học ngành Ứng dụng phần mềm"}
                        </p>
                    </div>
                    <ul className="flex justify-end w-1/2">
                        <li className={`bg-white w-1/2 ml-12 p-10 rounded-3xl ${style.opportunity_shadow}`}>
                            <FontAwesomeIcon icon={faCode} className="text-5xl bg-[#9648FE] text-white p-6 rounded-2xl" />
                            <h2 className="font-bold text-3xl my-10 text-[#2E2F42]">
                                {"Kiểm Thử Phần Mềm"}
                            </h2>
                            <p className="text-[1.8rem] text-[#8F959B] text-justify">
                                {"Chuyên gia kiểm thử phần mềm có nhiệm vụ kiểm tra phần mềm để đảm bảo tính đúng đắn và độ tin cậy."}
                            </p>
                        </li>
                        <li className={`bg-white w-1/2 ml-12 p-10 rounded-3xl ${style.opportunity_shadow}`}>
                            <FontAwesomeIcon icon={faUser} className="text-5xl bg-[#A7CE4A] text-white p-6 rounded-2xl" />
                            <h2 className="font-bold text-3xl my-10 text-[#2E2F42]">
                                {"Giảng Viên, Nhà Nghiên Cứu"}
                            </h2>
                            <p className="text-[1.8rem] text-[#8F959B] text-justify">
                                {"Học viên có thể học lên cao hơn và trở thành giảng viên hoặc nhà nghiên cứu trong lĩnh vực UDPM."}
                            </p>
                        </li>
                    </ul>
                </div>
                <div className="flex w-[150rem] items-center">
                    <ul className="flex justify-end">
                        <div className="w-1/3 flex justify-end">
                            <li className={`bg-white ml-12 p-10 rounded-3xl ${style.opportunity_shadow}`}>
                                <FontAwesomeIcon icon={faDatabase} className="text-5xl bg-[#4F94DF] text-white p-6 rounded-2xl" />
                                <h2 className="font-bold text-3xl my-10 text-[#2E2F42]">
                                    {"Nhà Phát Triển Phần Mềm"}
                                </h2>
                                <p className="text-[1.8rem] text-[#8F959B] text-justify">
                                    {"Các nhà phát triển phần mềm có nhiệm vụ phát triển, kiểm thử và bảo trì phần mềm cho các hệ thống máy tính."}
                                </p>
                            </li>
                        </div>
                        <li className={`bg-white w-1/3 ml-12 p-10 rounded-3xl ${style.opportunity_shadow}`}>
                            <FontAwesomeIcon icon={faListCheck} className="text-5xl bg-[#FE5FA7] text-white p-6 rounded-2xl" />
                            <h2 className="font-bold text-3xl my-10 text-[#2E2F42]">
                                {"Quản Lý Dự Án Phần Mềm"}
                            </h2>
                            <p className="text-[1.8rem] text-[#8F959B] text-justify">
                                {"Quản lý dự án có nhiệm vụ quản lý các dự án phần mềm, lập kế hoạch và giám sát tiến độ của công việc."}
                            </p>
                        </li>
                        <li className={`bg-white w-1/3 ml-12 p-10 rounded-3xl ${style.opportunity_shadow}`}>
                            <FontAwesomeIcon icon={faGear} className="text-5xl bg-[#F66843] text-white p-6 rounded-2xl" />
                            <h2 className="font-bold text-3xl my-10 text-[#2E2F42]">
                                {"Nhà Thiết Kế Phần Mềm"}
                            </h2>
                            <p className="text-[1.8rem] text-[#8F959B] text-justify">
                                {"Nhà thiết kế phần mềm có nhiệm vụ thiết kế các giao diện người dùng, các hệ thống và các tính năng phần mềm."}
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </Fragment>
    );
};

export default Opportunity;