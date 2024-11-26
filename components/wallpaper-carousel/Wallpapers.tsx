import { useQuery } from "@tanstack/react-query";
import { View } from "react-native";

//PIXABAY API
const uri = `https://pixabay.com/api/?key=47301372-f92b2b8428e09278546d08d6c&image_type=photo&pretty=true&orientaion=portrait`;

type SearchPayload = {}

export default function Wallpapers() {
  const {data} = useQuery({
    queryKey: ["wallpapers"],
    queryFn: async () => {
      const res = await fetch(uri).then((res) => res.json());
      console.log(res.keys());
      return res;
    },
  });
  return <View />;
}
