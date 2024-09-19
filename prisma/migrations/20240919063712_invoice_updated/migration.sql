/*
  Warnings:

  - The `charge` column on the `invoice` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "invoice" DROP COLUMN "charge",
ADD COLUMN     "charge" DOUBLE PRECISION DEFAULT 0;
