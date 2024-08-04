import { Button, ButtonText, ButtonIcon } from "@/components/ui/button";
import { VStack } from "@/components/ui/vstack";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@/components/ui/slider";
import { HStack } from "@/components/ui/hstack";
import { AddIcon } from "@/components/ui/icon";

import { Input, InputField } from "@/components/ui/input";

import {
  FormControl,
  FormControlHelper,
  FormControlHelperText,
  FormControlLabel,
  FormControlLabelText,
} from "@/components/ui/form-control";

import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Box } from "@/components/ui/box";
import { SafeAreaView } from "@/components/ui/safe-area-view";
import ModalDatePicker from "@/components/date/ModalDatePicker";
import AddBeanModal from "@/components/modal/AddBeanModal";
import BeanSelector from "@/components/selector/BeanSelector";
import useMyDrip from "@/hooks/useMyDrip";
import { convertSliderValue, roundToDecimalPlace } from "@/utils/convert";
import { useState } from "react";
import DripCard from "@/components/drip/DripCard";
import { ScrollView } from "@/components/ui/scroll-view";
import { Switch } from "@/components/ui/switch";

export default function DripScreen() {
  const [isOpenAddBeanModal, setIsOpenAddBeanModal] = useState<boolean>(false);

  const [date, setDate] = useState<Date | undefined>(new Date());

  const [selectedBeanName, setSelectedBeanName] = useState<string>("");
  const [inputWaterValue, setInputWaterValue] = useState<string>("");
  const [inputGroundBeanValue, setInputGroundBeanValue] = useState<string>("");

  const [sliderValue, setSliderValue] = useState<number>(30);

  const [isRinsing, setIsRinsing] = useState<boolean>(false);

  // 입력 필드 상태를 관리하는 상태 변수 (빈 배열로 초기화)
  const [inputs, setInputs] = useState<any>([
    {
      index: 0,
      water: 0,
      time: 0,
    },
  ]);

  const { getMyBeans } = useMyDrip();

  const handleSliderChange = (value: number) => {
    setSliderValue(value);
  };

  const onPressSave = async () => {
    console.log(date);
    console.log(inputWaterValue);
    console.log(sliderValue);

    const gg = await getMyBeans();
    console.log(gg);
  };

  const saveNewBean = () => {
    console.log("save");
  };

  const getIsSaveButtonDisabled = () => {
    const validateWater = Number(inputWaterValue) > 0;
    const validateGroundBean = Number(inputGroundBeanValue) > 0;

    if (!validateWater || !validateGroundBean) return true;

    return false;
  };

  const getCoffeeWaterRatio = () => {
    const validateWater = Number(inputWaterValue) > 0;
    const validateGroundBean = Number(inputGroundBeanValue) > 0;

    if (!validateWater || !validateGroundBean) return "";

    const standard = Number(inputGroundBeanValue);
    const waterRelatedBeanRatio = roundToDecimalPlace(
      Number(inputWaterValue) / Number(inputGroundBeanValue),
      1
    );
    const beanRelatedWaterRatio = Number(inputGroundBeanValue) / standard;

    return `${beanRelatedWaterRatio}:${waterRelatedBeanRatio}`;
  };

  const handleAddField = () => {
    setInputs([...inputs, { index: inputs.length, water: 0, time: 0 }]);
  };

  const handleRemoveField = (index) => {
    setInputs(inputs.filter((field) => field.index !== index));
  };

  const handleInputChange = (index, key, value) => {
    setInputs(
      inputs.map((field) =>
        field.index === index ? { ...field, [key]: parseInt(value) } : field
      )
    );
  };

  const handleSubmit = () => {
    console.log(inputs);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HStack space="md" className="justify-between items-center px-4">
        <HStack>
          <Heading className="py-3">나의 드립</Heading>
          <ModalDatePicker date={date} setDate={setDate} showTimePicker />
        </HStack>

        <Button
          size="sm"
          variant="link"
          action={getIsSaveButtonDisabled() ? "secondary" : "primary"}
          isDisabled={getIsSaveButtonDisabled()}
          isFocusVisible={false}
          onPress={onPressSave}
          className="bg-transparent"
        >
          <ButtonText>저장</ButtonText>
          <ButtonIcon as={AddIcon} />
        </Button>
      </HStack>
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 80 }}
      >
        <Box className="w-full mt-5 gap-8">
          <Box>
            <VStack space="md">
              <FormControl
                size="md"
                isDisabled={false}
                isInvalid={false}
                isReadOnly={false}
                isRequired={true}
                className="justify-center"
              >
                <FormControlLabel>
                  <FormControlLabelText>원두 종류</FormControlLabelText>
                </FormControlLabel>

                <BeanSelector
                  selectedBeanName={selectedBeanName}
                  setSelectedBeanName={setSelectedBeanName}
                />
                <Button
                  size="md"
                  variant="solid"
                  action="positive"
                  isDisabled={false}
                  isFocusVisible={false}
                  onPress={() => setIsOpenAddBeanModal((prev) => !prev)}
                  className="mt-2"
                >
                  <ButtonText>원두 추가</ButtonText>
                  <ButtonIcon as={AddIcon} />
                </Button>
              </FormControl>
            </VStack>
          </Box>

          <VStack>
            <FormControl
              size="md"
              isDisabled={false}
              isInvalid={false}
              isReadOnly={false}
              isRequired={true}
              className="justify-center"
            >
              <FormControlLabel>
                <FormControlLabelText>원두 굵기</FormControlLabelText>
              </FormControlLabel>

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
                <Text className="text-center">
                  {convertSliderValue(sliderValue)}
                </Text>
              </VStack>
            </FormControl>
          </VStack>

          <Box>
            <FormControl
              size="md"
              isDisabled={false}
              isInvalid={
                Number(inputWaterValue) <= 0 ||
                Number(inputGroundBeanValue) <= 0
              }
              isReadOnly={false}
              isRequired={true}
              className="justify-center"
            >
              <FormControlLabel>
                <FormControlLabelText>원두/물</FormControlLabelText>
              </FormControlLabel>

              <HStack className="items-center gap-3">
                <Input size="md" className="flex-1">
                  <InputField
                    type="text"
                    placeholder="원두(g)"
                    value={inputGroundBeanValue}
                    onChangeText={setInputGroundBeanValue}
                  />
                </Input>

                <Text>/</Text>

                <Input size="md" className="flex-1">
                  <InputField
                    type="text"
                    placeholder="물(g)"
                    value={inputWaterValue}
                    onChangeText={setInputWaterValue}
                  />
                </Input>
              </HStack>

              <FormControlHelper>
                <FormControlHelperText>
                  비율:{" "}
                  {Number(inputWaterValue) > 0 &&
                    Number(inputGroundBeanValue) > 0 &&
                    getCoffeeWaterRatio()}
                </FormControlHelperText>
              </FormControlHelper>
            </FormControl>
          </Box>

          <Box>
            <FormControl
              size="md"
              isDisabled={false}
              isInvalid={false}
              isReadOnly={false}
              isRequired={false}
              className="justify-center"
            >
              <FormControlLabel>
                <FormControlLabelText>린싱</FormControlLabelText>
              </FormControlLabel>
              <Switch value={isRinsing} onToggle={setIsRinsing} />
            </FormControl>
          </Box>

          <Box>
            <VStack space="md">
              <FormControl
                size="md"
                isDisabled={false}
                isInvalid={false}
                isReadOnly={false}
                isRequired={false}
                className="justify-center"
              >
                <FormControlLabel>
                  <FormControlLabelText>추출기록</FormControlLabelText>
                </FormControlLabel>

                <Box className="py-3 gap-1">
                  {inputs.map((input, idx) => (
                    <DripCard
                      index={input.index}
                      water={input.water}
                      time={input.time}
                      onChangeHandler={handleInputChange}
                      removeCardAction={handleRemoveField}
                    />
                  ))}

                  <Button onPress={handleAddField}>
                    <ButtonText>추가</ButtonText>
                  </Button>
                  <Button onPress={handleSubmit}>
                    <ButtonText>조회</ButtonText>
                  </Button>
                </Box>
              </FormControl>
            </VStack>
          </Box>
        </Box>
      </ScrollView>
      <AddBeanModal
        isOpen={isOpenAddBeanModal}
        setIsOpen={setIsOpenAddBeanModal}
      />
    </SafeAreaView>
  );
}
