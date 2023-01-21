import React, { useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import clsx from "clsx";
import { ProgressBar } from "./ProgressBar";
import dayjs from "dayjs";
import * as Checkbox from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";
import { HabitsList } from "./HabitsList";

interface HabitProps {
  date: Date;
  defaultCompleted?: number;
  amount?: number;
}

export function Habit({ defaultCompleted = 0, amount = 0, date }: HabitProps) {
  const [completedHabit, setCompletedHabit] = useState(defaultCompleted);
  const completedPercentage =
    amount > 0 ? Math.round((completedHabit / amount) * 100) : 0;

  const dayAndMonth = dayjs(date).format("DD/MM");
  const dayOfWeek = dayjs(date).format("dddd");

  function handleCompletedHabit(completed: number) {
    setCompletedHabit(completed);
  }

  return (
    <Popover.Root>
      <Popover.Trigger
        className={clsx(
          "w-10 h-10 bg-charcoal border border-blackCoral rounded-lg",
          {
            "bg-charcoal border-blackCoral": completedPercentage === 0,
            "bg-blue-900 border-blue-700":
              completedPercentage > 0 && completedPercentage < 20,
            "bg-blue-800 border-blue-700":
              completedPercentage >= 20 && completedPercentage < 40,
            "bg-blue-700 border-blue-700":
              completedPercentage >= 40 && completedPercentage < 60,
            "bg-blue-600 border-blue-500":
              completedPercentage >= 60 && completedPercentage < 80,
            "bg-blue-500 border-blue-400": completedPercentage >= 80,
          }
        )}
      />
      <Popover.Portal>
        <Popover.Content
          style={{ border: "1px solid #313B49" }}
          className="min-w-[320px] p-6 rounded-xl bg-gunmetal flex flex-col z-10"
        >
          <span className="font-semibold text-zinc-400">{dayOfWeek}</span>
          <span className="mt-1 font-bold leading-tight text-3xl">
            {dayAndMonth}
          </span>

          <ProgressBar progress={completedPercentage} />

          <HabitsList onChange={handleCompletedHabit} date={date} />

          <Popover.Arrow width={20} height={10} className="fill-gunmetal" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
