/*
  Warnings:

  - The primary key for the `BooksOfAuthors` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "BooksOfAuthors" DROP CONSTRAINT "BooksOfAuthors_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "BooksOfAuthors_pkey" PRIMARY KEY ("id");
