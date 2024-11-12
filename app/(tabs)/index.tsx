import { ThemedText } from "@/components/ThemedText";
import { Link } from "expo-router";
import { StyleSheet, TouchableOpacity, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.screen}>
      <Link asChild href={{pathname: "/leaderboard"}}>
        <TouchableOpacity>
          <ThemedText>Leaderboard Animation</ThemedText>
        </TouchableOpacity>
      </Link>
      <Link asChild href={{pathname: "/incomingMessages"}}>
        <TouchableOpacity>
          <ThemedText>Incoming Messages Animation</ThemedText>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});
