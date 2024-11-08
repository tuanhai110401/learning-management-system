"use client";
import CustomBreadcrumbs from "@/components/Breadcrumbs";
import { CardUser, UserButton } from "@/components/UserButton";
import { Container, Divider, Rating, Skeleton } from "@mantine/core";
import React, { useEffect, useState } from "react";
import AsideCourse from "../component/AsideCourse";
import Syllabus from "@/components/Syllabus";
import { useParams } from "next/navigation";
import { getChapters, getCourse } from "@/utils/supabase/handlers/courses";
import { useAuthStore, usePurchase } from "@/lib/store";

export default function page() {
  const { id } = useParams();
  const { isLogin } = useAuthStore();
  const [dataCourse, setDataCourse] = useState<ICourse | null>(null);
  const [dataChapters, setDataChapters] = useState<string[] | null>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { purchase } = usePurchase();
  useEffect(() => {
    const fetchChapters = async () => {
      try {
        const chapter = await getChapters(id);
        const course = await getCourse(id);
        if (chapter && course) {
          setDataCourse(course.data);
          setDataChapters(chapter.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchChapters();
  }, [id]);
  const handleClick = () => {
    console.log(dataChapters, dataCourse);
  };
  return (
    <>
      {dataCourse ? (
        <>
          <Container fluid className="lg:px-[80px] sm:px-[16px] bg-[#F8FAFC]">
            <div className="pt-6">
              <CustomBreadcrumbs courseName={dataCourse.title} />
            </div>
            <div className="flex gap-6 md:flex-row flex-col-reverse pb-6">
              <div className="flex-1 mt-10">
                <div>
                  <h1
                    className="text-[#0F172A] text-[40px] font-[700] leading-[140%] tracking-tight"
                    onClick={handleClick}
                  >
                    {dataCourse.title}
                  </h1>
                  <p className="text-[#334155] text-[16px] font-[400] leading-[160%] mt-4 mb-6">
                    {dataCourse.description}
                  </p>
                  <div className="flex gap-2">
                    <span className="text-[#FEC84B] text-[16px] font-[500] leading-[120%]">
                      {dataCourse.star}
                    </span>
                    <Rating value={dataCourse.rating} fractions={3} readOnly />
                    <span className="text-[#334155] text-[14px] leading-[150%] whitespace-nowrap">
                      ({dataCourse.rating} rating)
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
                  <UserButton name={dataCourse.instructor_name} />
                </div>
              </div>
              <div className="md:w-[400px] w-full">
                <AsideCourse
                  image={dataCourse.image}
                  price={dataCourse.price}
                  courseId={dataCourse.id.toString()}
                />
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
                  Experience (UX) design, the art of creating products and
                  services that are intuitive, enjoyable, and user-friendly.
                  Gain a solid foundation in UX principles and learn to apply
                  them in real-world scenarios through engaging modules and
                  interactive exercises.{" "}
                </p>
              </div>
              <div className="my-6">
                <h4 className="text-[20px] text-[#0F172A] font-[600] leading-[150%]">
                  Certification
                </h4>
                <p className="text-[16px] text-[#334155] leading-[160%] lg:w-[840px]">
                  At Byway, we understand the significance of formal recognition
                  for your hard work and dedication to continuous learning. Upon
                  successful completion of our courses, you will earn a
                  prestigious certification that not only validates your
                  expertise but also opens doors to new opportunities in your
                  chosen field.
                </p>
              </div>
            </div>
            <Divider className="my-6" />
            <div>
              <CardUser instructor={dataCourse.instructor_name} />
            </div>
          </Container>
        </>
      ) : (
        <>
          <Container fluid className="lg:px-[80px] sm:px-[16px] py-16">
            <div>
              <Skeleton height={24} width={320} radius={8} />
              <Skeleton height={72} width={320} radius={8} className="my-6" />
              <Skeleton height={24} width={420} radius={8} />
              <Skeleton height={24} width={520} radius={8} className="my-4" />
              <div className="flex gap-6 items-center">
                <Skeleton height={48} width={48} circle />
                <Skeleton height={24} width={120} radius={8} />
              </div>
            </div>
          </Container>
        </>
      )}
      {dataChapters && (
        <Container fluid className="lg:mx-[80px] sm:mx-[16px] bg-white">
          <div className="mt-8">
            <h4 className="text-[20px] text-[#0F172A] font-[500] leading-[150%] my-4">
              Syllabus
            </h4>
            {!isLogin && (
              <h4 className="text-[16px] text-[#0F172A] font-[600] leading-[150%] my-4">
                You need to log in to view your course path.
              </h4>
            )}
            {dataChapters &&
              dataChapters.length > 0 &&
              dataChapters.map((item, index) => (
                <Syllabus key={index} data={item} />
              ))}

            {dataChapters.length > 0 && (
              <h4 className="text-[16px] text-[#0F172A] font-[600] leading-[150%] my-4">
                This course currently has no chapters.
              </h4>
            )}
          </div>
        </Container>
      )}
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
