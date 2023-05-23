import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Block from "@/components/postCard";
import BlockCourse from "../blockCourse";
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
const section3 = () => {
  return (
    <>
      <div className=" pb-56 bg-[#eee] pt-[8rem] text-[#2E2F42]">
        <div className="text-center mr-8">
          <h1 className="text-6xl font-bold text-center">
            Các Môn Chuyên Ngành (Website)
          </h1>
          <p className="text-center text-[1.8rem] mb-24 w-1/2 flex aglign mx-auto mt-10">
            Tại Cao Đẳng Việt Mỹ, chuyên ngành Lập trình Web đón đầu các xu thế
            mới nhất trong công nghệ thông tin, trang bị cho người học những kỹ
            năng, kiến thức và công nghệ mới nhất để xây dựng các website một
            cách chuyên nghiệp. Bạn sẽ được học tập trong một môi trường chuyên
            nghiệp, năng động và giàu tính thực tiễn.
          </p>
        </div>
        <div className="mt-12">
          <div className="flex w-4/5 mx-auto justify-center">
            <BlockCourse
              icon={
                <FontAwesomeIcon
                  className="text-[7rem]"
                  icon={faBootstrap}
                  style={{ color: "#b00feb" }}
                />
              }
              header="Boostrap"
              description="Bootstrap là một framework CSS miễn phí sử dụng mã nguồn mở dùng cho mục đích phát triển web front-end cho thiết bị di động. 
              Bên cạnh những mẫu thiết kế kiểu chữ, biểu mẫu, nút hay thanh điều hướng bằng ngôn ngữ HTML, CSS và JavaScript, framework này còn bao gồm một số thành phần giao diện khác."
            />
            <BlockCourse
              icon={
                <FontAwesomeIcon
                  className="text-[7rem]"
                  icon={faJs}
                  style={{ color: "#ecc63c" }}
                />
              }
              header="Javascript"
              description="JavaScript là một ngôn ngữ lập trình dựa trên nguyên mẫu với cú pháp phát triển từ C. 
              Giống như C, JavaScript có khái niệm từ khóa, do đó, JavaScript gần như không thể được mở rộng. 
              Cũng giống như C, JavaScript không có bộ xử lý xuất/nhập (input/output) riêng."
            />
            <BlockCourse
              icon={
                <>
                  <FontAwesomeIcon
                    icon={faHtml5}
                    style={{ color: "#f3ee58" }}
                    className="text-[7rem] mr-4"
                  />
                  <FontAwesomeIcon
                    className="text-[7rem]"
                    icon={faCss3Alt}
                    style={{ color: "#3d7be6" }}
                  />
                </>
              }
              header="Html / CSS"
              description="Html HTML (viết tắt của từ HyperText Markup Language, hay là Ngôn ngữ Đánh dấu Siêu văn bản. 
                CSS dịch từ tiếng Anh là Cascading Style Sheets (CSS) – được dùng để miêu tả cách trình bày các tài liệu viết bằng ngôn ngữ HTML và XHTML."
            />
          </div>
        </div>
        <div className="mt-12">
          <div className="flex w-4/5 mx-auto justify-center">
            <BlockCourse
              image={
                <Image src={`/Reactjs.png`} width={70} height={30} alt="logo" />
              }
              header="Reactjs"
              description="React (hay còn được gọi là React. js hoặc ReactJS) là một thư viện JavaScript front-end mã nguồn mở 
              và miễn phí để xây dựng giao diện người dùng dựa trên các thành phần UI riêng lẻ"
            />
            <BlockCourse
              image={
                <Image src={`/Nodejs.png`} width={70} height={30} alt="logo" />
              }
              header="Nodejs"
              description="Nodejs là một hệ thống phần mềm được thiết kế để viết các ứng dụng internet có khả năng mở rộng, đặc biệt là máy chủ web. "
            />
            <BlockCourse
              image={
                <Image src={`/Nextjs.png`} width={70} height={30} alt="logo" />
              }
              header="Nextjs"
              description="Next.js là một framework dựa trên React cho phép bạn tối ưu hoá hiệu năng, hỗ trợ SEO và trải nghiệm người dùng thông qua pre-rendering: Server Side Rendering (SSR) và Static Site Generation (SSG). Ở phần này mình sẽ chia sẻ với các bạn những kiến thức cơ bản về Next.js và khi nào chúng ta nên dùng nó trong dự án."
            />
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
              header="Chuyên Ngành Web Developer"
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
              header="Chuyên Thiết Kế Website "
              description="Thực hiện công việc phát triển web tại các công ty chuyên thiết kế website cho khách hàng theo các công nghệ HTML5 CSS3, hoặc phát triển website trên các nền tảng CMS nỗi tiếng như Wordpress…"
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
                header="Bảo Trì Website"
                description="Vận hành website tại các công ty, tổ chức đang có nhiều website phục vụ hoạt động của công ty. Các công việc bao gồm xử lý sự cố, phát triển nội dung, backup, bảo trì, nâng cấp website … "
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
              header="Xây Dựng Các Trang LandingPage"
              description="Thiết kế và xây dựng các trang landing page giới thiệu sản phẩm mới cho các doanh nghiệp thường xuyên có sản phẩm mới."
            />
            <Block
              classContainer="bg-white w-1/3 ml-12 p-10 rounded-3xl"
              icon={
                <FontAwesomeIcon
                  icon={faGear}
                  className="text-5xl bg-[#F66843] text-white p-6 rounded-2xl"
                />
              }
              header="Kiểm Thử Phần Mềm"
              description="Chuyên gia kiểm thử phần mềm có nhiệm vụ kiểm tra phần mềm để đảm bảo tính đúng đắn và độ tin cậy."
            />
          </ul>
        </div>
      </div>
    </>
  );
};

export default section3;
