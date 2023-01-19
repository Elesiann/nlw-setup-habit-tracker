import { daysFromYearBeggining } from "../utils/utils";
import { Habit } from "./Habit";

export function HabitsTable() {
  const weekDays = ["S", "M", "T", "W", "T", "F", "S"];

  const daysUntilNow = daysFromYearBeggining();
  const minimumDatesSize = 18 * 7;
  const amountRemainingDays = minimumDatesSize - daysUntilNow.length;

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
      <div className="grid grid-rows-7 grid-flow-col gap-3">
        {daysUntilNow.map((day, index) => (
          <Habit key={`${day}-${index}`} />
        ))}
        {amountRemainingDays > 0 &&
          Array.from({ length: amountRemainingDays }).map((_, index) => (
            <div
              key={index}
              className="w-10 h-10 bg-charcoal border border-blackCoral rounded-lg opacity-40 cursor-not-allowed"
            />
          ))}
      </div>
    </div>
  );
}
