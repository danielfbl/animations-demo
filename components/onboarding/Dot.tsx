import { View } from "react-native";
import Animated, {
    interpolateColor,
    SharedValue,
    useAnimatedStyle,
} from "react-native-reanimated";

type DotProps = {
  index: number;
  animationValue: SharedValue<number>;
};

export default function Dot({ index, animationValue }: DotProps) {
  const _dotContainer = 24;
  const _dotSize = _dotContainer / 3;
  const _activeDot = "#fff";
  const _inactiveDot = "#aaa";

  const animatedStyles = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        animationValue.value,
        [index - 1, index, index + 1],
        [_inactiveDot, _activeDot, _activeDot]
      ),
    };
  });

  return (
    <View
      style={{
        height: _dotContainer,
        width: _dotContainer,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Animated.View
        style={[
          animatedStyles,
          {
            height: _dotSize,
            width: _dotSize,
            borderRadius: _dotSize,
          },
        ]}
      />
    </View>
  );
}
