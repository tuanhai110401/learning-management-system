import { Button, ButtonProps } from "@mantine/core";
import React from "react";

interface ButtonCustomProps extends ButtonProps {
  title: string;
  p?: string;
}
export default function ButtonCustom(prop: ButtonCustomProps) {
  return (
    <Button style={{ padding: prop.p || "8px", height: "auto" }} {...prop}>
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
