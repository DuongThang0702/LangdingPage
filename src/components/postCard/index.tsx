import style from "./postCard.module.css";

interface Props {
  icon: JSX.Element;
  classContainer: string;
  header: string;
  description: string;
}

const Block = (Props: Props) => {
  return (
    <>
      <li className={`${Props.classContainer} ${style.opportunity_shadow}`}>
        {Props.icon}
        <h2 className="font-bold text-3xl my-10">{Props.header}</h2>
        <p className="text-[1.8rem] text-[#8F959B] text-justify"> {Props.description}</p>
      </li>
    </>
  );
};

export default Block;
