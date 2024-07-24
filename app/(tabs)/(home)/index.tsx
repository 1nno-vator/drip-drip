import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import { Card } from "@/components/ui/card";
import { View } from "react-native";

export default function HomeScreen() {
  return (
    <View>
      <Card size="lg" variant="filled" className="m-3">
        <Heading size="md" className="mb-1">
          Quick Start
        </Heading>
        <Text size="sm">Start building your next project in minutes</Text>
      </Card>
    </View>
  );
}
