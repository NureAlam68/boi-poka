import React, { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("./booksData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="mb-[100px]">
      <h1 className="text-[40px] font-bold text-center">Books</h1>
      <div className="mt-[36px] grid grid-cols-3 gap-6">
        {
            books.map(book => <Book book={book} key={book.bookId}></Book>)
        }
      </div>
    </div>
  );
};

export default Books;
