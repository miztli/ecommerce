import React, { Component } from 'react';

class ModalContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <!-- Modal Cart -->
      <div class="modal fade modal-cart" id="cartModal" tabindex="-1" role="dialog" aria-labelledby="cartModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="cartModalLabel">You have 4 items in your bag</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              
              <div class="media">
                <a href="detail.html"><img src="../img/product/1.jpg" width="50" height="50" alt="NEW Microsoft Surface Go"></a>
                <div class="media-body">
                  <a href="detail.html" title="NEW Microsoft Surface Go">NEW Microsoft Surface Go</a>
                  <div class="input-spinner input-spinner-sm">
                    <input type="number" class="form-control form-control-sm" value="1" min="1" max="999">
                    <div class="btn-group-vertical">
                      <button type="button" class="btn btn-light"><i class="fa fa-chevron-up"></i></button>
                      <button type="button" class="btn btn-light"><i class="fa fa-chevron-down"></i></button>
                    </div>
                  </div>
                  x <span class="price">$549.00</span>
                  <button type="button" class="close" aria-label="Close"><i class="fa fa-trash-o"></i></button>
                </div>
              </div>
              
              <div class="media">
                <a href="detail.html"><img src="../img/product/3.jpg" width="50" height="50" alt="SanDisk Cruzer CZ36 64GB USB 2.0 Flash Drive"></a>
                <div class="media-body">
                  <a href="detail.html" title="SanDisk Cruzer CZ36 64GB USB 2.0 Flash Drive">SanDisk Cruzer CZ36 64GB USB 2.0 Flash Drive</a>
                  <div class="input-spinner input-spinner-sm">
                    <input type="number" class="form-control form-control-sm" value="1" min="1" max="999">
                    <div class="btn-group-vertical">
                      <button type="button" class="btn btn-light"><i class="fa fa-chevron-up"></i></button>
                      <button type="button" class="btn btn-light"><i class="fa fa-chevron-down"></i></button>
                    </div>
                  </div>
                  x <span class="price">$13.49</span>
                  <button type="button" class="close" aria-label="Close"><i class="fa fa-trash-o"></i></button>
                </div>
              </div>
              
              <div class="media">
                <a href="detail.html"><img src="../img/product/8.jpg" width="50" height="50" alt="Beats Studio3 Wireless Headphones"></a>
                <div class="media-body">
                  <a href="detail.html" title="Beats Studio3 Wireless Headphones">Beats Studio3 Wireless Headphones</a>
                  <div class="input-spinner input-spinner-sm">
                    <input type="number" class="form-control form-control-sm" value="1" min="1" max="999">
                    <div class="btn-group-vertical">
                      <button type="button" class="btn btn-light"><i class="fa fa-chevron-up"></i></button>
                      <button type="button" class="btn btn-light"><i class="fa fa-chevron-down"></i></button>
                    </div>
                  </div>
                  x <span class="price">$299.99</span>
                  <button type="button" class="close" aria-label="Close"><i class="fa fa-trash-o"></i></button>
                </div>
              </div>
              
              <div class="media">
                <a href="detail.html"><img src="../img/product/12.jpg" width="50" height="50" alt="Essential Phone in Halo Gray - 128 GB Unlocked"></a>
                <div class="media-body">
                  <a href="detail.html" title="Essential Phone in Halo Gray - 128 GB Unlocked">Essential Phone in Halo Gray - 128 GB Unlocked</a>
                  <div class="input-spinner input-spinner-sm">
                    <input type="number" class="form-control form-control-sm" value="1" min="1" max="999">
                    <div class="btn-group-vertical">
                      <button type="button" class="btn btn-light"><i class="fa fa-chevron-up"></i></button>
                      <button type="button" class="btn btn-light"><i class="fa fa-chevron-down"></i></button>
                    </div>
                  </div>
                  x <span class="price">$435.00</span>
                  <button type="button" class="close" aria-label="Close"><i class="fa fa-trash-o"></i></button>
                </div>
              </div>
              
            </div>
            <div class="modal-footer">
              <div class="box-total">
                <h4>Subotal: <span class="price">$1,297.48</span></h4>
                <a href="cart.html" class="btn btn-success">VIEW CART</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalContainer;