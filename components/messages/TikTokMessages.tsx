import { FlatList, FlatListProps, ListRenderItem } from "react-native";
import AnimatedItem from "./AnimatedItem";

type TikTokMessagesProps<T> = FlatListProps<T> & {
  renderItem: ListRenderItem<T>;
};
export default function TikTokMessages<T>({
  renderItem,
  ...rest
}: TikTokMessagesProps<T>) {
  return (
    <FlatList
      {...rest}
      renderItem={(itemProps) => {
        return (
          <AnimatedItem index={itemProps.index}>
            {renderItem(itemProps)}
          </AnimatedItem>
        );
      }}
    />
  );
}
