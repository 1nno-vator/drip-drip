import ModalDatePicker from "@/components/date/ModalDatePicker";
import InputSelector from "@/components/selector/InputSelector";
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
  Button,
  ButtonText,
  ButtonIcon,
  AddIcon,
  // Pressable,
} from "@gluestack-ui/themed";
import { useState } from "react";
import { Alert, Pressable } from "react-native";

export default function DripScreen() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const [inputMemo, setInputMemo] = useState<string>("");
  const [sliderValue, setSliderValue] = useState<number>(30);

  const handleSliderChange = (value: number) => {
    setSliderValue(value);
  };

  const onPressSave = () => {
    console.log(date);
    console.log(inputMemo);
    console.log(sliderValue);
  };

  const getIsSaveButtonDisabled = () => {
    if (!inputMemo || inputMemo === "") return true;

    return false;
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        nestedScrollEnabled={false}
        alwaysBounceVertical={false}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 80 }}
      >
        <HStack space="md" justifyContent="space-between" alignItems="center">
          <HStack>
            <Heading paddingVertical={"$3"}>나의 드립</Heading>
            <ModalDatePicker date={date} setDate={setDate} showTimePicker />
          </HStack>

          <Button
            size="sm"
            variant="link"
            action={getIsSaveButtonDisabled() ? "secondary" : "primary"}
            isDisabled={getIsSaveButtonDisabled()}
            isFocusVisible={false}
            bg="transparent"
            onPress={onPressSave}
          >
            <ButtonText>저장</ButtonText>
            <ButtonIcon as={AddIcon} />
          </Button>
        </HStack>

        <Box w="$full" mt={"$5"} gap={"$8"}>
          <Box>
            <VStack space="md">
              <FormControl
                size="md"
                isDisabled={false}
                isInvalid={false}
                isReadOnly={false}
                isRequired={true}
                justifyContent="center"
              >
                <FormControlLabel>
                  <FormControlLabelText>원두 종류</FormControlLabelText>
                </FormControlLabel>
              </FormControl>
              {/* <Input size="md" flex={1}>
                <InputField
                  type="text"
                  placeholder="메모"
                  value={inputMemo}
                  onChangeText={setInputMemo}
                />
              </Input> */}
              <InputSelector />
            </VStack>
          </Box>

          <VStack>
            <FormControl
              size="md"
              isDisabled={false}
              isInvalid={false}
              isReadOnly={false}
              isRequired={true}
              justifyContent="center"
            >
              <FormControlLabel>
                <FormControlLabelText>원두 굵기</FormControlLabelText>
              </FormControlLabel>
            </FormControl>

            <VStack style={{ marginTop: 4, flex: 1, gap: 12 }}>
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
              <Text textAlign="center">{convertSliderValue(sliderValue)}</Text>
            </VStack>
          </VStack>

          <Box>
            <VStack space="md">
              <FormControl
                size="md"
                isDisabled={false}
                isInvalid={false}
                isReadOnly={false}
                isRequired={true}
                justifyContent="center"
              >
                <FormControlLabel>
                  <FormControlLabelText>물/원두</FormControlLabelText>
                </FormControlLabel>
              </FormControl>
              <HStack alignItems="center" gap={"$3"}>
                <Input size="md" flex={1}>
                  <InputField
                    type="text"
                    placeholder="물(g)"
                    value={inputMemo}
                    onChangeText={setInputMemo}
                  />
                </Input>

                <Text>/</Text>

                <Input size="md" flex={1}>
                  <InputField
                    type="text"
                    placeholder="원두(g)"
                    value={inputMemo}
                    onChangeText={setInputMemo}
                  />
                </Input>
              </HStack>
            </VStack>
          </Box>

          <Box>
            <VStack space="md">
              <FormControl
                size="md"
                isDisabled={false}
                isInvalid={false}
                isReadOnly={false}
                isRequired={true}
                justifyContent="center"
              >
                <FormControlLabel>
                  <FormControlLabelText>추출기록</FormControlLabelText>
                </FormControlLabel>
              </FormControl>
            </VStack>
          </Box>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
}
