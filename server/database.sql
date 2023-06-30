CREATE DATABASE readingbookstore1;

CREATE TABLE bookstore1(
  book_id SERIAL PRIMARY KEY,
  judul VARCHAR(255),
  author VARCHAR(255),
  publisher VARCHAR(255),
  genre VARCHAR(255),
  price INT,
  quantity INT,
);


CREATE TABLE buy(
  cust_id SERIAL PRIMARY KEY,
  nama VARCHAR(255),
  alamat VARCHAR(255),
  email VARCHAR(255),
  notelp INT,
);
