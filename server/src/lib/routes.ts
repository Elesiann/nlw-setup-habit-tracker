import { prisma } from "./prisma";
import { z } from "zod";
import { FastifyInstance } from "fastify";
import dayjs from "dayjs";

export async function appRoutes(app: FastifyInstance) {
  app.post("/create-habits", async (request) => {
    const createHabitBody = z.object({
      title: z.string(),
      weekDays: z.array(z.number(), z.number().min(0).max(6)),
    });

    const { title, weekDays } = createHabitBody.parse(request.body);

    const created_at = dayjs().startOf("day").toDate();

    await prisma.habit.create({
      data: {
        title,
        created_at,
        weekDays: {
          create: weekDays.map((day) => {
            return {
              week_day: day,
            };
          }),
        },
      },
    });
  });

  app.get("/day", async (request) => {
    const getDayParams = z.object({
      date: z.coerce.date(),
    });

    const { date } = getDayParams.parse(request.query);
    const parsedDate = dayjs(date).startOf("day");
    const weekDay = parsedDate.get("day");

    const possibleHabits = await prisma.habit.findMany({
      where: {
        created_at: {
          lte: date,
        },
        weekDays: {
          some: {
            week_day: weekDay,
          },
        },
      },
    });

    const day = await prisma.day.findFirst({
      where: {
        date: parsedDate.toDate(),
      },
      include: {
        dayHabits: true,
      },
    });

    const completedHabits = day?.dayHabits.map((dayHabit) => {
      return dayHabit.habit_id;
    });

    return {
      possibleHabits,
      completedHabits,
    };
  });
}
