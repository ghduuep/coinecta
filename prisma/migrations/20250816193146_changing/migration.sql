/*
  Warnings:

  - You are about to drop the column `date` on the `Transaction` table. All the data in the column will be lost.
  - Added the required column `dueDate` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Transaction" DROP COLUMN "date",
ADD COLUMN     "dueDate" TIMESTAMP(3) NOT NULL;
