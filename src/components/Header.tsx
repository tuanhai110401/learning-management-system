"use client";
import {
  Autocomplete,
  Group,
  Burger,
  Container,
  Text,
  Drawer,
  Button,
} from "@mantine/core";
import { useState, useEffect } from "react";
import { ShoppingCart, Search } from "@/svg";
import { NavItem } from "./NavItems";

// const links = [
//   { link: "/about", label: "Categories" },
//   { link: "/pricing", label: "ShoppingCart", icon: <ShoppingCart /> },
// ];

export function HeaderSearch({ isLogin }: { isLogin: boolean }) {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <header className="w-full">
      <Container
        fluid
        h={65}
        className="flex flex-nowrap justify-between items-center lg:mx-[80px] sm:mx-[16px]"
      >
        <Group className="flex-nowrap">
          <Text
            inherit
            variant="gradient"
            component="span"
            gradient={{ from: "pink", to: "yellow" }}
          >
            Mantine
          </Text>
        </Group>

        <Group className="flex-nowrap">
          <Autocomplete
            className="md:w-60 lg:w-90"
            placeholder="Search"
            leftSection={<Search />}
            data={[]}
            // visibleFrom="sm"
          />
          <Burger
            opened={isOpenMenu}
            onClick={toggleMenu}
            size="md"
            hiddenFrom="xs"
          ></Burger>
          <Drawer
            position="right"
            size="xs"
            opened={isOpenMenu}
            onClose={toggleMenu}
            closeButtonProps={{
              icon: <Burger opened={true} className="mr-10" />,
            }}
          >
            <NavItem styleNav="flex flex-col gap-6" />
            {/* <Group className="flex-col flex-nowrap ml-2 lg:ml-4">{items}</Group> */}
          </Drawer>
          <Group className="ml-2 lg:ml-4" visibleFrom="xs">
            <NavItem />
          </Group>
        </Group>
      </Container>
    </header>
  );
}
