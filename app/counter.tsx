import Ticker from "@/components/counter/Ticker";
import GoBackButton from "@/components/GoBackButton";
import { useState } from "react";
import { Button, View } from "react-native";

export default function Counter() {
  const [value, setValue] = useState(12345);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Ticker value={value} fontSize={150} />
      <Button
        title="Change numbers"
        onPress={() => setValue(Math.floor(Math.random() * 100000))}
      />
      <GoBackButton style={{ paddingTop: 24 }} />
    </View>
  );
}
