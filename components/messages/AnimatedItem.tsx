import { MAX_MESSAGES } from "@/mocks/chat";
import React from "react";
import Animated, {
    interpolate,
    useAnimatedStyle,
    useDerivedValue,
    withSpring,
} from "react-native-reanimated";

type AnimatedItemProps = {
  index: number;
  children: React.ReactNode;
};

export default function AnimatedItem({ index, children }: AnimatedItemProps) {
  const newIndex = useDerivedValue(() => {
    return withSpring(index, { damping: 80, stiffness: 200 });
  });
  const animStyles = useAnimatedStyle(() => {
    return {
      opacity: interpolate(newIndex.value, [0, 1], [1, 1 - 1 / MAX_MESSAGES]),
    };
  });
  return <Animated.View style={[animStyles]}>{children}</Animated.View>;
}
