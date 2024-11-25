import Animated, {
    SharedValue,
    useAnimatedStyle,
} from "react-native-reanimated";

type PaginationIndicatorProps = {
  animation: SharedValue<number>;
};

export default function PaginationIndicator({
  animation,
}: PaginationIndicatorProps) {
  const _dotContainer = 24;
  const animatedStyles = useAnimatedStyle(() => {
    return {
      width: _dotContainer + _dotContainer * animation.value,
    };
  });
  return (
    <Animated.View
      style={[
        {
          backgroundColor: "pink",
          position: "absolute",
          left: 0,
          top: 0,
          height: _dotContainer,
          width: _dotContainer,
          borderRadius: _dotContainer,
        },
        animatedStyles,
      ]}
    />
  );
}
