import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [book, setBooks] = useState([]);

  const createBook = (title) => {
    const updatedBooks = [
      ...BookShow,
      { id: Math.random(Math.random() * 9999), title },
    ];
    setBooks(updatedBooks);
  };
  return (
    <div className="apps">
      <BookList books={books} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
