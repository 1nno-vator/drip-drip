import CheckBoxList from "@/components/check/CheckBoxList";
import ModalDatePicker from "@/components/date/ModalDatePicker";
import AddBeanModal from "@/components/modal/AddBeanModal";
import BeanSelector from "@/components/selector/BeanSelector";
import useMyDrip from "@/hooks/useMyDrip";
import { convertSliderValue, roundToDecimalPlace } from "@/utils/convert";
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
  ModalHeader,
  Icon,
  HStack,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Tooltip,
  Center,
  TooltipContent,
  ModalCloseButton,
  VStack,
  Button,
  ButtonText,
  ButtonIcon,
  AddIcon,
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalBody,
  ModalFooter,
  CloseIcon,
  // Pressable,
} from "@gluestack-ui/themed";
import { useEffect, useRef, useState } from "react";
import { Alert, Pressable } from "react-native";

export default function DripScreen() {
  const [isOpenAddBeanModal, setIsOpenAddBeanModal] = useState<boolean>(false);

  const [date, setDate] = useState<Date | undefined>(new Date());

  const [selectedBeanName, setSelectedBeanName] = useState<string>("");
  const [inputWaterValue, setInputWaterValue] = useState<string>("");
  const [inputGroundBeanValue, setInputGroundBeanValue] = useState<string>("");

  const [sliderValue, setSliderValue] = useState<number>(30);

  const [inputWaterAt, setInputWaterAt] = useState<string>("");

  // 입력 필드 상태를 관리하는 상태 변수 (빈 배열로 초기화)
  const [inputs, setInputs] = useState([
    {
      id: Date.now(),
      type: "WATER_TEMPERATURE",
      label: "물 온도(°c)",
      value: "",
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

  // 입력 필드 추가 함수
  const addInputField = () => {
    setInputs([...inputs, { id: Date.now(), value: "" }]);
  };

  // 입력 필드 값 변경 핸들러
  const handleInputChange = (id, newValue) => {
    setInputs(
      inputs.map((input) =>
        input.id === id ? { ...input, value: newValue } : input
      )
    );
  };

  // 모든 입력 필드의 값 출력
  const handleSubmit = () => {
    console.log(inputs);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        nestedScrollEnabled={true}
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

                <BeanSelector
                  selectedBeanName={selectedBeanName}
                  setSelectedBeanName={setSelectedBeanName}
                />
                <Button
                  mt={"$2"}
                  size="md"
                  variant="solid"
                  action="positive"
                  isDisabled={false}
                  isFocusVisible={false}
                  onPress={() => setIsOpenAddBeanModal((prev) => !prev)}
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
              justifyContent="center"
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
                <Text textAlign="center">
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
              justifyContent="center"
            >
              <FormControlLabel>
                <FormControlLabelText>원두/물</FormControlLabelText>
              </FormControlLabel>

              <HStack alignItems="center" gap={"$3"}>
                <Input size="md" flex={1}>
                  <InputField
                    type="text"
                    placeholder="원두(g)"
                    value={inputGroundBeanValue}
                    onChangeText={setInputGroundBeanValue}
                  />
                </Input>

                <Text>/</Text>

                <Input size="md" flex={1}>
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
            <VStack space="md">
              <FormControl
                size="md"
                isDisabled={false}
                isInvalid={false}
                isReadOnly={false}
                isRequired={false}
                justifyContent="center"
              >
                <FormControlLabel>
                  <FormControlLabelText>추출기록</FormControlLabelText>
                </FormControlLabel>

                <Box paddingVertical={"$3"}>
                  {inputs.map((input) => (
                    <HStack gap={"$2"}>
                      <FormControlLabel minWidth={"$3"}>
                        <FormControlLabelText>
                          {input.label}
                        </FormControlLabelText>
                      </FormControlLabel>

                      <Input size="md" flex={1} key={`${input.id}_field`}>
                        <InputField
                          key={`${input.id}_${input.type}`}
                          type="text"
                          placeholder={`${input.label}를 입력해주세요`}
                          value={input.value}
                          onChangeText={(text) =>
                            handleInputChange(input.id, text)
                          }
                        />
                      </Input>
                    </HStack>
                  ))}
                  <Button onPress={addInputField}>
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
