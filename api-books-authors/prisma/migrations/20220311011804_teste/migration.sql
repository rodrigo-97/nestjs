/*
  Warnings:

  - You are about to drop the `BooksOfAuthors` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "BooksOfAuthors" DROP CONSTRAINT "BooksOfAuthors_authorId_fkey";

-- DropForeignKey
ALTER TABLE "BooksOfAuthors" DROP CONSTRAINT "BooksOfAuthors_bookId_fkey";

-- DropTable
DROP TABLE "BooksOfAuthors";

-- CreateTable
CREATE TABLE "_AuthorToBook" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_AuthorToBook_AB_unique" ON "_AuthorToBook"("A", "B");

-- CreateIndex
CREATE INDEX "_AuthorToBook_B_index" ON "_AuthorToBook"("B");

-- AddForeignKey
ALTER TABLE "_AuthorToBook" ADD FOREIGN KEY ("A") REFERENCES "Author"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AuthorToBook" ADD FOREIGN KEY ("B") REFERENCES "Book"("id") ON DELETE CASCADE ON UPDATE CASCADE;
