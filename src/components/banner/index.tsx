import style from "./banner.module.css";
import Image from "next/image";

const Banner = () => {
  const item = [
    "overview",
    "education program",
    "teacher",
    "partner",
    "contact us",
  ];

  return (
    <>
      <div className="wrapper">
        <nav className="flex justify-between">
          <div>
            <Image
              src="/logo.png"
              width={164}
              height={75}
              alt="Picture of the author"
            />
          </div>
          <div className="flex items-center">
            {item.map((item: String, index: number) => (
              <div
                key={index}
                className={`${style.el} text-2xl pr-14 font-bold opacity-70 text-slate-600 uppercase tracking-wider agli cursor-pointer `}
              >
                <a href= {`#${item}`}>{item}</a>
               
              </div>
            ))}
          </div>
        </nav>
      </div>
      <div className="flex w-full mx-auto mb-[4rem]">
        <div
          className="w-1/2"
          // style={{ marginTop: "-8rem" }}
        >
          <Image src='/banner.png' alt="Picture of the author" width={1000} height={1000}/>
        </div>
        <div className="banner-title flex flex-col items-center justify-center w-1/2">
          <h1 className="text-5xl font-bold">{"CAO ĐẲNG VIỆT MỸ"}</h1>
          <h1 className="text-3xl tracking-[1rem] my-[8rem]">
            {"CÔNG NGHỆ THÔNG TIN"}
          </h1>
          <div className="w-full font-bold">
            <div className="w-full ml-[8rem]">
              <span className="text-6xl">CHỌN</span>
              <span className="text-6xl text-[#9648FE]"> KHÁC BIỆT </span>
              <span className="text-6xl text-black"> CHỌN </span>
              <span className="text-6xl text-[#DC213A]"> THÀNH CÔNG</span>
            </div>
          </div>
          <p className="text-[1.8rem] w-[50rem] text-center mt-[8rem] text-[#8F959B]">
            {
              "Công nghệ thông tin là vua của mọi ngàng. Nếu bạn có đam mê, hãy cùng chúng tôi khám phá."
            }
          </p>
        </div>
      </div>
    </>
  );
};

export default Banner;
