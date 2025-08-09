import { useState, useContext } from "react";
import booksContext from "../context/books";

function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);
  const { editBookById } = useContext(booksContext);

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(book.id, title);
    editBookById(book.id, title);
  };
  return (
    <form onSubmit={handleSubmit} className="book-edit">
      <label>Title</label>
      <input className="input" value={title} onChange={handleChange} />
      <button className="button is-primary">Save</button>
    </form>
  );
}

export default BookEdit;
