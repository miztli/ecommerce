import React, { Component } from 'react';

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="navbar navbar-expand navbar-light fixed-top">  
        {/*  Toggle Menu */}
        <span className="toggle-menu"><i className="fa fa-bars fa-lg"></i></span>  
        {/*  Logo */}
        <a className="navbar-brand" href="index.html"><img src="../img/logo.svg" alt="Mimity"/>Mimity</a>
        {/*  Search Form */}
        <form className="form-inline form-search d-none d-sm-inline">
          <div className="input-group">
            <button className="btn btn-light btn-search-back" type="button"><i className="fa fa-arrow-left"></i></button>
            <input type="text" className="form-control" placeholder="Search ..." aria-label="Search ..."/>
            <button className="btn btn-light" type="submit"><i className="fa fa-search"></i></button>
          </div>
        </form>
        {/*  /Search Form */}  
        {/*  navbar-nav */}
        <ul className="navbar-nav ml-auto">  
          {/*  Currency Dropdown */}
          <li className="nav-item dropdown d-none d-md-flex">
            <a className="nav-link dropdown-toggle" href="#" role="button" id="dropdownCurrency" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              USD <i className="fa fa-caret-down fa-fw"></i>
            </a>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownCurrency">
              <button className="dropdown-item" type="button">USD</button>
              <button className="dropdown-item" type="button">EUR</button>
            </div>
          </li>
          {/*  /Currency Dropdown */}  
          {/*  Language Dropdown */}
          <li className="nav-item dropdown d-none d-md-flex">
            <a className="nav-link dropdown-toggle" href="#" role="button" id="dropdownLanguage" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              English <i className="fa fa-caret-down fa-fw"></i>
            </a>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownLanguage">
              <button className="dropdown-item" type="button">English</button>
              <button className="dropdown-item" type="button">Spain</button>
            </div>
          </li>
          {/*  /Language Dropdown */}  
          {/*  Search Toggle */}
          <li className="nav-item d-sm-none">
            <a href="#" className="nav-link" id="search-toggle"><i className="fa fa-search fa-lg"></i></a>
          </li>
          {/*  /Search Toggle */}  
          {/*  Shopping Cart Toggle */}
          <li className="nav-item dropdown ml-1 ml-sm-3">
            <a href="#" className="nav-link" data-toggle="modal" data-target="#cartModal">
              <i className="fa fa-shopping-cart fa-lg"></i>
              <span className="badge badge-pink badge-count">4</span>
            </a>
          </li>
          {/*  /Shopping Cart Toggle */}  
          {/*  Notification Dropdown */}
          <li className="nav-item dropdown ml-1 ml-sm-3">
            <a className="nav-link dropdown-toggle" href="#" role="button" id="dropdownNotif" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i className="fa fa-bell fa-lg"></i>
              <span className="badge badge-info badge-count">3</span>
            </a>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownNotif">
              <a className="dropdown-item has-icon" href="#"><i className="fa fa-envelope"></i> 1 New Message</a>
              <a className="dropdown-item has-icon" href="#"><i className="fa fa-comment"></i> 2 New Comments</a>
            </div>
          </li>
          {/*  /Notification Dropdown */}  
          {/*  Login Button */}
          {/*  <li className="nav-item ml-4">
            <a href="login.html" className="nav-link btn btn-light btn-sm"><i className="fa fa-sign-in"></i> Login</a>
          </li> */}
          {/*  /Login Button */}  
        </ul>
        {/*  /navbar-nav */}  
        {/*  User Dropdown */}
        <div className="dropdown dropdown-user">
          <a className="dropdown-toggle" href="#" role="button" id="userDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img src="../img/user.svg" alt="User"/>
          </a>
          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
            <a className="dropdown-item has-icon" href="account-order.html"><i className="fa fa-shopping-bag fa-fw"></i> My Orders</a>
            <a className="dropdown-item has-icon has-badge" href="account-wishlist.html"><i className="fa fa-heart fa-fw"></i> Wishlist <span className="badge badge-secondary">3</span></a>
            <a className="dropdown-item has-icon" href="account-profile.html"><i className="fa fa-cog fa-fw"></i> Account Setting</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item has-icon" href="login.html"><i className="fa fa-sign-out fa-fw"></i> Sign out</a>
          </div>
        </div>
        {/*  /User Dropdown */}  
      </header>
    );
  }
}

export default HeaderComponent;