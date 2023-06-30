import React, { Fragment, useState } from "react";

const EditCust = ({ cust }) => {
  const [nama, setNama] = useState(cust.nama);
  const [alamat, setAlamat] = useState(cust.alamat);
  const [email, setEmail] = useState(cust.email);
  const [notelp, setNotelp] = useState(cust.notelp);

  //edit description function

  const update = async e => {
    e.preventDefault();
    try {
      const body = { nama, alamat, email, notelp  };
      const response = await fetch(
        `http://localhost:4000/buy/${cust.cust_id}`,
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
        data-target={`#id${cust.cust_id}`}
      >
        Edit
      </button>

      {/* 
        id = id10
      */}
      <div
        class="modal"
        id={`id${cust.cust_id}`}
      >
        <div class="modal-dialog">
          <div class="modal-content bg-dark text-white">
            <div class="modal-header">
              <h4 class="modal-title">Edit Data Customer</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
              >
                &times;
              </button>
            </div>

            <div class="modal-body">
            <div class="text-sm">Nama</div>
              <input
                type="text"
                className="form-control"
                value={nama}
                onChange={e => setNama(e.target.value)}
              />
            </div>

            <div class="modal-body">
            <div class="text-sm">Alamat</div>
              <input
                type="text"
                className="form-control"
                value={alamat}
                onChange={e => setAlamat(e.target.value)}
              />
            </div>

            <div class="modal-body">
            <div class="text-sm">Email</div>
              <input
                type="text"
                className="form-control"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>

            <div class="modal-body">
            <div class="text-sm">NO Telp</div>
              <input
                type="text"
                className="form-control"
                value={notelp}
                onChange={e => setNotelp(e.target.value)}
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

export default EditCust;
