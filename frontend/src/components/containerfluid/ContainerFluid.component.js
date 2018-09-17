import React, { Component } from 'react';

class ContainerFluidComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid" id="main-container">
        <div className="row">

          {/* Sidebar */}
          <div className="col" id="main-sidebar">
            <div className="list-group list-group-flush">
              <a href="index.html" className="list-group-item list-group-item-action active"><i className="fa fa-home fa-lg fa-fw"></i> Home</a>
              <a href="grid.html" className="list-group-item list-group-item-action"><i className="fa fa-star fa-lg fa-fw text-warning"></i> Editor's Choice</a>
              <a href="categories.html" className="list-group-item list-group-item-action"><i className="fa fa-th fa-lg fa-fw"></i> Categories</a>
              <a href="grid.html" className="list-group-item list-group-item-action sub">Computers</a>
              <a href="grid.html" className="list-group-item list-group-item-action sub">Cell Phones</a>
              <a href="grid.html" className="list-group-item list-group-item-action sub">Photography</a>
              <a href="grid.html" className="list-group-item list-group-item-action sub">Home Entertainment</a>
              <a href="grid.html" className="list-group-item list-group-item-action sub">Video Games</a>
              <div className="collapse" id="categories">
                <a href="grid.html" className="list-group-item list-group-item-action sub">Headphones</a>
                <a href="grid.html" className="list-group-item list-group-item-action sub">Office Electronics</a>
                <a href="grid.html" className="list-group-item list-group-item-action sub">Office Supplies</a>
                <a href="grid.html" className="list-group-item list-group-item-action sub">Musical Instruments</a>
              </div>
              <a href="#categories" className="list-group-item list-group-item-action sub toggle" data-toggle="collapse" aria-expanded="false">MORE &#9662;</a>
              <a href="about.html" className="list-group-item list-group-item-action"><i className="fa fa-list fa-lg fa-fw"></i> Other Pages</a>
              <a href="about.html" className="list-group-item list-group-item-action sub">About Us</a>
              <a href="cart.html" className="list-group-item list-group-item-action sub">Cart</a>
              <a href="checkout.html" className="list-group-item list-group-item-action sub">Checkout</a>
              <a href="compare.html" className="list-group-item list-group-item-action sub">Compare</a>
              <a href="contact.html" className="list-group-item list-group-item-action sub">Contact Us</a>
              <a href="404.html" className="list-group-item list-group-item-action sub">Error 404</a>
              <a href="faq.html" className="list-group-item list-group-item-action sub">FAQ</a>
              <a href="login.html" className="list-group-item list-group-item-action sub">Login / Register</a>

              <div className="collapse" id="pages">

                <a href="account-profile.html" className="list-group-item list-group-item-action sub">My Profile</a>
                <a href="account-order.html" className="list-group-item list-group-item-action sub">My Orders</a>
                <a href="account-address.html" className="list-group-item list-group-item-action sub">My Address</a>
                <a href="account-wishlist.html" className="list-group-item list-group-item-action sub">My Wishlist</a>
              </div>

              <a href="#pages" className="list-group-item list-group-item-action sub toggle" data-toggle="collapse" aria-expanded="false">MORE &#9662;</a>

              <a href="#" className="list-group-item list-group-item-action"><i className="fa fa-question-circle fa-lg fa-fw"></i> Help</a>
              <a href="#" className="list-group-item list-group-item-action"><i className="fa fa-plus-circle fa-lg fa-fw"></i> Start Selling</a>
            </div>
            <div className="small p-3">Copyright © 2018 Mimity All right reserved</div>
          </div>
          {/* /Sidebar */}

          <div className="col" id="main-content">

            {/* Home Slider */}
            <div className="swiper-container" id="home-slider">
              <div className="swiper-wrapper">
                <a href="grid.html" className="swiper-slide" data-cover="../img/slider/1.jpg" data-xs-height="150px" data-sm-height="265px" data-md-height="300px" data-lg-height="300px" data-xl-height="300px"></a>
                <a href="grid.html" className="swiper-slide" data-cover="../img/slider/2.jpg" data-xs-height="150px" data-sm-height="265px" data-md-height="300px" data-lg-height="300px" data-xl-height="300px"></a>
                <a href="grid.html" className="swiper-slide" data-cover="../img/slider/3.jpg" data-xs-height="150px" data-sm-height="265px" data-md-height="300px" data-lg-height="300px" data-xl-height="300px"></a>
              </div>
              <a href="#" role="button" className="carousel-control-prev d-none d-sm-flex" id="home-slider-prev"><i className="fa fa-angle-left fa-lg"></i></a>
              <a href="#" role="button" className="carousel-control-next d-none d-sm-flex" id="home-slider-next"><i className="fa fa-angle-right fa-lg"></i></a>
            </div>
            {/* /Home Slider */}

            {/* Services */}
            <div className="row services-box">
              <div className="col-6 col-md-3">
                <div className="media">
                  <i className="fa fa-truck"></i>
                  <div className="media-body">
                    <h6>FREE SHIPPING</h6>
                    <span className="text-muted d-none d-md-block">Get free shipping for all orders $99 or more</span>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="media">
                  <i className="fa fa-refresh"></i>
                  <div className="media-body">
                    <h6>MONEY BACK GUARANTEE</h6>
                    <span className="text-muted d-none d-md-block">Get the item you ordered, or your money back</span>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="media">
                  <i className="fa fa-shield"></i>
                  <div className="media-body">
                    <h6>100% SECURE PAYMENT</h6>
                    <span className="text-muted d-none d-md-block">Your transaction are secure with SSL Encryption</span>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-3">
                <div className="media">
                  <i className="fa fa-phone"></i>
                  <div className="media-body">
                    <h6>ONLINE SUPPORT 24/7</h6>
                    <span className="text-muted d-none d-md-block">Chat with experts or have us call you right away</span>
                  </div>
                </div>
              </div>
            </div>
            {/* /Services */}

            {/* Categories Slider */}
            <h3 className="title mt-4">Shop by Categories</h3>
            <div className="content-slider">
              <div className="swiper-container categories-slider" id="categories-slider">
                <div className="swiper-wrapper">

                  <div className="swiper-slide">
                    <div className="row no-gutters gutters-1">
                      <div className="col-6 col-md-3 mb-1">
                        <a href="grid.html" className="card">
                          <img src="../img/categories/1.jpeg" alt="" className="card-img-top" />
                          <div className="card-img-overlay card-img-overlay-bottom p-2 pink">
                            <h5>Computers &amp; Accessories</h5>
                          </div>
                        </a>
                      </div>
                      <div className="col-6 col-md-3 mb-1">
                        <a href="grid.html" className="card">
                          <img src="../img/categories/2.jpeg" alt="" className="card-img-top" />
                          <div className="card-img-overlay card-img-overlay-bottom p-2 primary">
                            <h5>Cell Phones &amp; Accessories</h5>
                          </div>
                        </a>
                      </div>
                      <div className="col-6 col-md-3 mb-1">
                        <a href="grid.html" className="card">
                          <img src="../img/categories/3.jpeg" alt="" className="card-img-top" />
                          <div className="card-img-overlay card-img-overlay-bottom p-2 purple">
                            <h5>Photography &amp; Videography</h5>
                          </div>
                        </a>
                      </div>
                      <div className="col-6 col-md-3 mb-1">
                        <a href="grid.html" className="card">
                          <img src="../img/categories/4.jpeg" alt="" className="card-img-top" />
                          <div className="card-img-overlay card-img-overlay-bottom p-2 info">
                            <h5>Home Entertainment</h5>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="row no-gutters gutters-1">
                      <div className="col-6 col-md-3 mb-1">
                        <a href="grid.html" className="card">
                          <img src="../img/categories/5.jpeg" alt="" className="card-img-top" />
                          <div className="card-img-overlay card-img-overlay-bottom p-2 success">
                            <h5>Video Games</h5>
                          </div>
                        </a>
                      </div>
                      <div className="col-6 col-md-3 mb-1">
                        <a href="grid.html" className="card">
                          <img src="../img/categories/6.jpeg" alt="" className="card-img-top" />
                          <div className="card-img-overlay card-img-overlay-bottom p-2 warning">
                            <h5>Headphones</h5>
                          </div>
                        </a>
                      </div>
                      <div className="col-6 col-md-3 mb-1">
                        <a href="grid.html" className="card">
                          <img src="../img/categories/8.jpeg" alt="" className="card-img-top" />
                          <div className="card-img-overlay card-img-overlay-bottom p-2 danger">
                            <h5>Office Supplies</h5>
                          </div>
                        </a>
                      </div>
                      <div className="col-6 col-md-3 mb-1">
                        <a href="categories.html" className="card">
                          <img src="../img/more.svg" alt="" className="card-img-top" />
                        </a>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <a href="#" role="button" className="carousel-control-prev" id="categories-slider-prev"><i className="fa fa-angle-left fa-lg"></i></a>
              <a href="#" role="button" className="carousel-control-next" id="categories-slider-next"><i className="fa fa-angle-right fa-lg"></i></a>
            </div>
            {/* /Categories Slider */}

            {/* Hot new releases */}
            <h3 className="title mt-4">Hot New Releases</h3>
            <div className="row no-gutters gutters-2">

              <div className="col-6 col-md-3 mb-2">
                <div className="card card-product">
                  <div className="ribbon"><span className="bg-info text-white">New</span></div>
                  <button className="wishlist" title="Add to wishlist"><i className="fa fa-heart"></i></button>
                  <a href="detail.html"><img src="../img/product/1.jpg" alt="NEW Microsoft Surface Go" className="card-img-top" /></a>
                  <div className="card-body">
                    <span className="price">$549.00</span>
                    <a href="detail.html" className="card-title h6">NEW Microsoft Surface Go</a>
                    <div className="d-flex justify-content-between align-items-center">
                      <button type="button" className="btn btn-outline-info btn-sm btn-block">Add to cart</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-6 col-md-3 mb-2">
                <div className="card card-product">
                  <button className="wishlist active" title="Added to wishlist"><i className="fa fa-heart"></i></button>
                  <a href="detail.html"><img src="../img/product/2.jpg" alt='Apple 15.4" MacBook Pro Laptop Space Gray' className="card-img-top" /></a>
                  <div className="card-body">
                    <span className="price">$2,720.38</span>
                    <a href="detail.html" className="card-title h6">Apple 15.4" MacBook Pro Laptop Space Gray</a>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="rating" data-value="4"></span>
                      <button type="button" className="btn btn-outline-info btn-sm">Add to cart</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-6 col-md-3 mb-2">
                <div className="card card-product">
                  <button className="wishlist" title="Add to wishlist"><i className="fa fa-heart"></i></button>
                  <a href="detail.html"><img src="../img/product/3.jpg" alt="SanDisk Cruzer CZ36 64GB USB 2.0 Flash Drive" className="card-img-top" /></a>
                  <div className="card-body">
                    <span className="price">$13.49</span>
                    <a href="detail.html" className="card-title h6">SanDisk Cruzer CZ36 64GB USB 2.0 Flash Drive</a>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="rating" data-value="4.5"></span>
                      <button type="button" className="btn btn-outline-info btn-sm">Add to cart</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-6 col-md-3 mb-2">
                <div className="card card-product">
                  <button className="wishlist active" title="Added to wishlist"><i className="fa fa-heart"></i></button>
                  <a href="detail.html"><img src="../img/product/4.jpg" alt="Sony Alpha a6500 Mirrorless Digital Camera" className="card-img-top" /></a>
                  <div className="card-body">
                    <span className="price">$1,098.00</span>
                    <a href="detail.html" className="card-title h6">Sony Alpha a6500 Mirrorless Digital Camera</a>
                    <div className="d-flex justify-content-between align-items-center">
                      <button type="button" className="btn btn-outline-info btn-sm btn-block">Add to cart</button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            {/* /Hot new releases */}

            {/* Popular Brands */}
            <h3 className="title mt-4">Popular Brands</h3>
            <div className="content-slider">
              <div className="swiper-container brands-slider" id="brands-slider">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="row no-gutters gutters-2">
                      <div className="col-6 col-sm-4 col-md-2 mb-2">
                        <a href="grid.html" className="card">
                          <img src="../img/brands/samsung.svg" alt="" className="card-img-top" />
                        </a>
                      </div>
                      <div className="col-6 col-sm-4 col-md-2 mb-2">
                        <a href="grid.html" className="card">
                          <img src="../img/brands/lenovo.svg" alt="" className="card-img-top" />
                        </a>
                      </div>
                      <div className="col-6 col-sm-4 col-md-2 mb-2">
                        <a href="grid.html" className="card">
                          <img src="../img/brands/sony.svg" alt="" className="card-img-top" />
                        </a>
                      </div>
                      <div className="col-6 col-sm-4 col-md-2 mb-2">
                        <a href="grid.html" className="card">
                          <img src="../img/brands/canon.svg" alt="" className="card-img-top" />
                        </a>
                      </div>
                      <div className="col-6 col-sm-4 col-md-2 mb-2">
                        <a href="grid.html" className="card">
                          <img src="../img/brands/xerox.svg" alt="" className="card-img-top" />
                        </a>
                      </div>
                      <div className="col-6 col-sm-4 col-md-2 mb-2">
                        <a href="grid.html" className="card">
                          <img src="../img/brands/lg.svg" alt="" className="card-img-top" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="row no-gutters gutters-2">
                      <div className="col-6 col-sm-4 col-md-2 mb-2">
                        <a href="grid.html" className="card">
                          <img src="../img/brands/xbox.svg" alt="" className="card-img-top" />
                        </a>
                      </div>
                      <div className="col-6 col-sm-4 col-md-2 mb-2">
                        <a href="grid.html" className="card">
                          <img src="../img/brands/dell.svg" alt="" className="card-img-top" />
                        </a>
                      </div>
                      <div className="col-6 col-sm-4 col-md-2 mb-2">
                        <a href="grid.html" className="card">
                          <img src="../img/brands/nikon.svg" alt="" className="card-img-top" />
                        </a>
                      </div>
                      <div className="col-6 col-sm-4 col-md-2 mb-2">
                        <a href="grid.html" className="card">
                          <img src="../img/brands/sandisk.svg" alt="" className="card-img-top" />
                        </a>
                      </div>
                      <div className="col-6 col-sm-4 col-md-2 mb-2">
                        <a href="grid.html" className="card">
                          <img src="../img/brands/gopro.svg" alt="" className="card-img-top" />
                        </a>
                      </div>
                      <div className="col-6 col-sm-4 col-md-2 mb-2">
                        <a href="grid.html" className="card">
                          <img src="../img/brands/logitech.svg" alt="" className="card-img-top" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a href="#" role="button" className="carousel-control-prev" id="brands-slider-prev"><i className="fa fa-angle-left fa-lg"></i></a>
              <a href="#" role="button" className="carousel-control-next" id="brands-slider-next"><i className="fa fa-angle-right fa-lg"></i></a>
            </div>
            {/* /Popular Brands */}

            {/* Popular */}
            <h3 className="title mt-4">Popular this week</h3>
            <div className="content-slider">
              <div className="swiper-container" id="popular-slider">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="row no-gutters gutters-2">
                      <div className="col-6 col-md-3 mb-2">
                        <div className="card card-product">
                          <div className="badge badge-success badge-pill">save $89.01</div>
                          <button className="wishlist" title="Add tot wishlist"><i className="fa fa-heart"></i></button>
                          <a href="detail.html"><img src="../img/product/9.jpg" alt="ASUS VivoBook F510UA FHD Laptop" className="card-img-top" /></a>
                          <div className="card-body">
                            <span className="price"><del className="small text-muted">$599.00</del> $509.99</span>
                            <a href="detail.html" className="card-title h6">ASUS VivoBook F510UA FHD Laptop</a>
                            <div className="d-flex justify-content-between align-items-center">
                              <span className="rating" data-value="4"></span>
                              <button type="button" className="btn btn-outline-info btn-sm">Add to cart</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 col-md-3 mb-2">
                        <div className="card card-product">
                          <div className="ribbon"><span className="bg-pink text-white">Hot</span></div>
                          <button className="wishlist" title="Add tot wishlist"><i className="fa fa-heart"></i></button>
                          <a href="detail.html"><img src="../img/product/10.jpg" alt="Nikon D7200 DX-format DSLR Body (Black)" className="card-img-top" /></a>
                          <div className="card-body">
                            <span className="price">$996.95</span>
                            <a href="detail.html" className="card-title h6">Nikon D7200 DX-format DSLR Body (Black)</a>
                            <div className="d-flex justify-content-between align-items-center">
                              <span className="rating" data-value="5"></span>
                              <button type="button" className="btn btn-outline-info btn-sm">Add to cart</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 col-md-3 mb-2">
                        <div className="card card-product">
                          <button className="wishlist" title="Add tot wishlist"><i className="fa fa-heart"></i></button>
                          <a href="detail.html"><img src="../img/product/11.jpg" alt="Polk Audio PSW10 10-Inch Powered Subwoofer" className="card-img-top" /></a>
                          <div className="card-body">
                            <span className="price">$99.99</span>
                            <a href="detail.html" className="card-title h6">Polk Audio PSW10 10-Inch Powered Subwoofer</a>
                            <div className="d-flex justify-content-between align-items-center">
                              <span className="rating" data-value="4"></span>
                              <button type="button" className="btn btn-outline-info btn-sm">Add to cart</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 col-md-3 mb-2">
                        <div className="card card-product">
                          <div className="badge badge-danger badge-pill">Only 1 left in stock</div>
                          <button className="wishlist" title="Add tot wishlist"><i className="fa fa-heart"></i></button>
                          <a href="detail.html"><img src="../img/product/12.jpg" alt="Essential Phone in Halo Gray – 128 GB Unlocked" className="card-img-top" /></a>
                          <div className="card-body">
                            <span className="price"><del className="small text-muted">$499.99</del> $435.00</span>
                            <a href="detail.html" className="card-title h6">Essential Phone in Halo Gray – 128 GB Unlocked</a>
                            <div className="d-flex justify-content-between align-items-center">
                              <span className="rating" data-value="4"></span>
                              <button type="button" className="btn btn-outline-info btn-sm">Add to cart</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="row no-gutters gutters-2">
                      <div className="col-6 col-md-3 mb-2">
                        <div className="card card-product">
                          <div className="badge badge-success badge-pill">save $89.01</div>
                          <button className="wishlist" title="Add tot wishlist"><i className="fa fa-heart"></i></button>
                          <a href="detail.html">
                            <img src="../img/product/9.jpg" alt="ASUS VivoBook F510UA FHD Laptop" className="card-img-top" />
                          </a>
                          <div className="card-body">
                            <span className="price"><del className="small text-muted">$599.00</del> $509.99</span>
                            <a href="detail.html" className="card-title h6">ASUS VivoBook F510UA FHD Laptop</a>
                            <div className="d-flex justify-content-between align-items-center">
                              <span className="rating" data-value="4"></span>
                              <button type="button" className="btn btn-outline-info btn-sm">Add to cart</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 col-md-3 mb-2">
                        <div className="card card-product">
                          <div className="ribbon"><span className="bg-pink text-white">Hot</span></div>
                          <button className="wishlist" title="Add tot wishlist"><i className="fa fa-heart"></i></button>
                          <a href="detail.html">
                            <img src="../img/product/10.jpg" alt="Nikon D7200 DX-format DSLR Body (Black)" className="card-img-top" />
                          </a>
                          <div className="card-body">
                            <span className="price">$996.95</span>
                            <a href="detail.html" className="card-title h6">Nikon D7200 DX-format DSLR Body (Black)</a>
                            <div className="d-flex justify-content-between align-items-center">
                              <span className="rating" data-value="5"></span>
                              <button type="button" className="btn btn-outline-info btn-sm">Add to cart</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 col-md-3 mb-2">
                        <div className="card card-product">
                          <button className="wishlist" title="Add tot wishlist"><i className="fa fa-heart"></i></button>
                          <a href="detail.html"><img src="../img/product/11.jpg" alt="Polk Audio PSW10 10-Inch Powered Subwoofer" className="card-img-top" /></a>
                          <div className="card-body">
                            <span className="price">$99.99</span>
                            <a href="detail.html" className="card-title h6">Polk Audio PSW10 10-Inch Powered Subwoofer</a>
                            <div className="d-flex justify-content-between align-items-center">
                              <span className="rating" data-value="4"></span>
                              <button type="button" className="btn btn-outline-info btn-sm">Add to cart</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 col-md-3 mb-2">
                        <div className="card card-product">
                          <div className="badge badge-danger badge-pill">Only 1 left in stock</div>
                          <button className="wishlist" title="Add tot wishlist"><i className="fa fa-heart"></i></button>
                          <a href="detail.html"><img src="../img/product/12.jpg" alt="Essential Phone in Halo Gray – 128 GB Unlocked" className="card-img-top" /></a>
                          <div className="card-body">
                            <span className="price"><del className="small text-muted">$499.99</del> $435.00</span>
                            <a href="detail.html" className="card-title h6">Essential Phone in Halo Gray – 128 GB Unlocked</a>
                            <div className="d-flex justify-content-between align-items-center">
                              <span className="rating" data-value="4"></span>
                              <button type="button" className="btn btn-outline-info btn-sm">Add to cart</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <a href="#" role="button" className="carousel-control-prev" id="popular-slider-prev">
                <i className="fa fa-angle-left fa-lg"></i>
              </a>
              <a href="#" role="button" className="carousel-control-next" id="popular-slider-next">
                <i className="fa fa-angle-right fa-lg"></i>
              </a>
            </div>
            {/* /Popular */}

            {/* Footer */}
            <div className="navbar navbar-expand navbar-light navbar-footer">
              <a className="navbar-brand" href="index.html">Mimity</a>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="about.html">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Privacy</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Terms</a>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#"><i className="fa fa-question-circle"></i> Help</a>
                </li>
              </ul>
            </div>
            {/* /Footer */}

          </div>
        </div>
      </div>
    );
  }

}

export default ContainerFluidComponent;