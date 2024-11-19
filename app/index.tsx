import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";
import { TouchableOpacity } from "react-native";
import Animated, { SlideInDown, SlideInLeft, SlideInRight, SlideInUp } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Home() {
  const { top } = useSafeAreaInsets();
  return (
    <ThemedView
      style={{
        flex: 1,
        alignItems: "center",
        padding: 16,
        paddingTop: top * 2,
      }}
    >
      <ThemedText type="title">Animations</ThemedText>
      <Animated.View
        style={{ paddingTop: 24 }}
        entering={SlideInUp.delay(500).springify().damping(80).stiffness(200)}
      >
        <Link asChild href={{ pathname: "/leaderboard" }}>
          <TouchableOpacity>
            <ThemedText>Leaderboard Animation</ThemedText>
          </TouchableOpacity>
        </Link>
      </Animated.View>
      <Animated.View
        entering={SlideInRight.delay(800).springify().damping(80).stiffness(200)}
      >
        <Link asChild href={{ pathname: "/incomingMessages" }}>
          <TouchableOpacity>
            <ThemedText>Incoming Messages Animation</ThemedText>
          </TouchableOpacity>
        </Link>
      </Animated.View>
      <Animated.View
        entering={SlideInLeft.delay(1100).springify().damping(80).stiffness(200)}
      >
        <Link asChild href={{ pathname: "/counter" }}>
          <TouchableOpacity>
            <ThemedText>Counter Animation with Moti</ThemedText>
          </TouchableOpacity>
        </Link>
      </Animated.View>
      <Animated.View
        entering={SlideInDown.delay(1400).springify().damping(80).stiffness(200)}
      >
        <Link asChild href={{pathname: "/animatedTabs"}}>
          <TouchableOpacity>
            <ThemedText>Animated Tabs</ThemedText>
          </TouchableOpacity>
        </Link>
      </Animated.View>
    </ThemedView>
  );
}
