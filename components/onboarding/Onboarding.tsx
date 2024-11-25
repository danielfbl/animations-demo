import { Text, View } from "react-native";
import Animated, {
    FadeInDown,
    FadeOutUp,
    LinearTransition,
} from "react-native-reanimated";
import OnboardingButton from "./OnboardingButton";
import PaginationDots from "./PaginationDots";

type OnboardingProps = {
  total: number;
  selectedIndex: number;
  onIndexChange: (index: number) => void;
};

export default function Onboarding({
  total,
  selectedIndex,
  onIndexChange,
}: OnboardingProps) {
  const _spacing = 8;
  const _linearTransition = LinearTransition.springify()
    .damping(80)
    .stiffness(200);

  return (
    <View style={{ padding: _spacing, gap: _spacing * 1.5 }}>
      <PaginationDots total={total} selectedIndex={selectedIndex} />
      <View style={{ flexDirection: "row", gap: _spacing }}>
        {selectedIndex > 0 ? (
          <OnboardingButton
            style={{ backgroundColor: "#ddd" }}
            onPress={() => {
              if (selectedIndex <= 0) {
                return;
              }
              onIndexChange(selectedIndex - 1);
            }}
          >
            <Text>Back</Text>
          </OnboardingButton>
        ) : null}

        <OnboardingButton
          style={{ backgroundColor: "#036bfb", flex: 1 }}
          onPress={() => {
            if (selectedIndex === total - 1) {
              return;
            }
            onIndexChange(selectedIndex + 1);
          }}
        >
          {selectedIndex === total - 1 ? (
            <Animated.Text
              key={"finish-button"}
              entering={FadeInDown.springify().damping(80).stiffness(200)}
              exiting={FadeOutUp.springify().damping(80).stiffness(200)}
              style={{ color: "#fff" }}
            >
              Finish
            </Animated.Text>
          ) : (
            <Animated.Text
              key={"continue-button"}
              entering={FadeInDown.springify().damping(80).stiffness(200)}
              exiting={FadeOutUp.springify().damping(80).stiffness(200)}
              layout={_linearTransition}
              style={{ color: "#fff" }}
            >
              Continue
            </Animated.Text>
          )}
        </OnboardingButton>
      </View>
    </View>
  );
}
