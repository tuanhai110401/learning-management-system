import { Rating } from "@mantine/core";
import Image from "next/image";
import React from "react";

interface InstructorProp {
  name: string;
  title: string;
  image: string;
  students: number;
  rating: number;
}
interface IProp {
  instructors: InstructorProp;
}
export default function InstructorCard({ instructors }: IProp) {
  return (
    <div className="w-[212px] p-4 flex flex-col items-start gap-4 rounded-2xl border-[1px] border-[#E2E8F0] shadow-custom cursor-pointer transform transition-transform duration-100 hover:scale-105">
      <div className="h-[132px]">
        <Image
          className="rounded-lg h-[132px] w-[177px] object-cover"
          src={instructors.image}
          width={177}
          height={132}
          alt="Instructor"
        />
      </div>
      <div className="w-full">
        <h5 className="text-center text-[18px] text-[#0F172A] font-[600] leading-[160%]">
          {instructors.name}
        </h5>
        <p className="whitespace-nowrap text-center text-[#334155] text-[14px] font-[400] leading-[150%]">
          {instructors.title}
        </p>
        <div className="bg-[#E2E8F0] w-[180px] h-[1px] my-4"></div>
        <div className="flex justify-between items-center">
          <div className="flex gap-1">
            <Rating
              value={5}
              fractions={4}
              count={1}
              size="md"
              color="#EAB308"
              readOnly
            />
            <span className="text-[#0F172A] text-[12px] font-[600]">
              {instructors.rating}
            </span>
          </div>
          <p className="text-[#334155] text-[12px] font-[600]">{`${instructors.students} Students`}</p>
        </div>
      </div>
    </div>
  );
}
