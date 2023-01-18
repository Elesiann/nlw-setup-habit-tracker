/*
  Warnings:

  - You are about to drop the column `habit_id` on the `habit_week_days` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "days_date_key";

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_habit_week_days" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "habitId" TEXT NOT NULL,
    "week_day" INTEGER NOT NULL,
    CONSTRAINT "habit_week_days_habitId_fkey" FOREIGN KEY ("habitId") REFERENCES "habits" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_habit_week_days" ("habitId", "id", "week_day") SELECT "habitId", "id", "week_day" FROM "habit_week_days";
DROP TABLE "habit_week_days";
ALTER TABLE "new_habit_week_days" RENAME TO "habit_week_days";
CREATE UNIQUE INDEX "habit_week_days_habitId_week_day_key" ON "habit_week_days"("habitId", "week_day");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE INDEX "days_date_idx" ON "days"("date");
