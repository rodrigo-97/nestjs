-- CreateIndex
CREATE INDEX "BooksOfAuthors_bookId_authorId_idx" ON "BooksOfAuthors"("bookId", "authorId");
