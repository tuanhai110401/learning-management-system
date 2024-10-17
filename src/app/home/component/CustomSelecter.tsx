"use client";
import { ChevronBottom, ChevronRight } from "@/svg";
import { Select } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const dataDefaults = ["Default", "Name", "Date", "Popular"];
export default function SelectOption({
  dataOptions,
  defaultValue,
  valueOption,
  setValueOption,
}: {
  dataOptions?: [string];
  defaultValue?: string;
  valueOption?: string;
  setValueOption?: (value: string) => void | undefined;
}) {
  const [dropdownOpened, { toggle }] = useDisclosure();
  const handleOnChange = (e: any) => {
    if (e && setValueOption) {
      setValueOption(e);
    }
    toggle();
  };
  return (
    <Select
      onClick={toggle}
      className="h-auto w-32 select-none"
      rightSectionPointerEvents="none"
      rightSection={dropdownOpened ? <ChevronBottom /> : <ChevronRight />}
      size="md"
      data={dataOptions ? dataOptions : dataDefaults}
      allowDeselect={false}
      checkIconPosition="right"
      value={valueOption || defaultValue}
      onChange={(e) => {
        handleOnChange(e);
      }}
      defaultValue={defaultValue ? defaultValue : "Default"}
      comboboxProps={{ shadow: "sm" }}
      dropdownOpened={dropdownOpened}
    />
  );
}
