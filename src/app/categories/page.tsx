import { Button, Container, Group } from "@mantine/core";
import { Filter, ArrowBottom } from "@/svg";

export default function Categories() {
  return (
    <div className="">
      <Container fluid className="lg:mx-[80px] sm:mx-[16px]">
        <h2>Design Courses</h2>
        <h4>All Development Courses</h4>
        <div className="flex justify-between">
          <Button
            leftSection={<Filter />}
            variant="outline"
            color="#0F172A"
            className="h-auto px-6 py-2 text-[#0F172A] text-[14px] font-[500] leading-[160%]"
          >
            Filter
          </Button>

          <div className="flex justify-center items-center">
            <h4 className="text-[16px] text-[#0F172A] font-[600] leading-[160%]">
              Sort By
            </h4>
            <Button
              rightSection={<ArrowBottom />}
              variant="outline"
              color="#0F172A"
              className="h-auto px-6 py-2 text-[#0F172A] text-[14px] font-[500] leading-[160%]"
            >
              Filter
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
