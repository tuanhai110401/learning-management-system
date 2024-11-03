"use client";
import SelectOption from "@/app/home/component/CustomSelecter";
import { FilterIcon } from "@/svg";
import {
  Button,
  Container,
  Drawer,
  Pagination,
  Select,
  Skeleton,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { FilterOption } from "./FilterOption";
import ProductCard from "@/app/home/component/ProductCard";
import { getCoursesAll } from "@/utils/supabase/handlers/courses";
import { useFilterStore } from "@/lib/store";
import { useRouter } from "next/navigation";

export default function Filter() {
  const [isOpenFilter, setIsOpenFilter] = useState<boolean>(true);
  const [isDrawerFilter, setIsDrawerFilter] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [valueOption, setValueOption] = useState<string>("");
  const [dataCourse, setDataCourse] = useState<any[]>();
  const [totalPage, setTotalPage] = useState<number>(1);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [opened, { open, close }] = useDisclosure(false);
  const dataFilter = useFilterStore();
  const router = useRouter();
  const { price, rating, categories } = useFilterStore();
  useEffect(() => {
    const filter: FilterOptions = {
      price: price,
      rating: rating,
      categories: categories,
    };
    const fetchCategories = async () => {
      try {
        setIsLoading(true);
        const dataCourse = await getCoursesAll(filter, pageNumber);
        setDataCourse(dataCourse.data);
        setTotalPage(dataCourse.count);
      } catch (error) {
        console.error("Error fetching courses:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCategories();
  }, [price, rating, categories, pageNumber]); //
  const handleOnclick = (id: string) => {
    router.push(`/course/${id}`);
  };
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
      <section className="flex mb-14">
        <div className="w-[305px] hidden xl:block">
          <FilterOption dataFilter={dataFilter} />
        </div>
        <div className="flex-1">
          <div className=" flex justify-center lg:justify-around gap-x-3 gap-y-6 flex-wrap">
            {isLoading ? (
              <div className="w-full p-4 flex gap-6">
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
              </div>
            ) : dataCourse?.length !== 0 ? (
              dataCourse?.map((item) => (
                <div key={item.id} onClick={() => handleOnclick(item.id)}>
                  <ProductCard product={item} />
                </div>
              ))
            ) : (
              <div>
                <div className="text-center">No course found</div>
              </div>
            )}
          </div>
          {!isLoading && (
            <div className="my-8 flex justify-center items-center">
              <Pagination
                className=" bg-white"
                color="#1E293B"
                total={Math.ceil(totalPage / 9)}
                value={pageNumber}
                radius="md"
                onChange={(e) => {
                  setPageNumber(e);
                }}
              />
            </div>
          )}
        </div>
      </section>
      <Drawer opened={opened} onClose={close} title="Filter">
        <FilterOption dataFilter={dataFilter} />
      </Drawer>
    </Container>
  );
}

const SkeletonCard = () => {
  return (
    <div className="w-[298px] p-4 cursor-pointer rounded-[16px] border-[1] border-[#E2E8F0] shadow-custom">
      <Skeleton height={200} radius="md" />
      <Skeleton height={18} radius="md" mt={16} />
      <Skeleton height={18} radius="md" mt={16} />
      <Skeleton height={40} width={100} radius="md" mt={16} />
    </div>
  );
};
