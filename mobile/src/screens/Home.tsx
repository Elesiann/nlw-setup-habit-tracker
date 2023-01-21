import { useNavigation } from "@react-navigation/native";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { Alert, ScrollView, Text, View } from "react-native";
import { daySize, Habit } from "../components/Habit";
import { Header } from "../components/Header";
import { Loading } from "../components/Loading";
import { api } from "../lib/axios";
import { daysFromYearBeggining } from "../utils/utils";

const weekDays = ["S", "M", "T", "W", "T", "F", "S"];
const daysUntilNow = daysFromYearBeggining();
const minimumDatesSize = 18 * 5;
const amountRemainingDays = minimumDatesSize - daysUntilNow.length;

type SummaryProps = Array<{
  id: string;
  date: string;
  amount: number;
  completed: number;
}>;

export function Home() {
  const [loading, setLoading] = useState(true);
  const [summary, setSummary] = useState<SummaryProps | null>(null);
  const { navigate } = useNavigation();

  async function fetchData() {
    try {
      setLoading(true);
      const response = await api.get("/summary");
      setSummary(response.data);
    } catch (error) {
      Alert.alert("Oops", "Couldn't load habits. Please try again later.");
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }

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
        {summary && (
          <View className="flex-row flex-wrap">
            {daysUntilNow.map((date) => {
              const dayHabits = summary.find((day) => {
                return dayjs(date).isSame(day.date, "day");
              });

              console.log(dayHabits);

              return (
                <Habit
                  date={date}
                  amountCompleted={dayHabits?.completed}
                  amountOfHabits={dayHabits?.amount}
                  onPress={() =>
                    navigate("habit", { date: date.toISOString() })
                  }
                  key={date.toISOString()}
                />
              );
            })}
            {amountRemainingDays > 0 &&
              Array.from({ length: amountRemainingDays }).map((_, index) => (
                <View
                  key={index}
                  style={{ width: daySize, height: daySize }}
                  className="bg-[#29313D] border border-[#313B49] rounded-lg m-1 cursor-not-allowed opacity-40"
                />
              ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
}
