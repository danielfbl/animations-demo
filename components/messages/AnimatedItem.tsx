import React from "react";
import { View } from "react-native";

type AnimatedItemProps = {
  index: number;
  children: React.ReactNode;
};

export default function AnimatedItem({ index, children }: AnimatedItemProps) {
  return <View>{children}</View>;
}
