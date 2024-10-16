"use client";
import Banner from "@/components/Banner";
import { Container, Text, Title } from "@mantine/core";
import SectionStats from "./component/SectionStats";
import TopTitle from "./component/TopTitle";
import CategoryCard from "./component/CategoryCard";
import ProductCard from "./component/ProductCard";
import InstructorCard from "./component/InstructorCard";
import CarouselReview from "./component/CarouselReview";
import ButtonCustom from "@/components/Button";
import { ArrowRight } from "@/svg";
import Image from "next/image";

const dataCategory = [
  {
    title: "Astrology",
    course: 11,
  },
  {
    title: "Development",
    course: 12,
  },
  {
    title: "Marketing",
    course: 12,
  },
  {
    title: "Physics",
    course: 14,
  },
];
const dataProduct = [
  {
    title: "Course Title 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 100,
    image: "/images/course.jpg",
    author: "John Doe",
    rating: 1000,
    start: 4.5,
  },

  {
    title: "Course Title 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 100,
    image: "/images/course.jpg",
    author: "John Doe",
    rating: 1000,
    start: 4.5,
  },
  {
    title: "Course Title 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 100,
    image: "/images/course.jpg",
    author: "John Doe",
    rating: 1000,
    start: 4.5,
  },
  {
    title: "Course Title 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 100,
    image: "/images/course.jpg",
    author: "John Doe",
    rating: 1000,
    start: 4.5,
  },
];
const dataInstructors = [
  {
    name: "Ronald Richards",
    title: "UI/UX Designer",
    image:
      "https://res.cloudinary.com/dxaqounpg/image/upload/v1728476399/Learing%20Management%20System/instrucotr-2.jpg",
    students: 2400,
    rating: 4.9,
  },
  {
    name: "Ronald Richards",
    title: "UI/UX Designer",
    image:
      "https://res.cloudinary.com/dxaqounpg/image/upload/v1728476399/Learing%20Management%20System/instrucotr-2.jpg",
    students: 2400,
    rating: 4.9,
  },
  {
    name: "Ronald Richards",
    title: "UI/UX Designer",
    image:
      "https://res.cloudinary.com/dxaqounpg/image/upload/v1728476399/Learing%20Management%20System/instrucotr-2.jpg",
    students: 2400,
    rating: 4.9,
  },
  {
    name: "Ronald Richards",
    title: "UI/UX Designer",
    image:
      "https://res.cloudinary.com/dxaqounpg/image/upload/v1728476399/Learing%20Management%20System/instrucotr-2.jpg",
    students: 2400,
    rating: 4.9,
  },
  {
    name: "Ronald Richards",
    title: "UI/UX Designer",
    image:
      "https://res.cloudinary.com/dxaqounpg/image/upload/v1728476399/Learing%20Management%20System/instrucotr-2.jpg",
    students: 2400,
    rating: 4.9,
  },
];
const itemData = {
  title: "Beginner’s Guide to Design",
  description: "22 Total Hours. 155 Lectures. Beginner",
  price: 149.9,
  image: "/images/course.jpg",
  author: "Ronald Richards",
  rating: 1200,
  start: 4.5,
};

const Home = () => {
  return (
    <>
      <Banner />
      <SectionStats />
      <section>
        <TopTitle title="Top Categories" link="/categories" />
        <Container
          fluid
          className="lg:mx-[80px] sm:mx-[16px] flex justify-around flex-wrap xl:flex-nowrap lg:flex-nowrap md:flex-nowrap gap-4 md:justify-between"
        >
          {dataCategory &&
            dataCategory.map((item, index) => (
              <CategoryCard
                key={index}
                title={item.title}
                course={item.course}
              />
            ))}
        </Container>
      </section>
      <section className="mt-[60px]">
        <TopTitle title="Top Courses" link="/courses" />
        <Container
          fluid
          className="lg:mx-[80px] sm:mx-[16px] flex justify-around flex-wrap xl:flex-nowrap gap-4 md:justify-center xl:justify-between"
        >
          <ProductCard product={itemData} />
          <ProductCard product={itemData} />
          <ProductCard product={itemData} />
          <ProductCard product={itemData} />
        </Container>
      </section>
      <section className="mt-[60px]">
        <TopTitle title="Top Instructors" link="/instructors" />
        <Container
          fluid
          className="lg:mx-[80px] sm:mx-[16px] flex justify-center flex-wrap xl:flex-nowrap gap-5 md:justify-center xl:justify-between"
        >
          {dataInstructors &&
            dataInstructors.map((item, index) => (
              <InstructorCard key={index} instructors={item} />
            ))}
        </Container>
      </section>
      <section className="mt-[60px] h-[512px] bg-[#F8FAFC] py-[80px]">
        <TopTitle title="What Our Customer Say About Us" link="" />
        <Container
          fluid
          className="lg:mx-[80px] sm:mx-[16px] flex justify-around flex-wrap xl:flex-nowrap gap-4 md:justify-center xl:justify-between"
        >
          <CarouselReview />
        </Container>
      </section>

      <section className="mt-[60px]">
        <Container
          fluid
          className="lg:mx-[80px] sm:mx-[16px] flex items-center justify-center md:justify-between sm:flex-nowrap flex-wrap gap-4 "
        >
          <div className="xl:w-2/5 sm:w-1/2 w-4/5">
            <Image
              className="w-[400px] h-[425px]"
              src="https://res.cloudinary.com/dxaqounpg/image/upload/v1728575061/Learing%20Management%20System/banner-instructor-2.png"
              width={400}
              height={400}
              alt="Banner instructor"
            />
          </div>
          <div className="sm:w-2/5 w-4/5">
            <h4 className="text-black text-[20px] font-[600] leading-[150%]">
              Become an Instructor
            </h4>
            <p className="text-[#1D2939] text-[16px] font-[400] leading-[160%] pt-2 pb-4">
              Instructors from around the world teach millions of students on
              Byway. We provide the tools and skills to teach what you love.
            </p>
            <ButtonCustom
              className="rounded-lg"
              title="Start Your Instructor Journey"
              p="10px 24px"
              color="#020617"
              rightSection={<ArrowRight />}
            />
          </div>
        </Container>
      </section>

      <section className="my-[60px]">
        <Container
          fluid
          className="lg:mx-[80px] sm:mx-[16px] flex flex-row-reverse items-center justify-center md:justify-between sm:flex-nowrap flex-wrap gap-4 "
        >
          <div className="xl:w-2/5 sm:w-1/2 w-4/5">
            <Image
              className="w-[400px] h-[425px]"
              src="https://res.cloudinary.com/dxaqounpg/image/upload/v1728575061/Learing%20Management%20System/banner-instructor-1.png"
              width={400}
              height={400}
              alt="Banner instructor"
            />
          </div>
          <div className="sm:w-2/5 w-4/5">
            <h4 className="text-black text-[20px] font-[600] leading-[150%]">
              Become an Instructor
            </h4>
            <p className="text-[#1D2939] text-[16px] font-[400] leading-[160%] pt-2 pb-4">
              Instructors from around the world teach millions of students on
              Byway. We provide the tools and skills to teach what you love.
            </p>
            <ButtonCustom
              className="rounded-lg"
              title="Start Your Instructor Journey"
              p="10px 24px"
              color="#020617"
              rightSection={<ArrowRight />}
            />
          </div>
        </Container>
      </section>
    </>
  );
};

export default Home;
