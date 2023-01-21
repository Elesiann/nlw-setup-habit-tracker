import dayjs from "dayjs";

export function daysFromYearBeggining() {
  const firstDayOfTheYear = dayjs().startOf("year");
  const today = new Date();
  const dates = [];
  let compareDates = firstDayOfTheYear;

  while (compareDates.isBefore(today)) {
    dates.push(compareDates.toDate());
    compareDates = compareDates.add(1, "day");
  }

  return dates;
}

export function generateProgressPercentage(total: number, completed: number) {
  return Math.round((completed / total) * 100);
}
