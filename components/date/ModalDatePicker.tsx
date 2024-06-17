import { Button, HStack, SafeAreaView, Text } from "@gluestack-ui/themed";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { useState } from "react";

interface Props {
  date: Date | undefined;
  setDate: (value: Date | undefined) => void;
  showTimePicker?: boolean;
}

export default function ModalDatePicker({
  date,
  setDate,
  showTimePicker,
}: Props) {
  const [show, setShow] = useState<boolean>(false);

  const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
    const currentDate = selectedDate;
    setShow(false);
    if (selectedDate) {
      setDate(currentDate);
    }
  };

  return (
    <HStack space="md">
      <DateTimePicker
        testID="dateTimePicker"
        value={date || new Date()}
        mode={"date"}
        is24Hour={true}
        onChange={onChange}
        locale="ko"
      />
      {show && showTimePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date || new Date()}
          mode={"time"}
          is24Hour={true}
          onChange={onChange}
          locale="ko"
        />
      )}
    </HStack>
  );
}
