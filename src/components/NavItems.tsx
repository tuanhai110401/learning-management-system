import { ShoppingCart, BellIcon } from "@/svg";
import { Avatar, Group } from "@mantine/core";
import { useAuthStore } from "@/lib/store";

const links = [
  { link: "/about", label: "Categories" },
  { link: "/pricing", label: "ShoppingCart", icon: <ShoppingCart /> },
];
export const NavItem = ({ styleNav }: { styleNav?: string }) => {
  const { isLogin } = useAuthStore();
  const items = links.map((link) => (
    <a key={link.label} href="{link.link}">
      {link.icon ? link.icon : link.label}
    </a>
  ));

  return (
    <Group className={styleNav ? styleNav : "flex-nowrap"}>
      {/* visibleFrom="xs" */}
      {items}
      {!isLogin ? (
        <div className={styleNav ? styleNav : "flex flex-nowrap gap-6"}>
          <button className="p-[10px] border-[1px] border-[#334155] text-[14px] text-[#334155] font-[500] leading-[20px] hover:opacity-60">
            Login
          </button>
          <button className="p-[10px] bg-[#334155] border-[1px] border-[#334155] text-[14px] text-[#ffffff] font-[500] leading-[20px] hover:opacity-60">
            Sign up
          </button>
        </div>
      ) : (
        <div
          className={
            styleNav
              ? styleNav
              : "flex flex-nowrap gap-2 items-center justify-center"
          }
        >
          <button>
            <BellIcon />
          </button>
          {/* <button className="p-[10px] border-[1px] border-[#334155] text-[14px] text-[#334155] font-[500] leading-[20px] hover:opacity-60">
            Profile
          </button> */}
          <Avatar radius="xl" />
        </div>
      )}
    </Group>
  );
};
