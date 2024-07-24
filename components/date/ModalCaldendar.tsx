import { SafeAreaView } from "@/components/ui/safe-area-view";
import { View } from "@/components/ui/view";

import {
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@/components/ui/modal";

import { Heading } from "@/components/ui/heading";
import { CloseIcon, Icon } from "@/components/ui/icon";
import { Center } from "@/components/ui/center";
import { Button, ButtonText } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { CalendarList, LocaleConfig } from "react-native-calendars";
import { useRef, useState } from "react";

export default function ModalCaldendar() {
  const [showModal, setShowModal] = useState(false);
  console.log(showModal);
  const ref = useRef(null);
  return (
    <SafeAreaView>
      <Center>
        <Button onPress={() => setShowModal(true)} ref={ref}>
          <ButtonText>Show Modal</ButtonText>
        </Button>
        <Modal
          isOpen={showModal}
          onClose={() => {
            setShowModal(false);
          }}
          finalFocusRef={ref}
          size="full"
        >
          <ModalBackdrop />
          <View
            style={{
              backgroundColor: "red",
              justifyContent: "center",
              alignItems: "center",
              height: 350,
            }}
          >
            <CalendarList
              onDayPress={(day) => {
                console.log("selected day", day);
              }}
              style={{
                backgroundColor: "blue",
              }}
              contentContainerStyle={{
                justifyContent: "center",
                alignItems: "center",
              }}
              calendarHeight={350}
              hideExtraDays
              horizontal
              pagingEnabled
            />
          </View>
        </Modal>
      </Center>
    </SafeAreaView>
  );
}
