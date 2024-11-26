import { Href, Link } from "expo-router";
import { TouchableOpacity } from "react-native";
import { ThemedText, ThemedTextProps } from "./ThemedText";

type HomeItemProps = {
  title: string;
  href: Href<string | object>;
} & ThemedTextProps;

export default function HomeItem({ title, href, ...rest }: HomeItemProps) {
  return (
    <Link asChild href={href}>
      <TouchableOpacity>
        <ThemedText {...rest}>{title}</ThemedText>
      </TouchableOpacity>
    </Link>
  );
}
