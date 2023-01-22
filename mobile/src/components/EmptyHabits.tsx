import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native";

export function EmptyHabits() {
  const { navigate } = useNavigation();

  return (
    <Text className="text-zinc-400 text-base">
      There are no habits in this list.{" "}
      <Text
        className="text-blue-400 text-base underline active:text-blue-500"
        onPress={() => navigate("new")}
      >
        Start registering.
      </Text>
    </Text>
  );
}
