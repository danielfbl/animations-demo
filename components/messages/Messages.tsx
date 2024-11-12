import { FlatListProps, ListRenderItem } from "react-native";
import Animated, { LinearTransition } from "react-native-reanimated";
import AnimatedItem from "./AnimatedItem";

type MessagesProps<T> = FlatListProps<T> & {
  renderItem: ListRenderItem<T>;
};
export default function Messages<T>({
  renderItem,
  ...rest
}: MessagesProps<T>) {
  return (
    <Animated.FlatList
      {...rest}
      inverted
      renderItem={(itemProps) => {
        return (
          <AnimatedItem index={itemProps.index}>
            {renderItem(itemProps)}
          </AnimatedItem>
        );
      }}
      itemLayoutAnimation={LinearTransition.springify().damping(80).stiffness(200)}
    />
  );
}
