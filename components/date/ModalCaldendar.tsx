import {
  Text,
  Button,
  ButtonText,
  Center,
  CloseIcon,
  Heading,
  Icon,
  Modal,
  ModalBackdrop,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  View,
  SafeAreaView,
} from "@gluestack-ui/themed";
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
