import Place from "@/components/leaderboard/Place";
import { ThemedText } from "@/components/ThemedText";
import { Link } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";

export interface User {
  name: string;
  score: number;
}

const users: User[] = [
  { name: "John", score: 32 },
  { name: "Lennon", score: 23 },
  { name: "Paul", score: 48 },
  { name: "George", score: 54 },
  { name: "Ringo", score: 5 },
  { name: "Michael", score: 40 },
];

export default function LeaderBoard() {
  const _spacing = 4;
  const _animated = useSharedValue(0);
  const usersByScore = users.sort((a, b) => a.score - b.score);
  return (
    <View style={styles.screen}>
      <Text>Leaderboard Animation</Text>
      <View
        style={{
          flexDirection: "row",
          gap: _spacing,
          justifyContent: "flex-end",
          alignItems: "flex-end",
          height: 200,
        }}
      >
        {usersByScore.map((user, i) => (
          <Place
            contestants={usersByScore.length}
            key={i}
            user={user}
            index={i}
            anim={_animated}
            onFinish={
              i === users.length - 1
                ? () => {
                    _animated.value = 1;
                  }
                : () => null
            }
          />
        ))}
      </View>
      {/* TO DO: make this button part of the animation */}
      <Link asChild href={"/"}>
      <TouchableOpacity style={{paddingTop: 32}}>
        <ThemedText>Go back</ThemedText>
      </TouchableOpacity>
      </Link>
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
