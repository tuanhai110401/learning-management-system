"use client";
import Banner from "@/components/Banner";
import { Text, Title } from "@mantine/core";
import SectionStats from "./component/SectionStats";
import TopTitle from "./component/TopTitle";

const ThemeToggle = () => {
  return (
    <>
      <Banner />
      <SectionStats />
      <TopTitle title="Top Categories" link="/categories" />
      <Title ta="center" mt={100}>
        Welcome to{" "}
        <Text
          inherit
          variant="gradient"
          component="span"
          gradient={{ from: "pink", to: "yellow" }}
        >
          Mantine
        </Text>
      </Title>
    </>
  );
};

export default ThemeToggle;
