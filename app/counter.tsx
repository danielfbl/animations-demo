import { ThemedText } from "@/components/ThemedText";
import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function Counter() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Counter</Text>
      <Link asChild href={{ pathname: "/" }}>
        <TouchableOpacity style={{ paddingTop: 16 }}>
          <ThemedText>Go back</ThemedText>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
