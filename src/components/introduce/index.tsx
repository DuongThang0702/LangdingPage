import { faWindowRestore } from "@fortawesome/free-regular-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Section2 = () => {
  return (
    <div className="py-28 bg-[#eee]" id='overview'>
      <div className="container flex flex-col py-[8rem]">
        <div className="block1 flex flex-col" style={{ marginRight: "-4rem" }}>
          <div className="w-full mb-[4rem] text-center flex flex-col items-center">
            <h1 className="text-6xl font-bold flex leading-4 flex-col text-[#2E2F42] mb-[4rem]">
              Tổng Quan Ngành Công Nghệ Thông Tin
            </h1>
            <p className="text-[1.8rem] py-8 text-center">
              Công nghệ thông tin đã thay đổi cách thức làm việc, giao tiếp và
              giải quyết vấn đề của con người. Thiếu hụt nhân sự luôn là bài
              toán nan giải cho thị trường Công Nghệ Thông Tin. Vì vậy đây là
              một ngành đầy tiềm năng với nhiều cơ hội việc làm và thu nhập hấp
              dẫn.
            </p>
          </div>
          {/* <div className="w-1/15"></div> */}
          <div className="flex">
            <div className="w-1/2 mr-20 bg-white px-12 py-20 rounded-3xl flex flex-col items-center">
              <FontAwesomeIcon
                icon={faLaptopCode}
                style={{ color: "#fff", backgroundColor: "#9648FE" }}
                className="text-[4rem] p-6 rounded-3xl"
              />
              <h1 className="text-4xl font-bold py-4 text-[#2E2F42] mt-[3rem]">
                Ứng Dụng Phần Mềm
              </h1>
              <p className="text-[1.8rem] py-8 text-justify">
                Ứng dụng phần mềm là một ngành liên quan đến việc phát triển,
                triển khai và duy trì các ứng dụng phần mềm cho các tổ chức,
                doanh nghiệp hoặc cá nhân. Ứng dụng phần mềm là một trong các
                nhóm ngành Công nghệ thông tin (CNTT) đang cần rất nhiều nhân
                lực trong hiên tại và tương lai. Chuyên ngành Ứng dụng phần mềm
                của Cao Đẳng Việt Mỹ hướng tới mục tiêu đào tạo những chuyên
                viên chuyên sâu lập trình JAVA hoặc C#, đồng thời có thể trở
                thành các chuyên viên kiểm thử phần mềm chuyên nghiệp.
              </p>
            </div>
            <div className="w-1/2 mr-20 bg-white px-12 py-20 rounded-3xl flex flex-col items-center">
              <FontAwesomeIcon
                icon={faWindowRestore}
                style={{ color: "#fff", backgroundColor: "#FE5FA7" }}
                className="text-[4rem] p-6 rounded-3xl"
              />
              <h1 className="text-4xl font-bold py-4 text-[#2E2F42] mt-[3rem]">
                Lập Trình Web
              </h1>
              <p className="text-[1.8rem] py-8 text-justify">
                Trong thời đại số hóa hiện nay, lập trình website trở thành một
                trong những ngành hot. Đặc biệt tại doanh nghiệp, website trở
                thành một thành phần không thể thiếu, là công cụ của doanh
                nghiệp để giới thiệu hình ảnh, quảng bá sản phẩm của doanh
                nghiệp với khách hàng, đối tác trong và ngoài nước thông qua
                internet, và kinh doanh trực tuyến.
              </p>
            </div>
          </div>
        </div>
        {/* <div className="block2 flex mt-12" style={{ marginRight: "-4rem" }}> */}
        {/* <div className="w-4/12"></div>
        <div className="w-2/12 mr-20 bg-white px-4 pb-12 pt-8 rounded-xl">
          <Image
            src="/tutors.png"
            width={40}
            height={70}
            alt="Picture of the author"
          />
          <h1 className="text-2xl font-bold py-4">Best Tutors</h1>
          <p className="text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            similique accusamus error sunt et rerum, facere eum modi iusto
            excepturi?
          </p>
        </div>
        <div className="w-2/12 mr-20 bg-white px-4 pb-12 pt-8 rounded-xl">
          <Image
            src="/tutors.png"
            width={40}
            height={70}
            alt="Picture of the author"
          />
          <h1 className="text-2xl font-bold py-4">Best Tutors</h1>
          <p className="text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            similique accusamus error sunt et rerum, facere eum modi iusto
            excepturi?
          </p>
        </div>
        <div className="w-2/12 mr-20 bg-white px-4 pb-12 pt-8 rounded-xl">
          <Image
            src="/tutors.png"
            width={40}
            height={70}
            alt="Picture of the author"
          />
          <h1 className="text-2xl font-bold py-4">Best Tutors</h1>
          <p className="text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            similique accusamus error sunt et rerum, facere eum modi iusto
            excepturi?
          </p>
        </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Section2;
