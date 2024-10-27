import { Breadcrumbs, Anchor } from "@mantine/core";
import { ChevronRight } from "@/svg";
import Link from "next/link";

const itemsPage = [
  { title: "Home", href: "/" },
  { title: "Categories", href: "/categories" },
  { title: "Learn HTML CSS", href: "#", isPage: true },
];
export default function CustomBreadcrumbs() {
  return (
    <>
      <Breadcrumbs separator={<ChevronRight />} mt="lg">
        {itemsPage.map((item, index) =>
          !item.isPage ? (
            <Link
              href={item.href}
              key={index}
              className="text-[#334155] text-[14px] leading-[150%]"
            >
              {item.title}
            </Link>
          ) : (
            <p
              key={`current${index}`}
              className="text-[#2563EB] text-[14px] leading-[150%] cursor-pointer "
            >
              {item.title}
            </p>
          )
        )}
      </Breadcrumbs>
    </>
  );
}
