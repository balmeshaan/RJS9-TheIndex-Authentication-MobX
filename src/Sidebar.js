import React from "react";
import { Link, NavLink, Redirect } from "react-router-dom";
import { observer } from "mobx-react";
// Logo
import logo from "./assets/theindex.svg";

// Stores
import authStore from "./stores/authStore";

// Components
import Logout from "./Logout";
import authorStore from "./stores/AuthorStore";

const Sidebar = () => {
  return (
    <div id="sidebar">
      <img src={logo} className="logo" alt="the index logo" />
      <section>
        {authStore.user ? (
          <Logout />
        ) : (
          <>
            <h4 className="menu-item active">
              <NavLink to="/login">Login</NavLink>
            </h4>
            <h4 className="menu-item active">
              <NavLink to="/signup">Sign Up</NavLink>
            </h4>
          </>
        )}

        <h4 className="menu-item active">
          <NavLink to="/authors">AUTHORS</NavLink>
        </h4>
        <h4 className="menu-item">
          <NavLink to="/books">BOOKS</NavLink>
        </h4>
      </section>
    </div>
  );
};

export default observer(Sidebar);
