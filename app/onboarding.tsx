import Onboarding from "@/components/onboarding/Onboarding";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function OnboardingScreen() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <View style={styles.screen}>
      <Onboarding
        total={4}
        selectedIndex={selectedIndex}
        onIndexChange={(index) => setSelectedIndex(index)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
