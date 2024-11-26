import AvailabilityAnimation from "@/components/availability/AvailabilityAnimation";
import { generateHomes, HomeType } from "@/mocks/homes";
import { useRef, useState } from "react";
import { Button, StyleSheet, View } from "react-native";

export default function Availability() {
  const [data, setData] = useState<HomeType[]>(generateHomes());
  const [isLoading, setIsLoading] = useState(false);
  const timer = useRef<NodeJS.Timeout | null>(null);
  return (
    <View style={styles.screen}>
      <AvailabilityAnimation data={data} isLoading={isLoading} />

      <Button
        title={"Find new homes"}
        disabled={isLoading}
        onPress={() => {
          clearTimeout(timer.current!);
          setIsLoading(true);
          setTimeout(() => {
            setIsLoading(false);
            setData(generateHomes());
          }, Math.random() * 1000 + 1000);
        }}
      />
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
