import { tabColors } from "@/constants/Colors";
import { icons } from "lucide-react-native";
import { MotiView } from "moti";
import { Pressable, View } from "react-native";
import Animated, {
    FadeInRight,
    FadeOutRight,
    LayoutAnimationConfig,
    LinearTransition,
} from "react-native-reanimated";
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
    <View
      style={{ flexDirection: "row", gap: _spacing, paddingHorizontal: 12 }}
    >
      {data.map((item, index) => {
        const isSelected = selectedIndex === index;
        return (
          <MotiView
            key={`${item.label}-${index}`}
            layout={LinearTransition.springify().damping(80).stiffness(200)}
            animate={{
              backgroundColor: isSelected
                ? tabColors[selectedIndex]
                : inactiveBGColor,
              borderRadius: 8,
              overflow: "hidden",
            }}
          >
            <Pressable
              onPress={() => onChange(index)}
              style={{
                padding: _spacing * 3,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: _spacing,
              }}
            >
              <Icon
                name={item.icon}
                animate={{
                  color: isSelected ? activeColor : inactiveColor,
                }}
              />
              <LayoutAnimationConfig skipEntering>
                {isSelected ? (
                  <Animated.Text
                    entering={FadeInRight.springify()
                      .damping(80)
                      .stiffness(200)}
                    style={{
                      color: isSelected ? activeColor : inactiveColor,
                    }}
                    exiting={FadeOutRight.springify()
                      .damping(80)
                      .stiffness(200)}
                  >
                    {item.label}
                  </Animated.Text>
                ) : null}
              </LayoutAnimationConfig>
            </Pressable>
          </MotiView>
        );
      })}
    </View>
  );
}
