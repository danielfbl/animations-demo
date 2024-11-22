import { Link } from "expo-router";
import {
    TouchableOpacity,
    TouchableOpacityProps
} from "react-native";
import { ThemedText } from "./ThemedText";

type GoBackButtonProps = TouchableOpacityProps & {};

export default function GoBackButton({ style }: GoBackButtonProps) {
  return (
    <Link asChild href={{ pathname: "/" }}>
      <TouchableOpacity
        style={style}
        accessibilityRole="button"
        accessibilityLabel="Go back to the previous page"
      >
        <ThemedText>Go back</ThemedText>
      </TouchableOpacity>
    </Link>
  );
}
