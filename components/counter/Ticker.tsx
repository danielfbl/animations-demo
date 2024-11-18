import { useState } from "react";
import { View } from "react-native";
import Tick from "./Tick";
import TickerList from "./TickerList";

type TickerProps = {
  value: number;
  fontSize: number;
};

export default function Ticker({ value, fontSize }: TickerProps) {
  const intNumber = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
  const splittedValue = intNumber.toString().split("");
  const [newFontSize, setNewFontSize] = useState(fontSize);
  return (
    <View>
      {/* using this component to calculate the layout */}
      <Tick
        style={{ position: 'absolute', left: 100000, bottom: 100000 }}
        fontSize={fontSize}
        numberOfLines={1}
        adjustsFontSizeToFit
        onTextLayout={(e) => {
          setNewFontSize(e.nativeEvent.lines[0].ascender);
        }}
      >
        {intNumber}
      </Tick>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {splittedValue.map((value, index) => {
          if (isNaN(parseInt(value))) {
            return (
              <Tick fontSize={newFontSize} key={index} style={{ opacity: 0.3 }}>
                {value}
              </Tick>
            );
          }
          return (
            <TickerList
              fontSize={newFontSize}
              number={parseInt(value)}
              key={index}
              index={index}
            />
          );
        })}
      </View>
    </View>
  );
}
