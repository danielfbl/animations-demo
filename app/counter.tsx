import Ticker from "@/components/counter/Ticker";
import { ThemedText } from "@/components/ThemedText";
import { Link } from "expo-router";
import { useState } from "react";
import { Button, TouchableOpacity, View } from "react-native";

export default function Counter() {
  const [value, setValue] = useState(12345);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Ticker value={value} fontSize={150} />
      <Button
        title="Change numbers"
        onPress={() => setValue(Math.floor(Math.random() * 100000))}
      />
      <Link asChild href={{ pathname: "/" }}>
        <TouchableOpacity style={{ paddingTop: 48 }}>
          <ThemedText>Go back</ThemedText>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
