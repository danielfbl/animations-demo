import { StyleSheet, Text, View } from "react-native";

export default function WallpaperCarousel() {
  return (
    <View style={styles.screen}>
      <Text>Carousel</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
  },
});
