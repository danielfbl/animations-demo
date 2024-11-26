import { HomeType } from "@/mocks/homes";
import { View } from "react-native";
import Animated, {
    FadeIn,
    FadeOut,
    ZoomIn,
    ZoomOut,
} from "react-native-reanimated";
import AvailableHome, { _itemSize } from "./AvailableHome";
import ImagesSkeleton from "./ImagesSkeleton";
import Skeleton from "./Skeleton";

type AvailabilityAnimProps = {
  data: HomeType[];
  isLoading: boolean;
};

export default function AvailabilityAnimation({
  data,
  isLoading,
}: AvailabilityAnimProps) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        minHeight: _itemSize,
      }}
    >
      <View
        style={{ flex: 0.6, justifyContent: "center", minHeight: _itemSize }}
      >
        {isLoading ? (
          <Skeleton
            style={{
              width: "80%",
              height: _itemSize * 0.25,
              borderRadius: 8,
              backgroundColor: "#ddd",
            }}
          />
        ) : (
          <Animated.Text
            entering={FadeIn.springify().damping(80).stiffness(200)}
            exiting={FadeOut.springify().damping(80).stiffness(200)}
          >
            {data.length} available
          </Animated.Text>
        )}
      </View>
      <View
        style={{
          flexDirection: "row",
          flex: 1,
          justifyContent: "flex-end",
          minHeight: _itemSize,
          alignItems: "center"
        }}
      >
        {!isLoading
          ? data.map((home, index) => (
              <Animated.View
                entering={ZoomIn.springify()
                  .damping(80)
                  .stiffness(200)
                  .delay(index * 75)}
                exiting={ZoomOut.springify()
                  .damping(80)
                  .stiffness(200)
                  .delay(index * 75)}
                key={home.key}
                style={{ zIndex: index }}
              >
                <AvailableHome home={home} index={index} />
              </Animated.View>
            ))
          : (<ImagesSkeleton />)}
      </View>
    </View>
  );
}
