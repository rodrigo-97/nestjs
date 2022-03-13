/*
  Warnings:

  - The primary key for the `BooksOfAuthors` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `BooksOfAuthors` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "BooksOfAuthors_bookId_authorId_idx";

-- AlterTable
ALTER TABLE "BooksOfAuthors" DROP CONSTRAINT "BooksOfAuthors_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "BooksOfAuthors_pkey" PRIMARY KEY ("bookId", "authorId");
