import { Avatar, Group, Text } from "@mantine/core";
import React from "react";
import { Play, GraduationHat, Award } from "@/svg";
export function UserButton() {
  return (
    <Group className="my-6">
      <Avatar
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
        radius="xl"
      />

      <div className="flex-1 flex gap-1">
        <span className="text-[14px] leading-[150%] text-[#334155]">
          Created by
        </span>
        <span className="text-[14px] leading-[150%] text-[#2563EB]">
          Ronal Richards
        </span>
      </div>
    </Group>
  );
}

export const CardUser = () => {
  return (
    <>
      <h4 className="text-[#0F172A] text-[20px] font-[600] ">Instructor</h4>

      <div className="my-6 flex flex-col gap-4">
        <h4 className="text-[#2563EB] text-[20px] font-[600] leading-[150%]">
          Ronald Richards
        </h4>
        <p className="text-[#334155] text-[16px] font-[400] leading-[160%]">
          UI/UX Designer
        </p>
        <div className="flex gap-3">
          <Avatar
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
            radius="xl"
            size="xl"
          />
          <div className="flex flex-col gap-1">
            <div className="flex gap-2">
              <Award />{" "}
              <span className="text-[#0F172A] text-[14px] font-[400] leading-[150%]">
                40,445 Reviews
              </span>
            </div>
            <div className="flex gap-2">
              <GraduationHat />{" "}
              <span className="text-[#0F172A] text-[14px] font-[400] leading-[150%]">
                500 Students
              </span>
            </div>
            <div className="flex gap-2">
              <Play />{" "}
              <span className="text-[#0F172A] text-[14px] font-[400] leading-[150%]">
                15 Courses
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
