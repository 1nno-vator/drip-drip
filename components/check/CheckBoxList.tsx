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

export default function CheckBoxList({ checkList, setCheckList }: Props) {
  return (
    <CheckboxGroup
      aria-label="check box group"
      value={checkList}
      onChange={(keys) => {
        setCheckList(keys);
      }}
    >
      <HStack space="sm" flexWrap="wrap">
        <Checkbox value="고소한">
          <CheckboxIndicator mr="$2">
            <CheckboxIcon as={CheckIcon} />
          </CheckboxIndicator>
          <CheckboxLabel>고소한</CheckboxLabel>
        </Checkbox>
        <Checkbox value="산미있는">
          <CheckboxIndicator mr="$2">
            <CheckboxIcon as={CheckIcon} />
          </CheckboxIndicator>
          <CheckboxLabel>산미있는</CheckboxLabel>
        </Checkbox>
        <Checkbox value="꽃향">
          <CheckboxIndicator mr="$2">
            <CheckboxIcon as={CheckIcon} />
          </CheckboxIndicator>
          <CheckboxLabel>꽃향</CheckboxLabel>
        </Checkbox>
      </HStack>
    </CheckboxGroup>
  );
}
