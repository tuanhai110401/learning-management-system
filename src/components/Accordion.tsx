import { Accordion, AccordionProps } from "@mantine/core";

interface IAccordion {
  title: string;
  children?: JSX.Element | string;
  value: string;
  defaultItem?: boolean;
  variant?: string;
  chevronLeft?: "left" | "right";
  subTitle?: string;
}
export default function CustomAccordion({
  title,
  children,
  value,
  variant,
  defaultItem,
  chevronLeft,
  subTitle,
}: IAccordion) {
  return (
    <Accordion
      defaultValue={defaultItem ? value : null}
      className="cursor-pointer"
      variant={variant || undefined}
      chevronPosition={chevronLeft || "right"}
      radius="md"
    >
      <Accordion.Item value={value}>
        <Accordion.Control
          style={{ fontSize: "16px", fontWeight: "500", lineHeight: "160%" }}
        >
          <div className={`${subTitle && "flex justify-between"}`}>
            <h4 className="text-[#0F172A] text-[16px] font-[500] leading-[160%]">
              {title}
            </h4>
            <p className="text-[#334155] text-[14px]">{subTitle}</p>
          </div>
        </Accordion.Control>
        <Accordion.Panel>{children}</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
