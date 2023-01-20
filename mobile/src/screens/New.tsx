import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import colors from "tailwindcss/colors";

import { BackButton } from "../components/BackButton";
import { Checkbox } from "../components/Checkbox";

const availableWeekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export function New() {
  const [weekDays, setWeekDays] = useState<number[]>([]);
  const [title, setTitle] = useState("");

  function handleToggleWeekDay(weekDayIndex: number) {
    if (weekDays.includes(weekDayIndex)) {
      setWeekDays((prevState) =>
        prevState.filter((weekDay) => weekDay !== weekDayIndex)
      );
    } else {
      setWeekDays((prevState) => [...prevState, weekDayIndex]);
    }
  }

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
      >
        <BackButton />

        <Text className="mt-6 text-white font-extrabold text-3xl">
          Create habit
        </Text>

        <Text className="mt-6 text-white font-semibold text-base">
          What's your commitment?
        </Text>

        <TextInput
          className="h-12 pl-4 rounded-lg mt-3 bg-gunmetal text-white border-2 border-transparent focus:border-blue-800"
          placeholder="ex.: Exercise, 8 hours of sleep..."
          placeholderTextColor={colors.zinc[400]}
          onChangeText={setTitle}
          value={title}
        />

        <Text className="font-semibold mt-4 mb-3 text-white text-base">
          What's the frequency?
        </Text>

        {availableWeekDays.map((weekDay, index) => (
          <Checkbox
            key={weekDay}
            title={weekDay}
            checked={weekDays.includes(index)}
            onPress={() => handleToggleWeekDay(index)}
          />
        ))}

        <TouchableOpacity
          className="w-full h-14 flex-row items-center justify-center bg-blue-600 rounded-md mt-6"
          activeOpacity={0.7}
        >
          <Text className="font-semibold text-base text-white mr-2">
            Create
          </Text>

          <Feather name="check" size={20} color={colors.white} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
