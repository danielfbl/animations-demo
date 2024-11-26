import { MotiView } from "moti";
import { ViewProps } from "react-native";
import { FadeIn, FadeOut } from "react-native-reanimated";

export default function Skeleton({ style, ...props }: ViewProps) {
  return (
    <MotiView
      from={{ backgroundColor: "#ddd" }}
      animate={{ backgroundColor: "#eee" }}
      transition={{ duration: 500, loop: true, repeatReverse: true }}
      style={style}
      entering={FadeIn.springify().damping(80).stiffness(200).delay(300)}
      exiting={FadeOut.springify().damping(80).stiffness(200)}
    />
  );
}
