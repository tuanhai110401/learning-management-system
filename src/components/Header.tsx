"use client";
import {
  Autocomplete,
  Group,
  Burger,
  Container,
  Text,
  Drawer,
  Skeleton,
} from "@mantine/core";
import { useState, useEffect } from "react";
import { Search } from "@/svg";
import { NavItem } from "./NavItems";
import { useAuthStore, useCart } from "@/lib/store";
import Link from "next/link";
import { toast } from "react-toastify";
import { useCheckAuth } from "@/utils/supabase/handlers/userInfo";

export function HeaderSearch() {
  const { isLogin, userId, setUserId, setLogin, clearAuth } = useAuthStore();
  const { cart } = useCart();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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
            onClick={() => console.log(userId)}
          >
            <Link href="/">Mantine</Link>
          </Text>
        </Group>

        <Group className="flex-nowrap">
          <Autocomplete
            className="md:w-60 lg:w-90"
            placeholder="Search"
            leftSection={<Search />}
            data={[]}
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
            {isLoading ? (
              <div className="flex gap-4">
                <Skeleton height={40} width={80} radius="md" />
                <Skeleton height={40} width={80} radius="md" />
              </div>
            ) : (
              <NavItem styleNav="flex flex-col gap-6" />
            )}
          </Drawer>
          <Group className="ml-2 lg:ml-4" visibleFrom="xs">
            {isLoading ? (
              <div className="flex gap-4">
                <Skeleton height={40} width={80} radius="md" />
                <Skeleton height={40} width={80} radius="md" />
              </div>
            ) : (
              <NavItem />
            )}
          </Group>
        </Group>
      </Container>
    </header>
  );
}
