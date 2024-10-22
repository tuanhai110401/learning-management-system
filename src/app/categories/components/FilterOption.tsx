"use client";
import CustomAccordion from "@/components/Accordion";
import { Button, Rating, Tooltip } from "@mantine/core";
import { supabase } from "@/utils/supabase/createSupabase";
import { useEffect, useState } from "react";
import { Trash } from "@/svg";

interface Category {
  id: number;
  name: string;
}
// export default function FilterOption() {
export const FilterOption = ({ dataFilter }: { dataFilter: FilterState }) => {
  const { price, rating, categories, setPrice, setRating, setCategories } =
    dataFilter;
  const [dataCategories, setDataCategories] = useState<Category[]>([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data, error } = await supabase.from("categories").select("*");
        if (error) throw new Error(error.message);
        setDataCategories(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCategories();
  }, []);

  const handleResetFilter = () => {
    setPrice("default");
    setRating(0);
    setCategories("");
  };
  return (
    <div className="w-full">
      <CustomAccordion title="Rating" value="rating" defaultValue>
        <div className="flex flex-col gap-2">
          {dataConfig.dataStar.map((value, index) => (
            <div
              onClick={() => {
                setRating(value);
              }}
              key={`star-${index}`}
              className={`${
                value === rating ? "ml-2 bg-slate-100" : ""
              } cursor-pointer w-full py-2 px-2 hover:scale-105 transition-transform duration-300 ease-in-out transform`}
            >
              <Rating value={value} fractions={2} readOnly />
            </div>
          ))}
        </div>
      </CustomAccordion>
      <CustomAccordion title="Price" value="price">
        <div className="flex flex-col gap-2">
          {dataConfig.dataPrice.map((value, index) => (
            <div
              onClick={() => {
                setPrice(value.value);
              }}
              key={`prices-${index}`}
              className="cursor-pointer w-full py-2 hover:scale-105 transition-transform duration-300 ease-in-out transform"
            >
              <p
                className={
                  value.value === price
                    ? "ml-1 text-blue-500 font-[400] text-[14px]"
                    : "font-[400] text-[#334155] text-[14px]"
                }
              >
                {value.label}
              </p>
            </div>
          ))}
        </div>
      </CustomAccordion>
      <CustomAccordion title="Category" value="category">
        <div className="flex flex-col gap-2">
          {dataCategories.map((value) => (
            <div
              onClick={() => {
                setCategories(value.name);
              }}
              key={`category-${value.id}`}
              className="cursor-pointer w-full py-2 hover:scale-105 transition-transform duration-300 ease-in-out transform"
            >
              <p
                className={
                  value.name === categories
                    ? "ml-1 text-blue-500 font-[400] text-[14px]"
                    : "font-[400] text-[#334155] text-[14px]"
                }
              >
                {value.name}
              </p>
            </div>
          ))}
        </div>
      </CustomAccordion>
      <Tooltip label="Reset filters" color="gray" position="bottom">
        <Button
          className="mt-4"
          rightSection={<Trash color="red" />}
          variant="light"
          color="red"
          fullWidth
          onClick={handleResetFilter}
        >
          Clear
        </Button>
      </Tooltip>
    </div>
  );
};

interface PriceOption {
  label: string;
  value: PriceOrder;
}

interface DataConfig {
  dataStar: number[];
  dataPrice: PriceOption[];
}

const dataConfig: DataConfig = {
  dataStar: [5, 4, 3, 2, 1],
  dataPrice: [
    {
      label: "Default",
      value: "default",
    },
    {
      label: "Ascending",
      value: "asc",
    },
    {
      label: "Descending",
      value: "desc",
    },
  ],
};
