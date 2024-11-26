import { HomeType } from "@/mocks/homes";
import { View } from "lucide-react-native";
import { Image } from "moti";

type AvailableItem = {
  home: HomeType;
  index: number;
};

export const _itemSize = 60;

export const getRandomRotation = () =>
  (Math.random() > 0.5 ? -1 : 1) * Math.random() * 15;

export default function AvailableHome({ home, index }: AvailableItem) {
  return (
    <View
      style={{
        width: _itemSize,
        borderRadius: 8,
        padding: 4,
        backgroundColor: "white",
        aspectRatio: 1,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.4,
        shadowRadius: 7,
        elevation: 5,
        marginLeft: index !== 0 ? -30 : 0,
        transform: [{ rotate: `${getRandomRotation()}deg` }],
      }}
    >
      <Image
        source={{
          uri: "https://picsum.photos/seed/cpEvkM8boM/80/80?grayscale",
        }}
        style={{ flex: 1, borderRadius: 8 }}
      />
    </View>
  );
}
