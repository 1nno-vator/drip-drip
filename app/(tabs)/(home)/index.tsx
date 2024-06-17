import { View } from "react-native";
import { Card, Heading, Text } from "@gluestack-ui/themed";

export default function HomeScreen() {
  return (
    <View>
      <Card size="lg" variant="filled" m="$3">
        <Heading mb="$1" size="md">
          Quick Start
        </Heading>
        <Text size="sm">Start building your next project in minutes</Text>
      </Card>
    </View>
  );
}
