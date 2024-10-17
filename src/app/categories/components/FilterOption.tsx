import CustomAccordion from "@/components/Accordion";
import { Button, Rating } from "@mantine/core";
export default function FilterOption() {
  return (
    <div className="w-full">
      <CustomAccordion title="Rating" value="rating" defaultValue>
        <div className="flex flex-col gap-2">
          {dataConfig.dataStar.map((value) => (
            <div
              key={`star-${value}`}
              className="cursor-pointer w-full py-2 hover:scale-105 transition-transform duration-300 ease-in-out transform"
            >
              <Rating value={value} fractions={2} readOnly />
            </div>
          ))}
        </div>
      </CustomAccordion>
      <CustomAccordion title="Price" value="price">
        <div className="flex flex-col gap-2">
          {dataConfig.dataPrice.map((value) => (
            <div
              key={`price-${value}`}
              className="cursor-pointer w-full py-2 hover:scale-105 transition-transform duration-300 ease-in-out transform"
            >
              <p className="font-[400] text-[#334155] text-[14px]">
                {value.label}
              </p>
            </div>
          ))}
        </div>
      </CustomAccordion>
      <CustomAccordion title="Category" value="category">
        <div className="flex flex-col gap-2">
          {dataConfig.dataCategories.map((value) => (
            <div
              key={`category-${value}`}
              className="cursor-pointer w-full py-2 hover:scale-105 transition-transform duration-300 ease-in-out transform"
            >
              <p
                className={
                  value.isActive
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
    </div>
  );
}

const dataConfig = {
  dataStar: [5, 4, 3, 2, 1],
  dataPrice: [
    {
      label: "Default",
      value: "default",
    },
    {
      label: "Ascending",
      value: "ascending",
    },
    {
      label: "Descending",
      value: "descending",
    },
  ],
  dataCategories: [
    {
      label: "Astrology",
      value: "astrology",
      isActive: false,
    },
    {
      label: "Development",
      value: "development",
      isActive: true,
    },
    {
      label: "Marketing",
      value: "marketing",
      isActive: false,
    },
    {
      label: "Physics",
      value: "physics",
      isActive: false,
    },
  ],
};
