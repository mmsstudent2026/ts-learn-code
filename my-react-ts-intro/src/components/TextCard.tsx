import type { ReactElement } from "react";

type TextCardPropType = {
  heading: string;
  description: string;
  icon: ReactElement;
};

function TextCard({ heading, description, icon }: TextCardPropType) {
  return (
    <div className={` border-2 border-stone-600 p-5`}>
      {icon}
      <h1 className=" text-stone-600 font-bold text-2xl ">{heading}</h1>
      <p className=" text-stone-500">{description}</p>
    </div>
  );
}

// const TextCard : FC<TextCardPropType> = ({ heading, description }) => {
//   return (
//     <div className={` border-2 border-stone-600 p-5`}>
//       <h1 className=" text-stone-600 font-bold text-2xl ">{heading}</h1>
//       <p className=" text-stone-500">{description}</p>
//     </div>
//   );
// };

export default TextCard;
