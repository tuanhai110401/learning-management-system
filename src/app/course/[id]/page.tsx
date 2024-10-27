import CustomBreadcrumbs from "@/components/Breadcrumbs";
import { CardUser, UserButton } from "@/components/UserButton";
import { Container, Divider, Rating } from "@mantine/core";
import React from "react";
import AsideCourse from "../component/AsideCourse";
import Syllabus from "@/components/Syllabus";

export default function page() {
  return (
    <>
      <Container fluid className="lg:px-[80px] sm:px-[16px] bg-[#F8FAFC]">
        <div className="pt-6">
          <CustomBreadcrumbs />
        </div>
        <div className="flex gap-6 md:flex-row flex-col-reverse pb-6">
          <div className="flex-1 mt-10">
            <div>
              <h1 className="text-[#0F172A] text-[40px] font-[700] leading-[140%] tracking-tight">
                Introduction to User Experience Design
              </h1>
              <p className="text-[#334155] text-[16px] font-[400] leading-[160%] mt-4 mb-6">
                This course is meticulously crafted to provide you with a
                foundational understanding of the principles, methodologies, and
                tools that drive exceptional user experiences in the digital
                landscape.
              </p>
              <div className="flex gap-2">
                <span className="text-[#FEC84B] text-[16px] font-[500] leading-[120%]">
                  4.5
                </span>
                <Rating value={4.5} fractions={2} readOnly />
                <span className="text-[#334155] text-[14px] leading-[150%] whitespace-nowrap">
                  (651651 rating)
                </span>
                <Divider
                  className="mx-3"
                  orientation="vertical"
                  color="#334155"
                />
                <span className="text-[#334155] text-[14px] leading-[150%]">
                  22 Total Hours. 155 Lectures. All levels
                </span>
              </div>
              <UserButton />
            </div>
          </div>
          <div className="md:w-[400px] w-full">
            <AsideCourse />
          </div>
        </div>
      </Container>
      <Container fluid className="lg:mx-[80px] sm:mx-[16px] bg-white">
        <div className="mt-8">
          <div>
            <h4 className="text-[20px] text-[#0F172A] font-[600] leading-[150%]">
              Course Description
            </h4>
            <p className="text-[16px] text-[#334155] leading-[160%] lg:w-[840px]">
              This interactive e-learning course will introduce you to User
              Experience (UX) design, the art of creating products and services
              that are intuitive, enjoyable, and user-friendly. Gain a solid
              foundation in UX principles and learn to apply them in real-world
              scenarios through engaging modules and interactive exercises.{" "}
            </p>
          </div>
          <div className="my-6">
            <h4 className="text-[20px] text-[#0F172A] font-[600] leading-[150%]">
              Certification
            </h4>
            <p className="text-[16px] text-[#334155] leading-[160%] lg:w-[840px]">
              At Byway, we understand the significance of formal recognition for
              your hard work and dedication to continuous learning. Upon
              successful completion of our courses, you will earn a prestigious
              certification that not only validates your expertise but also
              opens doors to new opportunities in your chosen field.
            </p>
          </div>
        </div>
        <Divider className="my-6" />
        <div>
          <CardUser />
        </div>
      </Container>
      <Container fluid className="lg:mx-[80px] sm:mx-[16px] bg-white">
        <div className="mt-8">
          <h4 className="text-[20px] text-[#0F172A] font-[600] leading-[150%] my-4">
            Syllabus
          </h4>
          <Syllabus />
        </div>
      </Container>
      <Container fluid className="lg:mx-[80px] sm:mx-6 bg-white">
        <div className="mt-8">
          <h4 className="my-4">Learner Reviews</h4>
          <div>
            <div className="flex gap-2">
              <div className="flex-none lg:w-52 w-32">
                <div className="flex gap-1 mb-6 items-end">
                  <div className="flex">
                    <Rating value={1} readOnly count={1} />
                    <span className="text-[#0F172A] text-[20px] font-[600] leading-[140%]">
                      4.6
                    </span>
                  </div>
                  <span className="whitespace-nowrap text-[#334155] text-[14px] font-[500] leading-[20px]">
                    130 Reviews
                  </span>
                </div>
                <div>
                  <RatingComponent />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-col lg:flex-row items-center p-4">
                  <div className="flex-none w-60">
                    <UserButton />
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <Rating value={1} readOnly count={1} /> <span>5</span>
                      <span className="whitespace-nowrap text-[#334155] text-[14px] font-[500] leading-[20px]">
                        Reviewed on 22nd March, 2024
                      </span>
                    </div>
                    <p>
                      I was initially apprehensive, having no prior design
                      experience. But the instructor, John Doe, did an amazing
                      job of breaking down complex concepts into easily
                      digestible modules. The video lectures were engaging, and
                      the real-world examples really helped solidify my
                      understanding.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-center p-4">
                  <div className="flex-none w-60">
                    <UserButton />
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <Rating value={1} readOnly count={1} /> <span>5</span>
                      <span className="whitespace-nowrap text-[#334155] text-[14px] font-[500] leading-[20px]">
                        Reviewed on 22nd March, 2024
                      </span>
                    </div>
                    <p>
                      I was initially apprehensive, having no prior design
                      experience. But the instructor, John Doe, did an amazing
                      job of breaking down complex concepts into easily
                      digestible modules. The video lectures were engaging, and
                      the real-world examples really helped solidify my
                      understanding.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-center p-4">
                  <div className="flex-none w-60">
                    <UserButton />
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <Rating value={1} readOnly count={1} /> <span>5</span>
                      <span className="whitespace-nowrap text-[#334155] text-[14px] font-[500] leading-[20px]">
                        Reviewed on 22nd March, 2024
                      </span>
                    </div>
                    <p>
                      I was initially apprehensive, having no prior design
                      experience. But the instructor, John Doe, did an amazing
                      job of breaking down complex concepts into easily
                      digestible modules. The video lectures were engaging, and
                      the real-world examples really helped solidify my
                      understanding.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

const RatingComponent = () => {
  const dataRating = [5, 4, 3, 2, 1];
  return (
    <div className="flex flex-col gap-1">
      {dataRating.map((rating) => (
        <div key={rating} className="flex gap-2">
          <Rating value={rating} readOnly />
          <span className="whitespace-nowrap text-[#334155] text-[14px] font-[500] leading-[20px]">
            {rating}
          </span>
        </div>
      ))}
    </div>
  );
};
