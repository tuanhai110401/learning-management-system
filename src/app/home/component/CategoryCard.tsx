import React from "react";
import { Astrology, Development, Marketing, Physics } from "../../../svg";

type CategoryProps = {
  title: string;
  course: number;
};
const icons: { [title: string]: JSX.Element } = {
  Astrology: <Astrology />,
  Development: <Development />,
  Marketing: <Marketing />,
  Physics: <Physics />,
};
export default function CategoryCard({ title, course }: CategoryProps) {
  const getCategoryIcon = (title: string): JSX.Element => {
    return icons[title];
  };
  return (
    <div className="flex flex-col justify-center items-center xl:w-[315px] lg:w-[226px] md:w-[206px] w-[206px] h-[224px] xl:px-[93px] xl:py-[24px] rounded-[16px] border-[1px] border-[#E2E8F0] shadow-custom">
      <div className="h-[100px] w-[100px] rounded-[100px] bg-[#E0F2FE] flex justify-center items-center">
        {getCategoryIcon(title)}
      </div>
      <p className="text-[20px] my-[10px] text-[#0F172A] font-[600] leading-[150%]">
        {title}
      </p>
      <p className="whitespace-nowrap text-[16px] text-[#334155] font-[400] leading-[160%]">{`${course} Courses`}</p>
    </div>
  );
}
