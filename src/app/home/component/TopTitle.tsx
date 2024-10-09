import { Button, Container, Group } from "@mantine/core";
import React from "react";

interface TitleProps {
  title: string;
  link: string;
}
export default function TopTitle({ title, link }: TitleProps) {
  return (
    <Container fluid className="lg:mx-[80px] sm:mx-[16px] mb-[24px]">
      <Group justify="space-between">
        <h2 className="text-[24px] text-[#0F172A] font-[600] leading-[140%]">
          {title}
        </h2>
        <Button
          variant="subtle"
          className="text-[14px] text-[#3B82F6] font-[500] leading-[160%] px-[24px] py-[10px]"
        >
          See all
        </Button>
      </Group>
    </Container>
  );
}
