const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());


app.post("/bookstore", async (req, res) => {
    try {
      const { judul, genre, author, publisher, price, quantity } = req.body;
      const newBooks = await pool.query(
        "INSERT INTO bookstore1 (judul, genre, author, publisher, price, quantity ) VALUES($1, $2, $3, $4, $5, $6 ) RETURNING *",
        [judul, genre, author, publisher, price, quantity]
      );
  
      res.json(newBooks.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  });

  app.get("/bookstore", async (req, res) => {
    try {
      const allBooks = await pool.query("SELECT * FROM bookstore1");
      res.json(allBooks.rows);
    } catch (err) {
      console.error(err.message);
    }
  });
  
  app.get("/bookstore/:id", async (req, res) => {
      try {
        const { id } = req.params;
        const books = await pool.query("SELECT * FROM bookstore1 WHERE book_id = $1", [
          id
        ]);
        res.json(books.rows[0]);
      } catch (err) {
        console.error(err.message);
      }
    });
  
  app.put("/bookstore/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const { judul, genre, author, publisher, price, quantity } = req.body;
      const updateBooks = await pool.query(
        "UPDATE bookstore1 SET judul = $1, genre=$2, author=$3, publisher=$4, price=$5, quantity=$6 WHERE book_id = $7",
        [judul, genre, author, publisher, price, quantity, id]
      );
  
      res.json("Book was updated!");
    } catch (err) {
      console.error(err.message);
    }
  });
  
  app.delete("/bookstore/:id", async (req, res) => {
      try {
        const { id } = req.params;
        const deleteBooks = await pool.query("DELETE FROM bookstore1 WHERE book_id = $1", [
          id
        ]);
        res.json("Book was deleted!");
      } catch (err) {
        console.log(err.message);
      }
    });

    app.post("/buy", async (req, res) => {
      try {
        const { nama, alamat, email, notelp } = req.body;
        const newCust = await pool.query(
          "INSERT INTO buy ( nama, alamat, email, notelp ) VALUES($1, $2, $3, $4 ) RETURNING *",
          [ nama, alamat, email, notelp ]
        );
    
        res.json(newCust.rows[0]);
      } catch (err) {
        console.error(err.message);
      }
    });
  
    app.get("/buy", async (req, res) => {
      try {
        const allCust = await pool.query("SELECT * FROM buy");
        res.json(allCust.rows);
      } catch (err) {
        console.error(err.message);
      }
    });
    
    app.get("/buy/:id", async (req, res) => {
        try {
          const { id } = req.params;
          const cust = await pool.query("SELECT * FROM buy WHERE cust_id = $1", [
            id
          ]);
          res.json(cust.rows[0]);
        } catch (err) {
          console.error(err.message);
        }
      });
    
    app.put("/buy/:id", async (req, res) => {
      try {
        const { id } = req.params;
        const { nama, alamat, email, notelp } = req.body;
        const updateCust = await pool.query(
          "UPDATE buy SET nama = $1, alamat=$2, email=$3, notelp=$4 WHERE cust_id = $5",
          [nama, alamat, email, notelp, id]
        );
    
        res.json("Customer's data was updated!");
      } catch (err) {
        console.error(err.message);
      }
    });
    
    app.delete("/buy/:id", async (req, res) => {
        try {
          const { id } = req.params;
          const deleteCust = await pool.query("DELETE FROM buy WHERE cust_id = $1", [
            id
          ]);
          res.json("Customer's data was deleted!");
        } catch (err) {
          console.log(err.message);
        }
      });

app.listen(4000, () => {
  console.log("server has started on port 4000");
});