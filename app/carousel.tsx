import Wallpapers from "@/components/wallpaper-carousel/Wallpapers";
import { StyleSheet, View } from "react-native";

export default function WallpaperCarousel() {
  return (
    <View style={styles.screen}>
      <Wallpapers />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff"
  },
});
