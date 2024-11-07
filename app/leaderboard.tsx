import { StyleSheet, Text, View } from "react-native";

export default function LeaderBoard() {
  return (
    <View style={styles.screen}>
      <Text>Leaderboard animation</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
