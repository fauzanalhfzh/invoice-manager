/*
  Warnings:

  - Made the column `charge` on table `invoice` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "invoice" ALTER COLUMN "charge" SET NOT NULL;
