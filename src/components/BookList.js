import { useContext } from "react";
import booksContext from "../context/books";
import BookShow from "./BookShow";

function BookList({ books, onDelete, onEdit }) {
  const { count, incrementCount } = useContext(booksContext);
  const renderedBooks = books.map((book) => {
    return (
      <BookShow onEdit={onEdit} onDelete={onDelete} key={book.id} book={book} />
    );
  });
  return (
    <div className="book-list">
      {count}
      <button onClick={incrementCount}>click</button> {renderedBooks}
    </div>
  );
}

export default BookList;
