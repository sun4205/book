import { useContext } from "react";
import booksContext from "../context/books";
import BookShow from "./BookShow";

function BookList() {
  const { books } = useContext(booksContext);

  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });
  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
