/*
  Warnings:

  - You are about to drop the `_AuthorToBook` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_AuthorToBook" DROP CONSTRAINT "_AuthorToBook_A_fkey";

-- DropForeignKey
ALTER TABLE "_AuthorToBook" DROP CONSTRAINT "_AuthorToBook_B_fkey";

-- DropTable
DROP TABLE "_AuthorToBook";

-- CreateTable
CREATE TABLE "__BooksOfAuthor" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "__BooksOfAuthor_AB_unique" ON "__BooksOfAuthor"("A", "B");

-- CreateIndex
CREATE INDEX "__BooksOfAuthor_B_index" ON "__BooksOfAuthor"("B");

-- AddForeignKey
ALTER TABLE "__BooksOfAuthor" ADD FOREIGN KEY ("A") REFERENCES "Author"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "__BooksOfAuthor" ADD FOREIGN KEY ("B") REFERENCES "Book"("id") ON DELETE CASCADE ON UPDATE CASCADE;
