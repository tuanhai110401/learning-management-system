import { Container, Group } from "@mantine/core";
import React from "react";

const dataStats = [
  {
    title: "250+",
    description: "Courses by our best mentors",
  },
  {
    title: "1000+",
    description: "Courses by our best mentors",
  },
  {
    title: "15+",
    description: "Courses by our best mentors",
  },
  {
    title: "2400+",
    description: "Courses by our best mentors",
  },
];
export default function SectionStats() {
  return (
    <Container
      fluid
      className="bg-[#F8FAFC] my-[60px] flex flex-wrap justify-between sm:px-[16px] xl:px-[80px] py-[40px]"
    >
      {dataStats.map((item, index) => (
        <>
          <Group
            key={index}
            justify="center"
            className="flex-col w-full md:w-auto gap-2 lg:gap-0 "
          >
            <p className="text-[32px] font-[600] leading-[130%]">
              {item.title}
            </p>
            <p className="text-[14px] font-[400] leading-[150%]">
              {item.description}
            </p>
          </Group>
          <span className=" mx-auto my-4 h-[4px] w-[180px] bg-[#E2E8F0] md:h-[55px] md:w-[4px]"></span>
        </>
      ))}
    </Container>
  );
}

//lg:mx-[80px] sm:mx-[16px]
