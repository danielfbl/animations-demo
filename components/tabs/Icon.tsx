import { icons } from "lucide-react-native";

import { IconNames } from "./Tabs";

type IconProps = {
  name: IconNames;
};

export default function Icon({ name }: IconProps) {
  const IconComponent = icons[name];
  return <IconComponent size={16} />;
}
