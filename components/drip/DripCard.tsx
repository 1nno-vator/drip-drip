import {
  View,
  Text,
  InputField,
  Input,
  Pressable,
  CloseIcon,
} from "@gluestack-ui/themed";
import { useState } from "react";

interface Props {
  index: number;
}

export default function DripCard({ index }: Props) {
  const [water, setWater] = useState<number>(0);
  const [time, setTime] = useState<number>(0);

  const onChangeWater = (value: string) => {
    setWater(Number(value));
  };

  const onChangeTime = (value: string) => {
    setTime(Number(value));
  };

  const increaseWater = () => {
    if (water >= 0) {
      setWater(water + 1);
    }
  };

  const decreaseWater = () => {
    if (water > 0) {
      setWater(water - 1);
    }
  };

  const increaseTime = () => {
    if (time >= 0) {
      setTime(time + 1);
    }
  };

  const decreaseTime = () => {
    if (time > 0) {
      setTime(time - 1);
    }
  };

  return (
    <View className="px-3 py-3 border-teal-900 border-[1px] rounded-lg">
      <View className="flex-row justify-between items-center">
        <View className="rounded-full bg-gray-300 justify-center items-center w-[20px] h-[20px]">
          <Text>{index + 1}</Text>
        </View>

        {index > 0 && (
          <View>
            <Text className="text-red-900 text-sm">Remove</Text>
          </View>
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
                onChangeText={onChangeWater}
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
                onChangeText={onChangeTime}
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
      </View>
    </View>
  );
}
