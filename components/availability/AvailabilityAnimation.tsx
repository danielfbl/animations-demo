import { HomeType } from "@/mocks/homes";
import { Text, View } from "react-native";

type AvailabilityAnimProps = {
  data: HomeType[];
};

export default function AvailabilityAnimation({ data }: AvailabilityAnimProps) {
  return (
    <View>
      <Text>{data.length} available</Text>
    </View>
  );
}
