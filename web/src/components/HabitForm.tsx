import { Check } from "phosphor-react";

export function HabitForm() {
  return (
    <form className="w-full flex flex-col mt-6">
      <label htmlFor="title" className="font-semibold leading-tight">
        What's your commitment?
      </label>

      <input
        className="p-4 rounded-lg mt-3 bg-blackCoral text-white placeholder:text-zinc-400"
        type="text"
        id="title"
        placeholder="ex.: Exercise, 8 hours of sleep..."
        autoFocus
      />

      <label htmlFor="" className="font-semibold leading-tight mt-4">
        What's the frequency?
      </label>

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
