import BrowseCourse from "@/components/browseCourse";
import PopularCourse from "@/components/popularCourse";
import Expert from "@/components/expert/expert";
import Evaluate from "@/components/evaluate/evaluate";
import Partner from "@/components/partner/partner";
import Opportunity from "@/components/opportunity";
import CourseWeb from "@/components/courseWeb";
import Footer from "@/components/footer";

const Section2 = () => {
  return (
    <>
      <BrowseCourse />
      <PopularCourse />
      <Opportunity />
      <CourseWeb />
      <Expert />
      <Evaluate />
      <Partner />
      <Footer />
    </>
  );
};

export default Section2;
