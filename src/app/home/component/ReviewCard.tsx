import React from "react";
import { DoubleDot } from "../../../svg";
import Image from "next/image";

interface ReviewProp {
  description: string;
  subTitle: string;
  image: string;
  name: string;
}

interface ReviewCardProp {
  review: ReviewProp;
}
export default function ReviewCard({ review }: ReviewCardProp) {
  return (
    <div className="w-[380px] flex flex-col gap-2 items-start p-6 rounded-2xl select-none cursor-pointer border-[1px] border-[#E2E8F0] shadow-custom">
      <DoubleDot />
      <p className="text-black text-[16px] font-[400] leading-[160%]">
        {review.description}
      </p>
      <div className="flex gap-2">
        <div>
          <Image
            className="w-[60px] h-[60px] rounded-[100%]"
            src={review.image}
            width={100}
            height={100}
            alt="Avatar customer"
          />
        </div>
        <div>
          <p className="text-black text-[18px] font-[600] leading-[160%]">
            {review.name}
          </p>
          <p className="text-[#334155] text-[14px] font-[400] leading-[150%]">
            {review.subTitle}
          </p>
        </div>
      </div>
    </div>
  );
}
