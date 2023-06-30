import React, { Fragment, useState } from "react";

const InputCust = ( ) => {
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [email, setEmail] = useState("");
  const [notelp, setNotelp] = useState("");

  const onSubmitForm1 = async e => {
    e.preventDefault();
    try {
      const body = { nama, alamat, email, notelp };
      const responses = await fetch("http://localhost:4000/buy", {
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
    <h1 className="text-center mt-5">CUSTOMER LIST</h1>
    <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target="#1"
      >
        ADD
      </button>

      <div class="modal" id="1">
        <div class="modal-dialog">
          <div class="modal-content bg-dark text-white">
            <div class="modal-header">
              <h4 class="modal-title">Add Customer's Data</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
              >
                &times;
              </button>
            </div>
            
      <form className="d-grid mt-2" onSubmit={onSubmitForm1}>
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
        <div class="text-sm">email</div>
        <input
          type="text"
          className="form-control"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        </div>

        <div class="modal-body">
        <div class="text-sm">No Telp</div>
        <input
          type="text"
          className="form-control"
          value={notelp}
          onChange={e => setNotelp(e.target.value)}
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

export default InputCust;
