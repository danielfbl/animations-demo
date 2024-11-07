import { User } from "@/app/(tabs)";
import { Image, View } from "react-native";
import Animated, {
    FadeInRight,
    interpolate,
    interpolateColor,
    runOnJS,
    SharedValue,
    useAnimatedStyle,
    useDerivedValue,
    withDelay,
    withSpring,
} from "react-native-reanimated";

type PlaceProps = {
  user: User;
  index: number;
  anim: SharedValue<number>;
  contestants: number;
  onFinish?: () => void;
};

export default function Place({
  user,
  index,
  anim,
  contestants,
  onFinish,
}: PlaceProps) {
  const _avatarSize = 28;
  const _staggerDuration = 100;
  const _spacing = 4;

  const _anim = useDerivedValue(() => {
    return withDelay(
      _staggerDuration * index,
      withSpring(anim.value, { damping: 80, stiffness: 200 })
    );
  });

  const animatedStyles = useAnimatedStyle(() => {
    return {
      //   height: user.score * 3 * _anim.value,
      height: interpolate(
        _anim.value,
        [0, 1],
        [_avatarSize, Math.max(user.score * 3, _avatarSize + _spacing)]
      ),
      backgroundColor:
        index === contestants - 1
          ? interpolateColor(
              _anim.value,
              [0, 1],
              ["rgba(0,0,0,0.1)", "turquoise"]
            )
          : "rgba(0,0,0,0.1)",
    };
  });

  const animTextStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(_anim.value, [0, 0.5, 1], [0, 0, 1]),
    };
  });

  return (
    <Animated.View
      entering={FadeInRight.delay(_staggerDuration * index)
        .springify()
        .damping(80)
        .stiffness(200)
        .withCallback((finished) => {
          if (finished && onFinish) {
            runOnJS(onFinish)(); // so the callback happens in the javascript thread and the app doesn't crash
          }
        })}
      style={{ alignItems: "center" }}
    >
      <Animated.Text
        style={[{ fontSize: 12, fontWeight: "700" }, animTextStyle]}
      >
        {user.score}
      </Animated.Text>
      <Animated.View
        style={[
          {
            backgroundColor: "rgba(0,0,0,0.1)",
            // width: _avatarSize,
            height: _avatarSize,
            borderRadius: _avatarSize,
          },
          animatedStyles,
        ]}
      >
        <View style={{ width: _avatarSize, aspectRatio: 1 }}>
          <Image
            source={{ uri: `https://i.pravatar.cc/50?u=user_${user.name}` }}
            style={{ flex: 1, borderRadius: _avatarSize, aspectRatio: 1 }}
          />
        </View>
      </Animated.View>
    </Animated.View>
  );
}
