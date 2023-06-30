import React, { Fragment, useState } from "react";

const EditBook = ({ book }) => {
  const [judul, setJudul] = useState(book.judul);
  const [genre, setGenre] = useState(book.genre);
  const [author, setAuthor] = useState(book.author);
  const [publisher, setPublisher] = useState(book.publisher);
  const [price, setPrice] = useState(book.price);
  const [quantity, setQuantity] = useState(book.quantity);

  //edit description function

  const update = async e => {
    e.preventDefault();
    try {
      const body = { judul, genre, author, publisher, price, quantity  };
      const response = await fetch(
        `http://localhost:4000/bookstore/${book.book_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <button
        type="button"
        class="btn btn-success"
        data-toggle="modal"
        data-target={`#id${book.book_id}`}
      >
        Edit
      </button>

      {/* 
        id = id10
      */}
      <div
        class="modal"
        id={`id${book.book_id}`}
      >
        <div class="modal-dialog">
          <div class="modal-content bg-dark text-white">
            <div class="modal-header">
              <h4 class="modal-title">Edit BOOK</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                
              >
                &times;
              </button>
            </div>

            <div class="modal-body">
            <div class="text-sm">Judul</div>
              <input
                type="text"
                className="form-control"
                value={judul}
                onChange={e => setJudul(e.target.value)}
              />
            </div>

            <div class="modal-body">
            <div class="text-sm">Genre</div>
              <input
                type="text"
                className="form-control"
                value={genre}
                onChange={e => setGenre(e.target.value)}
              />
            </div>

            <div class="modal-body">
            <div class="text-sm">Author</div>
              <input
                type="text"
                className="form-control"
                value={author}
                onChange={e => setAuthor(e.target.value)}
              />
            </div>

            <div class="modal-body">
            <div class="text-sm">Publisher</div>
              <input
                type="text"
                className="form-control"
                value={publisher}
                onChange={e => setPublisher(e.target.value)}
              />
            </div>

            <div class="modal-body">
            <div class="text-sm">Price</div>
              <input
                type="text"
                className="form-control"
                value={price}
                onChange={e => setPrice(e.target.value)}
              />
            </div>

            <div class="modal-body bg-dark text-white">
            <div class="text-sm">Quantity</div>
              <input
                type="text"
                className="form-control"
                value={quantity}
                onChange={e => setQuantity(e.target.value)}
              />
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-success"
                data-dismiss="modal"
                onClick={e => update(e)}
              >
                Edit
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditBook;
