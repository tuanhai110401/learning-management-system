import { useRef } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import { Container, Group, Title } from "@mantine/core";
import "@mantine/carousel/styles.css";

import ButtonCustom from "./Button";

function Banner() {
  return (
    <Container fluid className="lg:mx-[80px] sm:mx-[16px]">
      <Group justify="space-between" className="xl:h-[600px]">
        <div className="xl:w-2/5 md:w-[46%] lg:w-2/5">
          <Title className="text-[40px] font-[700] leading-[120%] text-[#0F172A]">
            Unlock Your Potential with Byway
          </Title>
          <p className="text-[#64748B] text-[16px] leading-[160%] font-[400] pt-[16px] pb-[24px]">
            Welcome to Byway, where learning knows no bounds. We believe that
            education is the key to personal and professional growth, and we're
            here to guide you on your journey to success.
          </p>
          <ButtonCustom
            className="text-[14px] font-[400] leading-[150%] rounded-[8px]"
            color="#2563EB"
            p="16px"
            title="Start your instructor journey"
          />
        </div>
        <div className="md:w-1/2 lg:w-1/2 xl:1/2">
          <CarouselBanner />
        </div>
      </Group>
    </Container>
  );
}

export default Banner;

const imageList = [
  "https://res.cloudinary.com/dxaqounpg/image/upload/v1728322181/Learing%20Management%20System/banner-1.png",
  "https://res.cloudinary.com/dxaqounpg/image/upload/v1728322181/Learing%20Management%20System/banner-2.png",
  "https://res.cloudinary.com/dxaqounpg/image/upload/v1728378902/Learing%20Management%20System/banner-4.png",
];
function CarouselBanner() {
  const autoplay = useRef(Autoplay({ delay: 5000 }));
  console.log(autoplay.current);
  const imageCarousel = imageList.map((image, index) => (
    <Image
      className="w-[100%] h-[100%] sm:w-[80%] md:w-full md:h-[400px] lg:h-[500px] object-cover"
      key={index}
      width={680}
      height={580}
      src={image}
      alt={`Banner ${index}`}
      priority
    />
  ));
  const handleMouseLeaveAutoPlay = () => {
    autoplay.current.play();
  };
  return (
    <Carousel
      loop
      className="w-full "
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={handleMouseLeaveAutoPlay}
    >
      {imageCarousel &&
        imageCarousel.map((item, index) => (
          <Carousel.Slide key={index} className="w-full flex justify-center">
            {item}
          </Carousel.Slide>
        ))}
    </Carousel>
  );
}
