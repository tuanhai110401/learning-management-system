"use client";
import {
  Autocomplete,
  Group,
  Burger,
  Container,
  Text,
  Drawer,
} from "@mantine/core";
import { useState } from "react";
const links = [
  { link: "/about", label: "Features" },
  { link: "/pricing", label: "Pricing" },
  { link: "/learn", label: "Learn" },
  { link: "/community", label: "Community" },
];

export function HeaderSearch() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const items = links.map((link) => (
    <a key={link.label} href={link.link}>
      {link.label}
    </a>
  ));
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
            // leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
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
              icon: <Burger opened={true} />,
            }}
          >
            <Group className="flex-col flex-nowrap ml-2 lg:ml-4">{items}</Group>
          </Drawer>
          <Group className="flex-nowrap ml-2 lg:ml-4" visibleFrom="xs">
            {items}
          </Group>
        </Group>
      </Container>
    </header>
  );
}
