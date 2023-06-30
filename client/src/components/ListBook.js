import React, { Fragment, useEffect, useState } from "react";

import EditBook from "./EditBook";

const ListBook = () => {
  const [books, setBooks] = useState([]);

  //delete todo function

  const deleteBooks = async id => {
    try {
      const deleteBooks = await fetch(`http://localhost:4000/bookstore/${id}`, {
        method: "DELETE"
      });

      setBooks(books.filter(book => book.book_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getBooks = async () => {
    try {
      const response = await fetch("http://localhost:4000/bookstore");
      const jsonData = await response.json();

      setBooks(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  console.log(books);

  return (
    <Fragment>
      {" "}
      <table class="table mt-5 text-center">
        <thead>
          <tr>
            <th>Judul</th>
            <th>Genre</th>
            <th>Author</th>
            <th>Publisher</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <tr key={book.book_id}>
              <td>{book.judul}</td>
              <td>{book.genre}</td>
              <td>{book.author}</td>
              <td>{book.publisher}</td>
              <td>{book.price}</td>
              <td>{book.quantity}</td>
              <td>
                <EditBook book={book} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteBooks(book.book_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}

            
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListBook;
