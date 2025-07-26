import { useState } from "react";
import BookCreate from "./components/BookCreate";

function App() {
  const [book, setBooks] = useState([]);

  const createBook = (title) => {
    console.log("need to add", title);
  };
  return (
    <div>
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
