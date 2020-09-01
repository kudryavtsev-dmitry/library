export const filterBooks = (books, genres) => {

  if (genres.selectedGenre && !books.filterValue) {
    return books.books.filter((book) =>
      book.bookGenres.some((genre) => genre.genreId === genres.selectedGenre)
    );
  }
  if (!genres.selectedGenre && books.filterValue) {
    return books.books.filter((book) => book.title.includes(books.filterValue));
  }
  if (!genres.selectedGenre && !books.filterValue) {
    return books.books;
  }
  if (genres.selectedGenre && books.filterValue) {
    return books.books
      .filter((book) =>
        book.bookGenres.some((genre) => genre.genreId === genres.selectedGenre))
      .filter((book) => book.title.includes(books.filterValue));
  }
};