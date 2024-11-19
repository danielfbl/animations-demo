import Tabs from "@/components/tabs/Tabs";
import { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";

export default function AnimatedTabs() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <SafeAreaView style={styles.screen}>
      <Tabs
        data={[
          { icon: "Skull", label: "Death" },
          { icon: "Pickaxe", label: "Mine" },
          { icon: "Swords", label: "Sword Fight" },
          { icon: "Volleyball", label: "Volley" },
          { icon: "VenetianMask", label: "Bandit" },
        ]}
        onChange={(index) => {
          setSelectedIndex(index);
        }}
        selectedIndex={selectedIndex}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    margin: 12,
    gap: 12,
  },
});
