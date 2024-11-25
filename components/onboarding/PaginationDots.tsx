import { View } from "react-native";
import { useDerivedValue, withSpring } from "react-native-reanimated";
import Dot from "./Dot";
import PaginationIndicator from "./PaginationIndicator";

type PaginationDotsProps = {
  selectedIndex: number;
  total: number;
};

export default function PaginationDots({
  selectedIndex,
  total,
}: PaginationDotsProps) {
  const animation = useDerivedValue(() => {
    return withSpring(selectedIndex, {
      damping: 80,
      stiffness: 200,
    });
  });

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <PaginationIndicator animation={animation} />
        {[...Array(total).keys()].map((i) => (
          <Dot key={`dot-${i}`} index={i} animationValue={animation} />
        ))}
      </View>
    </View>
  );
}
