import React from "react";

import { authService } from "../../../services/auth/auth.services";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const navigate = useNavigate();
  const handleLogout = () => {
    authService.logout();
    navigate("/login");
  };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary  nav-color">
      <div className="container-fluid">
        <div className="right-align" id="navbarSupportedContent">
          <div class="dropdown">
            <button class="dropbtn nav-color">
              {currentUser.data.name}{" "}
              <i class="fa-solid fa-caret-down ms-1"></i>
            </button>
            <div class="dropdown-content pointer">
              <a onClick={handleLogout}>Logout</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
