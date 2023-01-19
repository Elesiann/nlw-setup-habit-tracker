import { Text, View, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";
import Logo from "../assets/logo.svg";

export function Header() {
  return (
    <View className="w-full flex-row items-center justify-between">
      {/* <Logo /> */}
      <Text className="text-3xl w-fit font-extrabold bg-gradient-to-l text-blue-700">
        Momentum
      </Text>
      <TouchableOpacity
        activeOpacity={0.5}
        className="flex-row items-center h-11 px-4 border-blue-500 border rounded-lg pl-3"
      >
        <Feather name="plus" color={colors.blue[400]} size={20} />
        <Text className="text-white ml-3 font-semibold text-base">New</Text>
      </TouchableOpacity>
    </View>
  );
}
