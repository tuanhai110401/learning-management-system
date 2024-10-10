import React from "react";
import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
import ReviewCard from "./ReviewCard";

const itemReview = {
  description:
    "Byways tech courses are top-notch! As someone who always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia. ",
  subTitle: "Designer",
  image:
    "https://res.cloudinary.com/dxaqounpg/image/upload/v1728495278/Learing%20Management%20System/customer-1.jpg",
  name: "Jane Doe",
};
export default function CarouselReview() {
  return (
    <Carousel
      className="w-full"
      loop
      slideSize="33.333333%"
      slideGap="md"
      align="center"
      slidesToScroll={1}
      height={316}
    >
      <Carousel.Slide>
        <ReviewCard review={itemReview} />
      </Carousel.Slide>
      <Carousel.Slide>
        <ReviewCard review={itemReview} />
      </Carousel.Slide>
      <Carousel.Slide>
        <ReviewCard review={itemReview} />
      </Carousel.Slide>
      <Carousel.Slide>
        <ReviewCard review={itemReview} />
      </Carousel.Slide>
      <Carousel.Slide>
        <ReviewCard review={itemReview} />
      </Carousel.Slide>
    </Carousel>
  );
}
