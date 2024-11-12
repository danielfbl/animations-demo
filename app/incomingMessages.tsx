import Messages from "@/components/messages/Messages";
import { ThemedText } from "@/components/ThemedText";
import { ChatItem, generateNewMessage } from "@/mocks/chat";
import SegmentedControl from "@react-native-segmented-control/segmented-control";
import { Link } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const chatSpeed = {
  slow: [1000, 800],
  medium: [500, 500],
  fast: [250, 250],
  INSANE: [50, 100],
};

export default function IncomingMessages() {
  const [messages, setMessages] = useState<ChatItem[]>(
   []
  );

  const timeOut = useRef<NodeJS.Timeout | null>(null);
  const [speed, setSpeed] = useState<keyof typeof chatSpeed>("slow");

  const { top, bottom } = useSafeAreaInsets();
  const generateNewData = () => {
    clearTimeout(timeOut.current || undefined);
    const selectedSpeed = chatSpeed[speed];
    const timer = Math.random() * selectedSpeed[0] + selectedSpeed[1]
    timeOut.current = setTimeout(() => {
      setMessages((data) => {
        return [generateNewMessage(), ...data];
      });
      generateNewData()
    }, timer);
  };

  useEffect(() => {
    generateNewData()
  }, [speed])

  return (
    <View style={{ flex: 1, paddingTop: top }}>
      <Messages
        contentContainerStyle={{ padding: 16, paddingBottom: bottom + 16 }}
        data={messages}
        renderItem={({ item }) => {
          return (
            <View
              style={[
                {
                  gap: 4,
                  alignItems: "flex-start",
                  padding: 8,
                  borderRadius: 12,
                },
              ]}
            >
              <View
                style={{
                  flexDirection: "row",
                  gap: 4,
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <Image
                  source={{ uri: item.user.avatar }}
                  style={{ width: 16, aspectRatio: 1, borderRadius: 24 }}
                />
                <Text style={{ fontSize: 12 }}>{item.user.name}</Text>
              </View>
              <View
                style={{
                  backgroundColor: "#ddd",
                  padding: 8,
                  borderRadius: 8,
                }}
              >
                <Text style={{ fontSize: 12 }}>{item.description}</Text>
              </View>
            </View>
          );
        }}
      />
      <View
        style={{
          height: 160,
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: bottom,
        }}
      >
        <SegmentedControl
          values={Object.keys(chatSpeed)}
          style={{ width: 300 }}
          selectedIndex={Object.keys(chatSpeed).indexOf(speed)}
          onChange={(event) => {
            setSpeed(event.nativeEvent.value as keyof typeof chatSpeed);
          }}
        />
        <Link asChild href={{pathname: '/'}}>
        <TouchableOpacity style={{paddingTop: 16}}>
            <ThemedText>Go back</ThemedText>
        </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}
