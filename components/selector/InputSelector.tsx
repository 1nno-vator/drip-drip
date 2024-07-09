import {
  View,
  Text,
  Input,
  InputField,
  Modal,
  Pressable,
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  ChevronDownIcon,
  Icon,
  SelectPortal,
  SelectBackdrop,
  SelectDragIndicatorWrapper,
  SelectContent,
  SelectItem,
  SelectDragIndicator,
} from "@gluestack-ui/themed";
import { useEffect, useState } from "react";
import { Alert, Button, StyleSheet, Image } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

export default function InputSelector() {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  useEffect(() => {
    console.log(selectedValue);
  }, [selectedValue]);

  return (
    <Select
      selectedValue={selectedValue}
      onValueChange={(value) => setSelectedValue(value)}
    >
      <SelectTrigger variant="outline" size="lg">
        <SelectInput placeholder="Select option" />
        <Icon as={ChevronDownIcon} mr={"$3"} />
      </SelectTrigger>
      <SelectPortal>
        <SelectBackdrop />
        <SelectContent>
          <SelectDragIndicatorWrapper>
            <SelectDragIndicator />
          </SelectDragIndicatorWrapper>
          <SelectItem label="UX Research" value="ux" />
          <SelectItem label="Web Development" value="web" />
          <SelectItem
            label="Cross Platform Development Process"
            value="cross-platform"
          />
          <SelectItem label="UI Designing" value="ui" isDisabled={true} />
          <SelectItem label="Backend Development" value="backend" />
        </SelectContent>
      </SelectPortal>
    </Select>
  );
}

const styles = StyleSheet.create({
  customComponentContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  text: {
    marginBottom: 20,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tinyLogo: {
    width: 20,
    height: 20,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
    borderWidth: 3,
    borderColor: "white",
  },
});
