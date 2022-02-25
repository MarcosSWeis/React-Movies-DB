import React from "react";
import logoDH from "../assets/images/logo-DH.png";
import { Link } from "react-router-dom";
function SideBar() {
  return (
    <ul
      className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      {/* <!-- Sidebar - Brand --> */}
      <Link
        exact={true}
        to="/"
        className="sidebar-brand d-flex align-items-center justify-content-center"
      >
        <div className="sidebar-brand-icon">
          <img className="w-100" src={logoDH} alt="Digital House" />
        </div>
      </Link>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider my-0" />

      {/* <!-- Nav Item - Dashboard --> */}
      <li className="nav-item active">
        <Link exact={true} to="/dashboard" className="nav-link">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard - DH movies</span>
        </Link>
      </li>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider" />
      <li className="nav-item">
        <Link to="/search" className="nav-link collapsed">
          <i class="fas fa-search"></i>
          <span>Buscar</span>
        </Link>
      </li>
      <hr className="sidebar-divider" />
      {/* <!-- Heading --> */}
      <div className="sidebar-heading">Actions</div>

      {/* 	<!-- Nav Item - Pages --> */}
      <li className="nav-item">
        <Link to="/pages" className="nav-link collapsed">
          <i className="fas fa-fw fa-folder"></i>
          <span>Pages</span>
        </Link>
      </li>

      {/* <!-- Nav Item - Charts --> */}
      <li className="nav-item">
        <Link exact={true} to="/charts" className="nav-link">
          <i className="fas fa-fw fa-chart-area"></i>
          <span>Charts</span>
        </Link>
      </li>

      <li className="nav-item">
        <Link exact={true} to="/genres" className="nav-link">
          <i className="fas fa-fw fa-table"></i>
          <span>genres</span>
        </Link>
      </li>

      {/* 	<!-- Nav Item - Tables --> */}
      <li className="nav-item">
        <Link exact={true} to="/tables" className="nav-link">
          <i className="fas fa-fw fa-table"></i>
          <span>Tables</span>
        </Link>
      </li>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider d-none d-md-block" />
    </ul>
  );
}

export default SideBar;
