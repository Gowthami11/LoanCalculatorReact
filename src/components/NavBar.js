import React from "react";
// import DrawerToggle from "../components/Navigation/SideDrawer/DrawerToggle/DrawerToggle";
import History from "../components/History";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-light amber lighten-4 mb-4">
      <nav className="text-center mt-4 mb-4">
        {" "}
        <h3>Loan Calculator</h3>
      </nav>

      <button
        className="navbar-toggler toggler-example"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent1"
        aria-controls="navbarSupportedContent1"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="dark-blue-text">
          <i className="fas fa-bars fa-1x"></i>
        </span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent1">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <NavLink to="/history" exact>
              <nav className="navbar navbar-sm bg-dark navbar-dark">
                <span class="navbar-brand mb-0 h1">History</span>
              </nav>
            </NavLink>
            <span className="sr-only">(current)</span>
          </li>
        </ul>
      </div>
    </nav>
  );
}
