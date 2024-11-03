import { Breadcrumbs, Anchor } from "@mantine/core";
import { ChevronRight } from "@/svg";
import Link from "next/link";

export default function CustomBreadcrumbs({
  courseName,
}: {
  courseName?: string;
}) {
  const itemsPage = [
    { title: "Home", href: "/" },
    { title: "Categories", href: "/categories" },
    {
      title: courseName ? courseName : "Learn HTML CSS",
      href: "#",
      isPage: true,
    },
  ];
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
