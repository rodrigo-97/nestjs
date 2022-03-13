/*
  Warnings:

  - You are about to drop the `__BooksOfAuthor` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "__BooksOfAuthor" DROP CONSTRAINT "__BooksOfAuthor_A_fkey";

-- DropForeignKey
ALTER TABLE "__BooksOfAuthor" DROP CONSTRAINT "__BooksOfAuthor_B_fkey";

-- DropTable
DROP TABLE "__BooksOfAuthor";

-- CreateTable
CREATE TABLE "AuthorBooks" (
    "id" SERIAL NOT NULL,
    "authorId" TEXT NOT NULL,
    "bookId" TEXT NOT NULL,

    CONSTRAINT "AuthorBooks_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AuthorBooks" ADD CONSTRAINT "AuthorBooks_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "Author"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AuthorBooks" ADD CONSTRAINT "AuthorBooks_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
