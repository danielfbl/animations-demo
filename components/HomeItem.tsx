import { Href, Link } from "expo-router";
import { TouchableOpacity } from "react-native";
import { ThemedText } from "./ThemedText";

type HomeItemProps = {
  title: string;
  href: Href<string | object>;
};

export default function HomeItem({ title, href }: HomeItemProps) {
  return (
    <Link asChild href={href}>
      <TouchableOpacity>
        <ThemedText>{title}</ThemedText>
      </TouchableOpacity>
    </Link>
  );
}
