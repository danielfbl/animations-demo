import { View } from "react-native";
import { _itemSize, getRandomRotation } from "./AvailableHome";
import Skeleton from "./Skeleton";

export default function ImagesSkeleton() {
  return (
    <View style={{ flexDirection: "row", height: _itemSize }}>
      {[...Array(3).keys()].map((index) => (
        <Skeleton
          style={{
            width: _itemSize,
            aspectRatio: 1,
            borderRadius: 8,
            backgroundColor: "#ddd",
            borderColor: "#fff",
            borderWidth: 2,
            transform: [{ rotate: `${getRandomRotation()}deg` }],
            marginLeft: index !== 0 ? -30 : 0,
          }}
          key={index}
        />
      ))}
    </View>
  );
}
