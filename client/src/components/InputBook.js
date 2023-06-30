import React, { Fragment, useState } from "react";

const InputBook = (  ) => {
  const [judul, setJudul] = useState("");
  const [genre, setGenre] = useState("");
  const [author, setAuthor] = useState("");
  const [publisher, setPublisher] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { judul, genre, author, publisher, price, quantity };
      const response = await fetch("http://localhost:4000/bookstore", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center">BOOK LIST</h1>

      <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target="#2"
      >
        ADD
      </button>

      <div class="modal" id="2">
        <div class="modal-dialog">
          <div class="modal-content bg-dark text-white">
            <div class="modal-header">
              <h4 class="modal-title">Add Books's Data </h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
              >
                &times;
              </button>
            </div>

      <form className="d-grid mt-2" onSubmit={onSubmitForm}>
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

        <div class="modal-body">
        <div class="text-sm">Quantity</div>
        <input
          type="text"
          className="form-control"
          value={quantity}
          onChange={e => setQuantity(e.target.value)}
        />
        </div>
        <button className="btn btn-primary ml-3">Add</button>
      </form>

      </div>
      </div>
      </div>
    </Fragment>
  );
};

export default InputBook;
