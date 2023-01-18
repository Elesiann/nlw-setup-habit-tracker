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
}
