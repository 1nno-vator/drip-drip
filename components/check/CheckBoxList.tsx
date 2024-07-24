import { HStack } from "@/components/ui/hstack";
import { Checkbox, CheckboxIcon, CheckboxIndicator, CheckboxLabel, CheckboxGroup } from "@/components/ui/checkbox";
import { CheckIcon } from "@/components/ui/icon";
import { useState } from "react";

interface Props {
  checkList: string[];
  setCheckList: (value: string[]) => void;
}

interface CheckBox {
  value: string;
}

function WrappedCheckBox({ value }: CheckBox) {
  return (
    <Checkbox aria-label={value} value={value} className="gap-1">
      <CheckboxIndicator>
        <CheckboxIcon as={CheckIcon} />
      </CheckboxIndicator>
      <CheckboxLabel>{value}</CheckboxLabel>
    </Checkbox>
  );
}

export default function CheckBoxList({ checkList, setCheckList }: Props) {
  return (
    <CheckboxGroup
      aria-label="check box group"
      value={checkList}
      onChange={(keys) => {
        setCheckList(keys);
      }}
      className="mt-3"
    >
      <HStack space="sm" className="flex-wrap">
        <WrappedCheckBox value="고소한" />

        <WrappedCheckBox value="산미있는" />

        <WrappedCheckBox value="꽃향" />

        <WrappedCheckBox value="견과류" />

        <WrappedCheckBox value="곡류" />

        <WrappedCheckBox value="바닐라" />

        <WrappedCheckBox value="블루베리" />

        <WrappedCheckBox value="블루베리" />
      </HStack>
    </CheckboxGroup>
  );
}
