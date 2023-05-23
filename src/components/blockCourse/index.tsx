import style from "./blockCourse.module.css";

interface blockCourse {
  icon?: JSX.Element;
  image?: JSX.Element;
  header?: string;
  description?: string;
}

const BlockCourse = (props: blockCourse) => {
  return (
    <div className="w-1/3">
      <div
        className={`h-[38rem] mr-8 py-8 px-6 bg-white rounded-3xl ${style.block}`}
      >
        {props.icon || props.image}
        <h1 className="text-3xl my-8 uppercase font-semibold pt-4">
          {props.header}
        </h1>
        <p className="opacity-80 text-[1.8rem]">{props.description}</p>
      </div>
    </div>
  );
};

export default BlockCourse;
