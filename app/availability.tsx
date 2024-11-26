import AvailabilityAnimation from "@/components/availability/AvailabilityAnimation";
import { generateHomes, HomeType } from "@/mocks/homes";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function Availability() {
  const [data, setData] = useState<HomeType[]>(generateHomes());
  return (
    <View style={styles.screen}>
      <AvailabilityAnimation data={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
});
