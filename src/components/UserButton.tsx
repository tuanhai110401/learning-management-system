"use client";
import { Avatar, Group, Skeleton, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import { Play, GraduationHat, Award } from "@/svg";
import { getInstructor } from "@/utils/supabase/handlers/courses";
export function UserButton({ name }: { name?: string }) {
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
          {name ? name : "Ronal Richards"}
        </span>
      </div>
    </Group>
  );
}

export const CardUser = ({ instructor }: { instructor: string }) => {
  const [instructorData, setInstructorData] = useState<any>(null);
  useEffect(() => {
    const fetchInstructor = async () => {
      try {
        const res = await getInstructor(instructor);
        setInstructorData(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchInstructor();
  }, []);
  return (
    <>
      <h4 className="text-[#0F172A] text-[20px] font-[600] ">Instructor</h4>

      {instructorData ? (
        <div className="my-6 flex flex-col gap-4">
          <h4 className="text-[#2563EB] text-[20px] font-[600] leading-[150%]">
            {instructorData.name}
          </h4>
          <p className="text-[#334155] text-[16px] font-[400] leading-[160%]">
            {instructorData.description}
          </p>
          <div className="flex gap-3">
            <Avatar src={instructorData.image} radius="xl" size="xl" />
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
                  {`${instructorData.students} Students`}
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
      ) : (
        <>
          <Skeleton height={24} width={180} radius={8} />
          <Skeleton height={24} width={180} radius={8} className="py-2" />
          <div className="flex gap-4">
            <Skeleton height={40} width={40} circle radius={8} />
            <div>
              <Skeleton height={18} width={120} radius={8} />
              <Skeleton height={18} width={120} radius={8} className="py-2" />
              <Skeleton height={18} width={120} radius={8} />
            </div>
          </div>
        </>
      )}
    </>
  );
};
