import { Input, InputField } from "@/components/ui/input";
import { Button, ButtonText, ButtonIcon } from "@/components/ui/button";
import { View } from "@/components/ui/view";

import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  FormControlHelper,
  FormControlHelperText,
} from "@/components/ui/form-control";

import { Heading } from "@/components/ui/heading";
import { CloseIcon, Icon } from "@/components/ui/icon";

import {
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalCloseButton,
} from "@/components/ui/modal";

import useMyDrip from "@/hooks/useMyDrip";
import { IBean } from "@/type/bean";
import { useRef, useState } from "react";
import { Alert } from "react-native";

interface Props {
  isOpen: boolean;
  setIsOpen: (bool: boolean) => void;
}

export default function AddBeanModal({ isOpen, setIsOpen }: Props) {
  const ref = useRef(null);

  const [beanName, setBeanName] = useState<string>("");
  const [flavorInput, setFlavorInput] = useState<string>("");
  const [flavorList, setFlavorList] = useState<string[]>([]);

  const { getMyBeans, setMyBeans } = useMyDrip();

  const onChangeFlavorInput = (text: string) => {
    setFlavorInput(text);
    if (text.endsWith(" ")) {
      setFlavorList([...flavorList, text.trim()]);
      setFlavorInput("");
    }
  };

  const removeFlavor = (target: string) => {
    setFlavorList(flavorList.filter((flavor) => flavor !== target));
  };

  const saveAction = async () => {
    const myBeans = await getMyBeans();
    const oldBeans = myBeans ? JSON.parse(myBeans) : [];
    const newBean = {
      name: beanName,
      flavorList: flavorList,
    };

    const oldBeansNameList = oldBeans.map((value: IBean) => value.name);
    if (oldBeansNameList.find((name: string) => name === beanName)) {
      return Alert.alert("이미 등록된 원두에요.");
    }

    const merge = oldBeans.length > 0 ? [...oldBeans, newBean] : [newBean];

    await setMyBeans(JSON.stringify(merge));
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        setIsOpen(false);
      }}
      finalFocusRef={ref}
    >
      <ModalBackdrop />
      <ModalContent>
        <ModalHeader>
          <Heading size="lg">원두 추가</Heading>
          <ModalCloseButton>
            <Icon as={CloseIcon} />
          </ModalCloseButton>
        </ModalHeader>
        <ModalBody>
          <FormControl
            size="md"
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
            isRequired={true}
            className="justify-center"
          >
            <FormControlLabel>
              <FormControlLabelText>원두명</FormControlLabelText>
            </FormControlLabel>
            <Input size="md" className="flex-1">
              <InputField
                type="text"
                placeholder="원두명을 입력하세요"
                value={beanName}
                onChangeText={setBeanName}
              />
            </Input>
          </FormControl>

          <FormControl
            size="md"
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
            isRequired={true}
            className="justify-center mt-3"
          >
            <FormControlLabel>
              <FormControlLabelText>커피 풍미</FormControlLabelText>
            </FormControlLabel>

            <Input size="md" className="flex-1">
              <InputField
                type="text"
                placeholder="커피 풍미"
                value={flavorInput}
                onChangeText={onChangeFlavorInput}
              />
            </Input>
            <FormControlHelper>
              <FormControlHelperText>
                2가지 이상의 풍미는 띄어쓰기로 구분해주세요.
              </FormControlHelperText>
            </FormControlHelper>
          </FormControl>

          {flavorList.length > 0 && (
            <View className="flex-row gap-1 flex-wrap mt-2">
              {flavorList.map((flavor, index) => {
                return (
                  <Button
                    key={`key-${flavor}-index`}
                    size="xs"
                    variant="outline"
                    action="secondary"
                    isDisabled={false}
                    isFocusVisible={false}
                    onPress={() => removeFlavor(flavor)}
                    className="self-center"
                  >
                    <ButtonText>{flavor}</ButtonText>
                    <ButtonIcon as={CloseIcon} />
                  </Button>
                );
              })}
            </View>
          )}
        </ModalBody>
        <ModalFooter>
          <Button
            variant="outline"
            size="sm"
            action="secondary"
            onPress={() => {
              setIsOpen(false);
            }}
            className="mr-3"
          >
            <ButtonText>취소</ButtonText>
          </Button>
          <Button
            size="sm"
            action="positive"
            onPress={() => {
              saveAction();
            }}
            className="border-0"
          >
            <ButtonText>추가</ButtonText>
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
