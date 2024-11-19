import { icons } from "lucide-react-native";

import { MotiProps } from "moti";
import { motifySvg } from "moti/svg";
import { IconNames } from "./Tabs";

type IconProps = {
  name: IconNames;
} & MotiProps;

export default function Icon({ name, ...otherProps }: IconProps) {
  const IconComponent = motifySvg(icons[name])(); // giving moti props to the component
  return <IconComponent size={16} {...otherProps} />;
}
