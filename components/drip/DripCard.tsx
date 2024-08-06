import {
  View,
  Text,
  InputField,
  Input,
  Pressable,
  CloseIcon,
  Switch,
} from "@gluestack-ui/themed";
import { useState } from "react";

interface Props {
  index: number;
  water: number;
  time: number;
  isLast: boolean;
  onChangeHandler: (
    index: number,
    key: string,
    value: string | boolean
  ) => void;
  removeCardAction: (index: number) => void;
}

export default function DripCard({
  index,
  water,
  time,
  isLast,
  onChangeHandler,
  removeCardAction,
}: Props) {
  const increaseWater = () => {
    if (water >= 0) {
      onChangeHandler(index, "water", String(water + 1));
    }
  };

  const decreaseWater = () => {
    if (water > 0) {
      onChangeHandler(index, "water", String(water - 1));
    }
  };

  const increaseTime = () => {
    if (time >= 0) {
      onChangeHandler(index, "time", String(time + 1));
    }
  };

  const decreaseTime = () => {
    if (time > 0) {
      onChangeHandler(index, "time", String(time - 1));
    }
  };

  const toggleIsLast = () => {
    onChangeHandler(index, "isLast", !isLast);
  };

  return (
    <View className="px-3 py-3 border-teal-900 rounded-lg border">
      <View className="flex-row justify-between items-center">
        <View className="rounded-full bg-lightBlue-500 justify-center items-center w-5 h-5">
          <Text style={{ color: "white", fontWeight: "bold" }}>
            {index + 1}
          </Text>
        </View>

        {index > 0 && (
          <Pressable onPress={() => removeCardAction(index)}>
            <Text className="text-red-900 text-sm">Remove</Text>
          </Pressable>
        )}
      </View>

      <View className="mt-5 gap-3 px-2">
        <View className="flex-row justify-between">
          <View className="flex-row gap-1 items-center">
            <Text className="text-lg">물</Text>
            <Input
              className="text-lg"
              variant="underlined"
              size="md"
              isDisabled={false}
              isInvalid={false}
              isReadOnly={false}
            >
              <InputField
                value={water > 0 ? String(water) : undefined}
                onChangeText={(value) => onChangeHandler(index, "water", value)}
                placeholder="0"
              />
            </Input>
            <Text className="text-lg">g</Text>
          </View>

          <View className="flex-row gap-2">
            <Pressable
              className="w-[20px] h-[20px] justify-center items-center rounded-full bg-gray-200"
              onPress={increaseWater}
            >
              <Text>+</Text>
            </Pressable>
            <Pressable
              className="w-[20px] h-[20px] justify-center items-center rounded-full bg-gray-200"
              onPress={decreaseWater}
            >
              <Text>-</Text>
            </Pressable>
          </View>
        </View>

        {!isLast && (
          <View className="flex-row justify-between">
            <View className="flex-row gap-1 items-center">
              <Text className="text-lg">다음 푸어까지 </Text>
              <Input
                className="text-lg"
                variant="underlined"
                size="md"
                isDisabled={false}
                isInvalid={false}
                isReadOnly={false}
              >
                <InputField
                  value={time > 0 ? String(time) : undefined}
                  onChangeText={(value) =>
                    onChangeHandler(index, "time", value)
                  }
                  placeholder="0"
                />
              </Input>
              <Text className="text-lg">초 기다리기</Text>
            </View>

            <View className="flex-row gap-2">
              <Pressable
                className="w-[20px] h-[20px] justify-center items-center rounded-full bg-gray-200"
                onPress={increaseTime}
              >
                <Text>+</Text>
              </Pressable>
              <Pressable
                className="w-[20px] h-[20px] justify-center items-center rounded-full bg-gray-200"
                onPress={decreaseTime}
              >
                <Text>-</Text>
              </Pressable>
            </View>
          </View>
        )}

        {index !== 0 && (
          <View className="flex-row justify-end items-center gap-2">
            <Text className={"text-neutral-400"}>마지막 푸어링</Text>
            <Switch value={isLast} onToggle={toggleIsLast} />
          </View>
        )}
      </View>
    </View>
  );
}
