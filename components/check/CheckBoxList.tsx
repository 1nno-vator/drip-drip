import {
  CheckIcon,
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
  CheckboxGroup,
  HStack,
} from "@gluestack-ui/themed";
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
    <Checkbox aria-label={value} gap="$1" value={value}>
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
      mt={"$3"}
    >
      <HStack space="sm" flexWrap="wrap">
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
