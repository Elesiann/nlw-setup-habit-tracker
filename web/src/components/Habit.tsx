import React, { useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import clsx from "clsx";
import { ProgressBar } from "./ProgressBar";
import dayjs from "dayjs";
import * as Checkbox from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";

interface HabitProps {
  date: Date;
  completed?: number;
  amount?: number;
}

export function Habit({ completed = 0, amount = 0, date }: HabitProps) {
  const [completedHabit, setCompletedHabit] = useState(completed);
  const completedPercentage =
    amount > 0 ? Math.round((completed / amount) * 100) : 0;

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
      <Popover.Content
        style={{ border: "1px solid #313B49" }}
        className="min-w-[320px] p-6 rounded-xl bg-gunmetal flex flex-col z-10"
      >
        <span className="font-semibold text-zinc-400">{dayOfWeek}</span>
        <span className="mt-1 font-bold leading-tight text-3xl">
          {dayAndMonth}
        </span>

        <ProgressBar progress={completedPercentage} />

        <Checkbox.Root className="flex items-center gap-3 group focus:outline-none mt-4">
          <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-charcoal border-2 border-blackCoral group-data-[state=checked]:bg-blue-500 group-data-[state=checked]:border-blue-300 transition-all">
            <Checkbox.Indicator>
              <Check size={20} className="text-white" />
            </Checkbox.Indicator>
          </div>

          <span className="font-semibold text-xl text-white leading-tight group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-400">
            {"test"}
          </span>
        </Checkbox.Root>

        <Popover.Arrow width={20} height={10} className="fill-gunmetal" />
      </Popover.Content>
    </Popover.Root>
  );
}
