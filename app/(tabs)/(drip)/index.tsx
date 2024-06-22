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
                  <FormControlLabelText>레시피 제목</FormControlLabelText>
                </FormControlLabel>
              </FormControl>
              <Input size="md" flex={1}>
                <InputField
                  type="text"
                  placeholder="메모"
                  value={inputMemo}
                  onChangeText={setInputMemo}
                />
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
                <FormControlLabelText>원두 굵기</FormControlLabelText>
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
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
}
