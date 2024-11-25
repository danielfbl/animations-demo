import { Pressable, PressableProps } from "react-native";
import Animated, {
    AnimatedProps,
    FadeInLeft,
    FadeOutLeft,
    LinearTransition,
} from "react-native-reanimated";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export default function OnboardingButton({
  children,
  style,
  ...rest
}: AnimatedProps<PressableProps>) {
  const _buttonHeight = 42;
  return (
    <AnimatedPressable
      style={[
        {
          height: _buttonHeight,
          borderRadius: _buttonHeight / 2,
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 16,
        },
        style,
      ]}
      entering={FadeInLeft.springify().damping(80).stiffness(200)}
      exiting={FadeOutLeft.springify().damping(80).stiffness(200)}
      layout={LinearTransition.springify().damping(80).stiffness(200)}
      {...rest}
    >
      {children}
    </AnimatedPressable>
  );
}
