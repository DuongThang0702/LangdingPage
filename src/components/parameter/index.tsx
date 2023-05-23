const Parameters = () => {
  return (
    <>
      <div className="w-full h-[17rem] bg-sky-950 py-8">
        <div>
          <div
            id="parameters"
            className={`container flex justify-between py-12`}
          >
            <div className="flex flex-col gap-4 font-bold text-center tracking-wide text-white text-3xl">
              <span className="text-7xl font-bold">+20.000</span>
              Đã Tốt Nghiệp
            </div>
            <div className="bg-white w-1"></div>

            <div className="flex flex-col gap-4 font-bold text-center tracking-wide text-white text-3xl">
              <span className="text-7xl font-bold">+200</span>
              Giảng Viên Có Kinh Nghiệm
            </div>
            <div className="bg-white w-1"></div>
            <div className="flex flex-col gap-4 font-bold text-center tracking-wide text-white text-3xl">
              <span className="text-7xl font-bold">100%</span>
              Cơ Hội Việc Làm
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Parameters;
