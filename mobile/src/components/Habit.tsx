import {
  TouchableOpacity,
  Dimensions,
  TouchableOpacityProps,
} from "react-native";

const weekDays = 7;
const screenHorizontalPadding = (32 * 2) / 5;

export const dayMarginBetween = 8;
export const daySize =
  Dimensions.get("screen").width / weekDays - (screenHorizontalPadding + 5);

interface habitProps extends TouchableOpacityProps {}

export function Habit({ ...rest }: habitProps) {
  return (
    <TouchableOpacity
      {...rest}
      activeOpacity={0.5}
      style={{ width: daySize, height: daySize }}
      className="bg-[#29313D] border border-[#313B49] rounded-lg m-1"
    />
  );
}
