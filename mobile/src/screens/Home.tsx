import { View, Text, ScrollView } from "react-native";
import { Habit, daySize } from "../components/Habit";
import { Header } from "../components/Header";
import { daysFromYearBeggining } from "../utils/utils";

const weekDays = ["S", "M", "T", "W", "T", "F", "S"];
const daysUntilNow = daysFromYearBeggining();
const minimumDatesSize = 18 * 5;
const amountRemainingDays = minimumDatesSize - daysUntilNow.length;

export function Home() {
  return (
    <View className="flex-1 bg-[#181D26] px-8 pt-16">
      <Header />

      <View className="flex-row mt-6 mb-2">
        {weekDays.map((day, index) => (
          <Text
            className="text-zinc-300 text-xl font-bold text-center m-1"
            key={`${day}-${index}`}
            style={{ width: daySize }}
          >
            {day}
          </Text>
        ))}
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 48 }}
      >
        <View className="flex-row flex-wrap">
          {daysUntilNow.map((day, index) => (
            <Habit key={day.toISOString()} />
          ))}
          {amountRemainingDays > 0 &&
            Array.from({ length: amountRemainingDays }).map((_, index) => (
              <View
                key={index}
                style={{ width: daySize, height: daySize }}
                className="bg-[#29313D] border border-[#313B49] rounded-lg m-1 cursor-not-allowed opacity-40"
              />
            ))}
        </View>
      </ScrollView>
    </View>
  );
}
