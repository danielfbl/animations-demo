import HomeItem from "@/components/HomeItem";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
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
      <ThemedView style={{ paddingTop: 24, alignItems: "center", gap: 4 }}>
        <HomeItem
          title="Leaderboard"
          href={{ pathname: "/leaderboard" }}
        />
        <HomeItem
          title="Incoming Messages"
          href={{ pathname: "/incomingMessages" }}
        />
        <HomeItem
          title="Counter"
          href={{ pathname: "/counter" }}
        />
        <HomeItem title="Animated Tabs" href={{ pathname: "/animatedTabs" }} />
        <HomeItem title="Pagination Dots" href={{ pathname: "/onboarding" }} />
        <HomeItem title="Availability" href={{ pathname: "/availability"}} />
        <HomeItem style={{color: 'red'}} title="Wallpaper Carousel" href={{ pathname: "/carousel" }} />
      </ThemedView>
    </ThemedView>
  );
}
