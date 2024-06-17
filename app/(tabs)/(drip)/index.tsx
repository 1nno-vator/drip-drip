import ModalDatePicker from "@/components/date/ModalDatePicker";
import { convertSliderValue } from "@/utils/convert";
import {
  SafeAreaView,
  Box,
  Text,
  Heading,
  ScrollView,
  View,
  FormControl,
  FormControlError,
  FormControlErrorText,
  FormControlErrorIcon,
  FormControlHelper,
  FormControlHelperText,
  Input,
  InputField,
  FormControlLabel,
  FormControlLabelText,
  AlertCircleIcon,
  HStack,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Tooltip,
  Center,
  TooltipContent,
  VStack,
  // Pressable,
} from "@gluestack-ui/themed";
import { useState } from "react";
import { Alert, Pressable } from "react-native";

export default function DripScreen() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [sliderValue, setSliderValue] = useState<number>(30);

  const handleSliderChange = (value: number) => {
    setSliderValue(value);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        alwaysBounceVertical={false}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 80 }}
      >
        <HStack space="md" justifyContent="space-between">
          <HStack>
            <Heading paddingVertical={"$3"}>나의 드립</Heading>
            <ModalDatePicker date={date} setDate={setDate} showTimePicker />
          </HStack>

          <Pressable
            onPress={() => Alert.alert("Temp Save")}
            style={{ justifyContent: "center" }}
          >
            {({ pressed }) => (
              <>
                <Text color={pressed ? "red" : "black"}>저장</Text>
              </>
            )}
          </Pressable>
        </HStack>

        <Box w="$full" mt={"$5"} gap={"$8"}>
          <Box>
            <HStack space="md">
              <FormControl
                size="md"
                isDisabled={false}
                isInvalid={false}
                isReadOnly={false}
                isRequired={true}
                justifyContent="center"
              >
                <FormControlLabel>
                  <FormControlLabelText>메모폼</FormControlLabelText>
                </FormControlLabel>
              </FormControl>
              <Input size="md" flex={1}>
                <InputField type="text" placeholder="메모" />
              </Input>
            </HStack>
          </Box>

          <HStack>
            <FormControl
              size="md"
              isDisabled={false}
              isInvalid={false}
              isReadOnly={false}
              isRequired={true}
              justifyContent="center"
            >
              <FormControlLabel>
                <FormControlLabelText>슬라이더</FormControlLabelText>
              </FormControlLabel>
            </FormControl>

            <VStack style={{ flex: 1, gap: 12 }}>
              <Slider
                step={10}
                sliderTrackHeight={4}
                value={sliderValue}
                maxValue={50}
                minValue={10}
                onChange={(v) => {
                  handleSliderChange(Math.floor(v));
                }}
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
              <Text textAlign="center" height={24}>
                {convertSliderValue(sliderValue)}
              </Text>
            </VStack>
          </HStack>

          <Box>
            <HStack space="md">
              <FormControl
                size="md"
                isDisabled={false}
                isInvalid={false}
                isReadOnly={false}
                isRequired={true}
                justifyContent="center"
              >
                <FormControlLabel>
                  <FormControlLabelText>메모폼</FormControlLabelText>
                </FormControlLabel>
              </FormControl>
              <Input size="md" flex={1}>
                <InputField type="text" placeholder="메모" />
              </Input>
            </HStack>
          </Box>

          <Box>
            <HStack space="md">
              <FormControl
                size="md"
                isDisabled={false}
                isInvalid={false}
                isReadOnly={false}
                isRequired={true}
                justifyContent="center"
              >
                <FormControlLabel>
                  <FormControlLabelText>메모폼</FormControlLabelText>
                </FormControlLabel>
              </FormControl>
              <Input size="md" flex={1}>
                <InputField type="text" placeholder="메모" />
              </Input>
            </HStack>
          </Box>

          <Box>
            <HStack space="md">
              <FormControl
                size="md"
                isDisabled={false}
                isInvalid={false}
                isReadOnly={false}
                isRequired={true}
                justifyContent="center"
              >
                <FormControlLabel>
                  <FormControlLabelText>메모폼</FormControlLabelText>
                </FormControlLabel>
              </FormControl>
              <Input size="md" flex={1}>
                <InputField type="text" placeholder="메모" />
              </Input>
            </HStack>
          </Box>

          <Box>
            <HStack space="md">
              <FormControl
                size="md"
                isDisabled={false}
                isInvalid={false}
                isReadOnly={false}
                isRequired={true}
                justifyContent="center"
              >
                <FormControlLabel>
                  <FormControlLabelText>메모폼</FormControlLabelText>
                </FormControlLabel>
              </FormControl>
              <Input size="md" flex={1}>
                <InputField type="text" placeholder="메모" />
              </Input>
            </HStack>
          </Box>

          <Box>
            <HStack space="md">
              <FormControl
                size="md"
                isDisabled={false}
                isInvalid={false}
                isReadOnly={false}
                isRequired={true}
                justifyContent="center"
              >
                <FormControlLabel>
                  <FormControlLabelText>메모폼</FormControlLabelText>
                </FormControlLabel>
              </FormControl>
              <Input size="md" flex={1}>
                <InputField type="text" placeholder="메모" />
              </Input>
            </HStack>
          </Box>

          <Box>
            <HStack space="md">
              <FormControl
                size="md"
                isDisabled={false}
                isInvalid={false}
                isReadOnly={false}
                isRequired={true}
                justifyContent="center"
              >
                <FormControlLabel>
                  <FormControlLabelText>메모폼</FormControlLabelText>
                </FormControlLabel>
              </FormControl>
              <Input size="md" flex={1}>
                <InputField type="text" placeholder="메모" />
              </Input>
            </HStack>
          </Box>

          <Box>
            <HStack space="md">
              <FormControl
                size="md"
                isDisabled={false}
                isInvalid={false}
                isReadOnly={false}
                isRequired={true}
                justifyContent="center"
              >
                <FormControlLabel>
                  <FormControlLabelText>메모폼</FormControlLabelText>
                </FormControlLabel>
              </FormControl>
              <Input size="md" flex={1}>
                <InputField type="text" placeholder="메모" />
              </Input>
            </HStack>
          </Box>

          <Box>
            <HStack space="md">
              <FormControl
                size="md"
                isDisabled={false}
                isInvalid={false}
                isReadOnly={false}
                isRequired={true}
                justifyContent="center"
              >
                <FormControlLabel>
                  <FormControlLabelText>메모폼</FormControlLabelText>
                </FormControlLabel>
              </FormControl>
              <Input size="md" flex={1}>
                <InputField type="text" placeholder="메모" />
              </Input>
            </HStack>
          </Box>

          <Box>
            <HStack space="md">
              <FormControl
                size="md"
                isDisabled={false}
                isInvalid={false}
                isReadOnly={false}
                isRequired={true}
                justifyContent="center"
              >
                <FormControlLabel>
                  <FormControlLabelText>메모폼</FormControlLabelText>
                </FormControlLabel>
              </FormControl>
              <Input size="md" flex={1}>
                <InputField type="text" placeholder="메모" />
              </Input>
            </HStack>
          </Box>

          <Box>
            <HStack space="md">
              <FormControl
                size="md"
                isDisabled={false}
                isInvalid={false}
                isReadOnly={false}
                isRequired={true}
                justifyContent="center"
              >
                <FormControlLabel>
                  <FormControlLabelText>메모폼</FormControlLabelText>
                </FormControlLabel>
              </FormControl>
              <Input size="md" flex={1}>
                <InputField type="text" placeholder="메모" />
              </Input>
            </HStack>
          </Box>

          <Box>
            <HStack space="md">
              <FormControl
                size="md"
                isDisabled={false}
                isInvalid={false}
                isReadOnly={false}
                isRequired={true}
                justifyContent="center"
              >
                <FormControlLabel>
                  <FormControlLabelText>메모폼</FormControlLabelText>
                </FormControlLabel>
              </FormControl>
              <Input size="md" flex={1}>
                <InputField type="text" placeholder="메모" />
              </Input>
            </HStack>
          </Box>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
}
