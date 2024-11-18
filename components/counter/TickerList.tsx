import { MotiView } from "moti";
import { View } from "react-native";
import Tick from "./Tick";

type TickerListProps = {
  number: number;
  fontSize: number;
  index: number;
};

const numbersArray = [...Array(10).keys()];

export default function TickerList({
  number,
  fontSize,
  index,
}: TickerListProps) {
  const _staggerDuration = 80;
  return (
    <View
      style={{
        height: fontSize,
        overflow: "hidden",
      }}
    >
      <MotiView
        animate={{
          translateY: -fontSize * 1.1 * number,
        }}
        transition={{
          delay: index * _staggerDuration,
          damping: 80,
          stiffness: 200,
        }}
      >
        {numbersArray.map((number) => {
          return (
            <Tick key={number * Math.random()} fontSize={fontSize}>
              {number}
            </Tick>
          );
        })}
      </MotiView>
    </View>
  );
}
