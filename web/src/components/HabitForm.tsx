import * as Checkbox from "@radix-ui/react-checkbox";
import dayjs from "dayjs";
import { Check } from "phosphor-react";
import { FormEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../lib/axios";

export function HabitForm() {
  const [title, setTitle] = useState<string>("");
  const [weekDays, setWeekDays] = useState<number[]>([]);

  const availableWeekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  async function createNewHabit(event: FormEvent) {
    event.preventDefault();

    if (!title || weekDays.length === 0) {
      toast.warning("Fill habit name and frequency");
      return;
    }
    await api
      .post("habits", {
        title,
        weekDays,
      })
      .then(() => {
        toast.success("Success! New habit created.");
        setTitle("");
        setWeekDays([]);
      })
      .catch(() => toast.error("Oops... Something went wrong"));
  }

  function handleToggleCheckbox(weekDay: number) {
    weekDays?.includes(weekDay)
      ? setWeekDays(weekDays.filter((day: number) => day !== weekDay))
      : setWeekDays([...weekDays, weekDay]);
  }

  return (
    <form
      onSubmit={(e) => createNewHabit(e)}
      className="w-full flex flex-col mt-6"
    >
      <label htmlFor="title" className="font-semibold leading-tight">
        What's your commitment?
      </label>

      <input
        className="p-4 rounded-lg mt-3 bg-blackCoral text-white placeholder:text-zinc-400"
        type="text"
        id="title"
        placeholder="ex.: Exercise, 8 hours of sleep..."
        autoFocus
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label htmlFor="" className="font-semibold leading-tight mt-4">
        What's the frequency?
      </label>

      {availableWeekDays.map((day, index) => (
        <Checkbox.Root
          key={day}
          className="flex items-center gap-3 group focus:outline-none mt-2"
          checked={weekDays.includes(index)}
          onCheckedChange={() => handleToggleCheckbox(index)}
        >
          <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-charcoal border-2 border-blackCoral group-data-[state=checked]:bg-blue-500 group-data-[state=checked]:border-blue-300 transition-all">
            <Checkbox.Indicator>
              <Check size={20} className="text-white" />
            </Checkbox.Indicator>
          </div>

          <span className="text-white leading-tight">{day}</span>
        </Checkbox.Root>
      ))}

      <button
        type="submit"
        className="mt-6 rounded-lg p-4 flex items-center justify-center gap-3 font-semibold transition-all bg-emerald hover:bg-amazon"
      >
        Confirm
        <Check size={20} weight="bold"></Check>
      </button>
    </form>
  );
}
