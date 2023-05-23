import Image from "next/image";
import style from "./footer.module.css";
const Footer = () => {
  return (
    <>
      <div id="contact us" className="w-full py-16" style={{ backgroundColor: "#2F384A" }}>
        <div className="wrapper flex flex-col">
          <div className="flex justify-center">
            <Image
              src="/logowhite.png"
              width={222}
              height={108}
              alt="logo"
              className="pr-12 flex items-center"
            />
            <div className="mr-12  w-0.5 bg-white"></div>
            <div className="flex items-center">
              <div className="flex flex-col">
                <div className="text-3xl text-white font-bold">
                  Choose difference
                </div>
                <span className="text-3xl text-white font-bold">
                  choose success
                </span>
              </div>
            </div>
          </div>
          <div className="text-center pt-20 leading-5 font-medium">
            <h1 className="text-5xl text-gray-400">
              Subscribe to get out Newsletter
            </h1>
          </div>
          <div className="w-3/5 bg-none mx-auto mt-12 rounded-3xl text-center text-[1.8rem]">
            <input
              type="text"
              className=" border w-3/6 bg-inherit outline-none text-[1.8rem] px-10 py-3 rounded-3xl font-bold mr-4 "
              placeholder="Your email"
            />
            <button
              className={`p-4 font-bold text-white rounded-2xl ${style.bg_admin}`}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
