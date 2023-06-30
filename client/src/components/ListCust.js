import React, { Fragment, useEffect, useState } from "react";

import EditCust from "./EditCust";
import Checkout from "./checkout";

const ListCust = () => {
  const [custs, setCusts] = useState([]);

  //delete todo function

  const deleteCust = async id => {
    try {
      const deleteCust = await fetch(`http://localhost:4000/buy/${id}`, {
        method: "DELETE"
      });

      setCusts(custs.filter(cust => cust.cust_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getCust = async () => {
    try {
      const response = await fetch("http://localhost:4000/buy");
      const jsonData = await response.json();

      setCusts(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getCust();
  }, []);

  console.log(custs);

  return (
    <Fragment>
      {" "}
      <table class="table mt-5 text-center">
        <thead>
          <tr>
            <th>Nama</th>
            <th>Alamat</th>
            <th>Email</th>
            <th>No Telp</th>
            <th>Edit</th>
            <th>Delete</th>
            <th>Checkout</th>
          </tr>
        </thead>
        <tbody>
          {custs.map(cust => (
            <tr key={cust.cust_id}>
              <td>{cust.nama}</td>
              <td>{cust.alamat}</td>
              <td>{cust.email}</td>
              <td>{cust.notelp}</td>
              <td>
                <EditCust cust={cust} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteCust(cust.cust_id)}
                >
                  Delete
                </button>
              </td>
              <td>
                <Checkout />
              </td>
            </tr>
          ))}

            
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListCust;
