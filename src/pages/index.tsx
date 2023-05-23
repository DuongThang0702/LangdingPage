import React from "react";
import Section1 from "./section1";
import Section2 from "./section2";
import BackToTop from "@/components/backToTop";

const Main = () => {
  return (
    <>
      <BackToTop />
      <Section1 />
      <Section2 />
    </>
  );
};

export default Main;
