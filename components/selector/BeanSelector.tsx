import { ChevronDownIcon, Icon } from "@/components/ui/icon";

import {
  Select,
  SelectTrigger,
  SelectInput,
  SelectPortal,
  SelectBackdrop,
  SelectDragIndicatorWrapper,
  SelectContent,
  SelectItem,
  SelectDragIndicator,
} from "@/components/ui/select";

import useMyDrip from "@/hooks/useMyDrip";
import { IBean } from "@/type/bean";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";

interface Props {
  selectedBeanName: string;
  setSelectedBeanName: (value: string) => void;
}

export default function BeanSelector({
  selectedBeanName,
  setSelectedBeanName,
}: Props) {
  const { getMyBeans } = useMyDrip();
  const [myBeanList, setMyBeanList] = useState<IBean[]>();

  useEffect(() => {
    if (myBeanList) {
      const selectedBean = myBeanList?.find(
        (value) => value.name === selectedBeanName
      );
      console.log(selectedBean);
    }
  }, [selectedBeanName]);

  const fetchData = async () => {
    const data = await getMyBeans();
    setMyBeanList(data ? JSON.parse(data) : []);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!myBeanList || myBeanList?.length === 0) {
    return null;
  }

  return (
    <Select
      selectedValue={selectedBeanName}
      onValueChange={(value) => {
        console.log(value);
        if (value !== "No beans found") {
          setSelectedBeanName(value);
        }
      }}
      onOpen={() => fetchData()}
    >
      <SelectTrigger variant="outline" size="lg">
        <SelectInput placeholder="Select option" />
        <Icon as={ChevronDownIcon} className="mr-3" />
      </SelectTrigger>
      <SelectPortal>
        <SelectBackdrop />
        <SelectContent className="py-4">
          <SelectDragIndicatorWrapper>
            <SelectDragIndicator />
          </SelectDragIndicatorWrapper>
          {myBeanList && myBeanList?.length > 0 ? (
            myBeanList?.map((value) => {
              return (
                <SelectItem
                  key={value?.name}
                  label={value?.name}
                  value={value?.name}
                />
              );
            })
          ) : (
            <SelectItem label="No beans found" value="No beans found" />
          )}
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
