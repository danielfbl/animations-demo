import GoBackButton from "@/components/GoBackButton";
import Tabs from "@/components/tabs/Tabs";
import { tabColors } from "@/constants/Colors";
import { MotiView } from "moti";
import { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import {
  FadeInRight,
  FadeOutLeft,
  LayoutAnimationConfig,
} from "react-native-reanimated";

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
      {/* to avoid breaking the layout when mounting the component, we need 
      to use this wrapper component */}
      <LayoutAnimationConfig skipEntering>
        <MotiView
          key={`tabs@-${selectedIndex}`}
          style={{
            flex: 1,
            borderRadius: 8,
            marginHorizontal: 12,
          }}
          animate={{ backgroundColor: tabColors[selectedIndex] }}
          entering={FadeInRight.springify().damping(80).stiffness(200)}
          exiting={FadeOutLeft.springify().damping(80).stiffness(200)}
        />
      </LayoutAnimationConfig>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          // paddingTop: 16,
        }}
      >
        <GoBackButton />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    gap: 12,
  },
});
