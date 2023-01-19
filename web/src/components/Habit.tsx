import React from "react";

interface HabitProps {
  completed?: number;
}

export function Habit(props: HabitProps) {
  return (
    <div className="w-10 h-10 bg-charcoal border border-blackCoral rounded-lg"></div>
  );
}
