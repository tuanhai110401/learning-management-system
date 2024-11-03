import { Container } from "@mantine/core";
import Filter from "./components/FilterPage";
import { supabase } from "@/utils/supabase/createSupabase";
// export default async function Categories() {
const Categories = async () => {
  return (
    <div className="mt-[60px]">
      <Container fluid className="lg:mx-[80px] sm:mx-[16px]">
        <h2 className=" text-[#0F172A] text-[40px] font-[700] leading-[120%]">
          Design Courses
        </h2>
        <h4 className="text-[#0F172A] text-[24px] font-[600] leading-[140%] my-6">
          All Development Courses
        </h4>
      </Container>
      <Filter />
    </div>
  );
};

export default Categories;
