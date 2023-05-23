import Image from "next/image";
import Style from "./webdev.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Block from "@/components/postCard";
import {
  faBootstrap,
  faJs,
  faHtml5,
  faCss3Alt,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faUser,
  faDatabase,
  faGear,
  faListCheck,
} from "@fortawesome/free-solid-svg-icons";
const Demo = () => {
  const course = ["nextjs", "reactjs", "nodejs"];
  const course2 = ["html/css", "javascript", "bootsrap"];

  return (
    <>
      <div className=" pb-56 ">
        <div className="text-center mr-8">
          <h1 className="text-6xl font-semibold text-center">
            Các môn chuyên ngành
          </h1>
          <p className="text-center text-2xl w-1/2 flex aglign mx-auto mt-8 opacity-70">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut cum
            officia ex reiciendis tempore beatae neque ipsum quibusdam
            perferendis accusantium.
          </p>
        </div>
        <div className="mt-12">
          <div className="flex w-4/5 mx-auto justify-center">
            {course2.map((item, index) => (
              <div
                key={index}
                className={`${Style.block} border-2 mr-8 py-8 px-4 border-slate-200`}
              >
                {item === "bootsrap" ? (
                  <FontAwesomeIcon
                    className="text-[7rem]"
                    icon={faBootstrap}
                    style={{ color: "#b00feb" }}
                  />
                ) : item === "javascript" ? (
                  <FontAwesomeIcon
                    icon={faJs}
                    style={{ color: "#ecc63c" }}
                    className="text-[7rem]"
                  />
                ) : item === "html/css" ? (
                  <div>
                    <FontAwesomeIcon
                      icon={faHtml5}
                      style={{ color: "#f3ee58" }}
                      className="text-[7rem] mr-4"
                    />
                    <FontAwesomeIcon
                      icon={faCss3Alt}
                      style={{ color: "#3d7be6" }}
                      className="text-[7rem]"
                    />
                  </div>
                ) : null}
                <h1
                  className={
                    item !== "reactjs"
                      ? `text-3xl my-8 uppercase font-semibold pt-4`
                      : "text-3xl mb-8 uppercase font-semibold pt-4 mt-11"
                  }
                >
                  {item}
                </h1>
                <p className="opacity-80 text-xl">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Accusantium, labore. Nihil eligendi hic quibusdam ducimus.
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12">
          <div className="flex w-4/5 mx-auto justify-center">
            {course.map((item, index) => (
              <div
                key={index}
                className={`${Style.block} border-2 mr-8 py-8 px-4 border-slate-200`}
              >
                <Image src={`/${item}.png`} width={70} height={30} alt="logo" />
                <h1
                  className={
                    item !== "reactjs"
                      ? `text-3xl my-8 uppercase font-semibold pt-4`
                      : "text-3xl mb-8 uppercase font-semibold pt-4 mt-11"
                  }
                >
                  {item}
                </h1>
                <p className="opacity-80 text-xl">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Accusantium, labore. Nihil eligendi hic quibusdam ducimus.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center py-[14rem]">
        <div className="flex w-[150rem] items-center mb-14">
          <div className="w-1/2 ml-12">
            <h1 className="text-6xl font-bold text-[#2E2F42] text-center mb-8">
              Cơ hội nghề nghiệp?
            </h1>
            <p className="text-[1.8rem] text-[#8F959B] text-center">
              Cơ hội nghề nghiệp khi học ngành lập trình website
            </p>
          </div>
          <ul className="flex justify-end w-1/2">
            <Block
              classContainer="bg-white w-1/2 ml-12 p-10 rounded-3xl"
              icon={
                <FontAwesomeIcon
                  icon={faCode}
                  className="text-5xl bg-[#9648FE] text-white p-6 rounded-2xl"
                />
              }
              header="chuyên ngành IT Web developer"
              description="Tham gia vào quá trình phát triển các dự án phần mềm với các công nghệ PHP,  Laravel, NodeJS…"
            />

            <Block
              classContainer="bg-white w-1/2 ml-12 p-10 rounded-3xl"
              icon={
                <FontAwesomeIcon
                  icon={faUser}
                  className="text-5xl bg-[#A7CE4A] text-white p-6 rounded-2xl"
                />
              }
              header="chuyên thiết kế website "
              description="thực hiện công việc phát triển web tại các công ty chuyên thiết kế website cho khách hàng theo các công nghệ HTML5 CSS3, hoặc phát triển website trên các nền tảng CMS nỗi tiếng như Wordpress…"
            />
          </ul>
        </div>
        <div className="flex w-[150rem] items-center">
          <ul className="flex justify-end">
            <div className="w-1/3 flex justify-end">
              <Block
                classContainer="bg-white ml-12 p-10 rounded-3xl"
                icon={
                  <FontAwesomeIcon
                    icon={faDatabase}
                    className="text-5xl bg-[#4F94DF] text-white p-6 rounded-2xl"
                  />
                }
                header="Bảo trì website"
                description="vận hành website tại các công ty, tổ chức đang có nhiều website phục vụ hoạt động của công ty. Các công việc bao gồm xử lý sự cố, phát triển nội dung, backup, bảo trì, nâng cấp website … "
              />
            </div>
            <Block
              classContainer="bg-white w-1/3 ml-12 p-10 rounded-3xl"
              icon={
                <FontAwesomeIcon
                  icon={faListCheck}
                  className="text-5xl bg-[#FE5FA7] text-white p-6 rounded-2xl"
                />
              }
              header="xây dựng các trang landing page"
              description="thiết kế và xây dựng các trang landing page giới thiệu sản phẩm mới cho các doanh nghiệp thường xuyên có sản phẩm mới"
            />
            <Block
              classContainer="bg-white w-1/3 ml-12 p-10 rounded-3xl"
              icon={
                <FontAwesomeIcon
                  icon={faGear}
                  className="text-5xl bg-[#F66843] text-white p-6 rounded-2xl"
                />
              }
              header="chuyên thiết kế website "
              description="Tham gia vào quá trình phát triển các dự án phần mềm với các công nghệ PHP,  Laravel, NodeJS…"
            />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Demo;
