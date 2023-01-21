import clsx from "clsx";
import dayjs from "dayjs";
import {
  TouchableOpacity,
  Dimensions,
  TouchableOpacityProps,
} from "react-native";
import { generateProgressPercentage } from "../utils/utils";

const weekDays = 7;
const screenHorizontalPadding = (32 * 2) / 5;

export const dayMarginBetween = 8;
export const daySize =
  Dimensions.get("screen").width / weekDays - (screenHorizontalPadding + 5);

interface habitProps extends TouchableOpacityProps {
  amountOfHabits?: number;
  amountCompleted?: number;
  date: Date;
}

export function Habit({
  amountOfHabits = 0,
  amountCompleted = 0,
  date,
  ...rest
}: habitProps) {
  const completedPercentage =
    amountOfHabits > 0
      ? generateProgressPercentage(amountOfHabits, amountCompleted)
      : 0;
  const today = dayjs().startOf("day").toDate();
  const isCurrentDay = dayjs(date).isSame(today);

  return (
    <TouchableOpacity
      {...rest}
      activeOpacity={0.5}
      style={{ width: daySize, height: daySize }}
      className={clsx(
        "w-10 h-10 bg-charcoal border border-blackCoral rounded-lg m-1",
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
          ["border-white border-2"]: isCurrentDay,
        }
      )}
    />
  );
}
