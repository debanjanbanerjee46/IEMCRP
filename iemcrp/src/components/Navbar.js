import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const handlelogout = () => {
    localStorage.removeItem("token");
  };

  if (location.pathname === "/login") {
    return null;
  } else {
    return (
      <div>
        <nav>
          <img src="/assets/logo-iem.png" alt="Logo" />
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/payment">Payment Details</Link>

          <Link to="/result">University Marks System</Link>

          <Link onClick={() => handlelogout()} to="/login">
            Logout
          </Link>
        </nav>
      </div>
    );
  }
};

export default Navbar;
