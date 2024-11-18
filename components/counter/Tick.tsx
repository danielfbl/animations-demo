import { Text, TextProps } from "react-native";

export default function Tick({
  children,
  fontSize,
  style,
  ...rest
}: TextProps & { fontSize: number }) {
  return (
    <Text
      {...rest}
      style={[
        style,
        {
          fontWeight: "700",
          fontSize: fontSize,
          lineHeight: fontSize * 1.1,
          fontVariant: ["tabular-nums"], // each individual number is going to take the same width as the space, avoiding layout shifts
        },
      ]}
    >
      {children}
    </Text>
  );
}
