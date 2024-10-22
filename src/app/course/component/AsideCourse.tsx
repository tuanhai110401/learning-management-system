import ButtonCustom from "@/components/Button";
import Image from "next/image";
import React from "react";

export default function AsideCourse() {
  return (
    <div className="w-full shadow-custom rounded-2xl p-6 flex flex-col gap-6 bg-white">
      <div>
        <Image
          className="rounded-lg object-cover w-full"
          src="https://res.cloudinary.com/dxaqounpg/image/upload/v1729582476/Learing%20Management%20System/courses/course-01.jpg"
          height={202}
          width={360}
          alt="banner course"
        />
      </div>
      <div className="flex gap-3">
        <span className="text-[24px] text-[#0F172A] font-[600] leading-[140%]">
          $49.5
        </span>
        <span className="text-[18px] text-[#0F172A] font-[600] leading-[160%] opacity-20 line-through">
          $99.5
        </span>
        <span className="text-[20px] text-[#16A34A] font-[600] leading-[150%]">
          50% Off
        </span>
      </div>
      <ButtonCustom
        p="10px 24px"
        height="48px"
        title="Add to card"
        color="#020617"
      />
      <ButtonCustom
        p="10px 24px"
        height="48px"
        variant="outline"
        title="Buy Now"
        color="#020617"
      />
    </div>
  );
}
