"use client";
import React from "react";
import CustomAccordion from "./Accordion";
import { Play } from "@/svg";
import { ActionIcon } from "@mantine/core";
export default function Syllabus() {
  return (
    <div className="lg:w-[840px]">
      <CustomAccordion
        chevronLeft="left"
        value="chapter_1"
        title="Introduction to UX Design"
        subTitle="5 Lessons"
      >
        <>
          <div className="flex gap-2 border-b border-[#00000019] p-4 hover:ml-2 transition-all duration-300">
            <ActionIcon
              variant="filled"
              color="#020617"
              radius="lg"
              aria-label="Settings"
              p={4}
            >
              <Play color="#ffffff" />
            </ActionIcon>
            <h4 className="flex-1 text-[#0F172A] text-[16px] font-[400] leading-[160%]">
              What is User Experience (UX) Design?
            </h4>
            <span className="flex-none text-[#64748B] text-[16px] font-[400] leading-[160%]">
              10min
            </span>
          </div>
          <div className="flex gap-2 border-b border-[#00000019] p-4 hover:ml-2 transition-all duration-300">
            <ActionIcon
              variant="filled"
              color="#020617"
              radius="lg"
              aria-label="Settings"
              p={4}
            >
              <Play color="#ffffff" />
            </ActionIcon>
            <h4 className="flex-1 text-[#0F172A] text-[16px] font-[400] leading-[160%]">
              What is User Experience (UX) Design?
            </h4>
            <span className="flex-none text-[#64748B] text-[16px] font-[400] leading-[160%]">
              10min
            </span>
          </div>
        </>
      </CustomAccordion>
    </div>
  );
}
