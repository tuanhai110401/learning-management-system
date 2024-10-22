import { Button, ButtonProps } from "@mantine/core";
import React from "react";

interface ButtonCustomProps extends ButtonProps {
  title: string;
  p?: string;
  height?: string;
  click?: () => void;
}
export default function ButtonCustom({ click, ...prop }: ButtonCustomProps) {
  return (
    <Button
      style={{ padding: prop.p || "8px", height: prop.height || "auto" }}
      {...prop}
      onClick={click}
    >
      {prop.title}
    </Button>
  );
}

/*
variant: filled (df)/ default / light/ outline / subtle / gradient
disabled: boolean
loading: boolean
color: string
*/
