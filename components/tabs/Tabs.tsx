import { icons } from "lucide-react-native";
import { Pressable, View } from "react-native";
import Animated, { FadeInRight } from "react-native-reanimated";
import Icon from "./Icon";

export type IconNames = keyof typeof icons;

export type TabItem = {
  icon: IconNames;
  label: string;
};

type TabsProps = {
  data: TabItem[];
  selectedIndex: number;
  onChange: (index: number) => void;
  activeColor?: string;
  inactiveColor?: string;
  activeBGColor?: string;
  inactiveBGColor?: string;
};

const _spacing = 4;

export default function Tabs({
  data,
  selectedIndex,
  onChange,
  activeColor = "#fff",
  inactiveColor = "#999",
  activeBGColor = "#111",
  inactiveBGColor = "#ddd",
}: TabsProps) {
  return (
    <View style={{ flexDirection: "row", gap: _spacing }}>
      {data.map((item, index) => {
        const isSelected = selectedIndex === index;
        return (
          <View key={`${item.label}-${index}`}>
            <Pressable
              onPress={() => onChange(index)}
              style={{
                padding: _spacing * 3,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: _spacing,
                backgroundColor: isSelected ? activeBGColor : inactiveBGColor,
                borderRadius: 8,
              }}
            >
              <Icon name={item.icon} />
              {isSelected ? (
                <Animated.Text
                entering={FadeInRight.springify().damping(80).stiffness(200)}
                  style={{
                    color: isSelected ? activeColor : inactiveColor,
                  }}
                >
                  {item.label}
                </Animated.Text>
              ) : null}
            </Pressable>
          </View>
        );
      })}
    </View>
  );
}
