import CheckBoxList from "@/components/check/CheckBoxList";
import ModalDatePicker from "@/components/date/ModalDatePicker";
import AddBeanModal from "@/components/modal/AddBeanModal";
import InputSelector from "@/components/selector/InputSelector";
import useMyDrip from "@/hooks/useMyDrip";
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
import { useRef, useState } from "react";
import { Alert, Pressable } from "react-native";

export default function DripScreen() {
  const [isOpenAddBeanModal, setIsOpenAddBeanModal] = useState<boolean>(false);

  const [checkList, setCheckList] = useState(["고소한"]);

  const [date, setDate] = useState<Date | undefined>(new Date());

  const [inputValue, setInputValue] = useState<string>("");
  const [sliderValue, setSliderValue] = useState<number>(30);

  const { getMyBeans } = useMyDrip();

  const handleSliderChange = (value: number) => {
    setSliderValue(value);
  };

  const onPressSave = async () => {
    console.log(date);
    console.log(inputValue);
    console.log(sliderValue);

    const gg = await getMyBeans();
    console.log(gg);
  };

  const saveNewBean = () => {
    console.log("save");
  };

  const getIsSaveButtonDisabled = () => {
    if (!inputValue || inputValue === "") return true;

    return false;
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
              </FormControl>
              {/* <Input size="md" flex={1}>
                <InputField
                  type="text"
                  placeholder="메모"
                  value={inputValue}
                  onChangeText={setInputValue}
                />
              </Input> */}
              <InputSelector />
              <Button
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
                    value={inputValue}
                    onChangeText={setInputValue}
                  />
                </Input>

                <Text>/</Text>

                <Input size="md" flex={1}>
                  <InputField
                    type="text"
                    placeholder="원두(g)"
                    value={inputValue}
                    onChangeText={setInputValue}
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

      <AddBeanModal
        isOpen={isOpenAddBeanModal}
        setIsOpen={setIsOpenAddBeanModal}
      />
    </SafeAreaView>
  );
}
