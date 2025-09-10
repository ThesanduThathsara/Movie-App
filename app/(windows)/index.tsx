import {Animated, Image, Text, View} from "react-native";
import {images} from "@/assets/constants/images";
import ScrollView = Animated.ScrollView;
import {icons} from "@/assets/constants/icons";

export default function Index() {
  return (
    <View className="flex-1 bg-black">
        <Image source={images.bg} className="absolute w-full h-full z-0"/>  {/* background image*/}

        <ScrollView className="flex-1 px-5">
            <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto"/>  {/*home page logo*/}
        </ScrollView>
    </View>
  );
}
