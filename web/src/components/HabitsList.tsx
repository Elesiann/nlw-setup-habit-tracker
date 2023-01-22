import * as Checkbox from "@radix-ui/react-checkbox";
import dayjs from "dayjs";
import { Check } from "phosphor-react";
import { useEffect, useState } from "react";
import { api } from "../lib/axios";

interface IHabitsListProps {
  date: Date;
  onChange: (completed: number) => void;
}

interface IHabitsInfo {
  possibleHabits: {
    id: string;
    title: string;
    created_at: string;
  }[];
  completedHabits: string[];
}

export function HabitsList({ date, onChange }: IHabitsListProps) {
  const [HabitsInfo, setHabitsInfo] = useState<IHabitsInfo>();

  useEffect(() => {
    api
      .get("day", {
        params: {
          date: date.toISOString(),
        },
      })
      .then((res) => setHabitsInfo(res.data));
  }, []);

  const isDateInPast = dayjs(date).endOf("day").isBefore(new Date());

  async function handleToggleHabit(habitId: string) {
    const isHabitAlreadyCompleted =
      HabitsInfo!.completedHabits.includes(habitId);

    await api.patch(`/habits/${habitId}/toggle`);

    let completedHabits: string[] = [];

    isHabitAlreadyCompleted
      ? (completedHabits = HabitsInfo!.completedHabits.filter(
          (id) => id !== habitId
        ))
      : (completedHabits = [...HabitsInfo!.completedHabits, habitId]);

    setHabitsInfo({
      possibleHabits: HabitsInfo!.possibleHabits,
      completedHabits,
    });

    onChange(completedHabits.length);
  }

  return (
    <>
      {HabitsInfo?.possibleHabits.map((habit, index) => (
        <Checkbox.Root
          key={habit.id}
          disabled={isDateInPast}
          onCheckedChange={() => handleToggleHabit(habit.id)}
          checked={HabitsInfo.completedHabits.includes(habit.id)}
          className="flex items-center gap-3 group focus:outline-none mt-4 disabled:cursor-not-allowed"
        >
          <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-charcoal border-2 border-blackCoral group-data-[state=checked]:bg-blue-500 group-data-[state=checked]:border-blue-300 transition-all">
            <Checkbox.Indicator>
              <Check size={20} className="text-white" />
            </Checkbox.Indicator>
          </div>

          <span className="font-semibold text-xl text-white leading-tight group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-400">
            {habit.title}
          </span>
        </Checkbox.Root>
      ))}
    </>
  );
}
