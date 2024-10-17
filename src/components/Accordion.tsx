import { Accordion } from "@mantine/core";

interface IAccordion {
  title: string;
  children?: JSX.Element | string;
  value: string;
  defaultValue?: boolean;
}
export default function CustomAccordion({
  title,
  children,
  value,
  defaultValue,
}: IAccordion) {
  return (
    <Accordion
      defaultValue={defaultValue ? value : null}
      className="cursor-pointer"
    >
      <Accordion.Item value={value}>
        <Accordion.Control
          style={{ fontSize: "16px", fontWeight: "500", lineHeight: "160%" }}
        >
          {title}
        </Accordion.Control>
        <Accordion.Panel>{children}</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
