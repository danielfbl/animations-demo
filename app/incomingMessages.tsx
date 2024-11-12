import { ThemedText } from "@/components/ThemedText";
import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

export default function IncomingMessages() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Messages</Text>
      {/* TO DO: make this button part of the animation */}
      <Link asChild href={"/"}>
        <TouchableOpacity style={{ paddingTop: 32 }}>
          <ThemedText>Go back</ThemedText>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
