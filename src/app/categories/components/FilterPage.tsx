"use client";
import SelectOption from "@/app/home/component/CustomSelecter";
import { FilterIcon } from "@/svg";
import { Button, Container, Drawer, Select } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import FilterOption from "./FilterOption";
import ProductCard from "@/app/home/component/ProductCard";

const dataProductCard = {
  title: "Course Title 1",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  price: 100,
  image: "/images/course.jpg",
  author: "John Doe",
  rating: 1000,
  start: 4.5,
};
export default function Filter() {
  const [isOpenFilter, setIsOpenFilter] = useState<boolean>(true);
  const [isDrawerFilter, setIsDrawerFilter] = useState<boolean>(true);
  const [valueOption, setValueOption] = useState<string>("");
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Container fluid className="lg:mx-[80px] sm:mx-[16px]">
      <div className="flex justify-between items-end my-6 ml-auto">
        <Button
          leftSection={<FilterIcon />}
          variant="outline"
          color="#0F172A"
          className="h-auto px-6 py-2 text-[#0F172A] text-[14px] font-[500] leading-[160%] block xl:hidden"
          onClick={open}
        >
          Filter {valueOption}
        </Button>
        <span className="hidden lg:block"> </span>

        <div className="flex justify-center items-center">
          <h4 className="text-[16px] text-[#0F172A] font-[400] leading-[160%] mr-2">
            Sort By
          </h4>
          <SelectOption
            valueOption={valueOption}
            setValueOption={setValueOption}
          />
        </div>
      </div>
      <section className="flex">
        <div className="w-[305px] hidden xl:block">
          <FilterOption />
        </div>
        <div className="flex-1 flex justify-center lg:justify-around gap-x-3 gap-y-6 flex-wrap">
          <ProductCard product={dataProductCard} />
          <ProductCard product={dataProductCard} />
          <ProductCard product={dataProductCard} />
          <ProductCard product={dataProductCard} />
          <ProductCard product={dataProductCard} />
          <ProductCard product={dataProductCard} />
        </div>
      </section>
      <Drawer opened={opened} onClose={close} title="Filter">
        <FilterOption />
      </Drawer>
    </Container>
  );
}
