import React, { Fragment, useState } from "react";

const Checkout = () => {
    return(
        <div>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#3">
        Checkout
        </button>
      
      
      <div class="modal fade" id="3" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Pesanan</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              Pesanan Telah Dibuat
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
}
export default Checkout;