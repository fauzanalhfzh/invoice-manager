/*
  Warnings:

  - You are about to drop the column `user_id` on the `invoice` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "invoice" DROP CONSTRAINT "invoice_user_id_fkey";

-- AlterTable
ALTER TABLE "invoice" DROP COLUMN "user_id";
