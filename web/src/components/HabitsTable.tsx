import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { api } from "../lib/axios";
import { daysFromYearBeggining } from "../utils/utils";
import { Habit } from "./Habit";

interface ISummary {
  id: string;
  date: string;
  amount: number;
  completed: number;
}

export function HabitsTable() {
  const [summary, setSummary] = useState<ISummary[]>([]);
  const weekDays = ["S", "M", "T", "W", "T", "F", "S"];

  const daysUntilNow = daysFromYearBeggining();
  const minimumDatesSize = 18 * 7;
  const amountRemainingDays = minimumDatesSize - daysUntilNow.length;

  useEffect(() => {
    api.get("summary").then((res) => {
      setSummary(res.data);
    });
  }, []);

  return (
    <div className="w-full flex ">
      <div className="grid grid-rows-7 grid-flow-row gap-3">
        {weekDays.map((day, index) => (
          <div
            key={`${day}-${index}`}
            className="text-zinc-300 text-xl h-10 w-10 flex items-center justify-center font-medium"
          >
            {day}
          </div>
        ))}
      </div>

      {summary.length > 0 && (
        <div className="grid grid-rows-7 grid-flow-col gap-3">
          {daysUntilNow.map((date, index) => {
            const summaryDay = summary.find((day) => {
              return dayjs(date).isSame(day.date, "day");
            });

            return (
              <Habit
                date={date}
                amount={summaryDay?.amount}
                defaultCompleted={summaryDay?.completed}
                key={`${date}-${index}`}
              />
            );
          })}
          {amountRemainingDays > 0 &&
            Array.from({ length: amountRemainingDays }).map((_, index) => (
              <div
                key={index}
                className="w-10 h-10 bg-charcoal border border-blackCoral rounded-lg opacity-40 cursor-not-allowed"
              />
            ))}
        </div>
      )}
    </div>
  );
}
