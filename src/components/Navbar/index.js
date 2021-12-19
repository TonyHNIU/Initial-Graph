import React from "react";
import { Nav, NavLink, Bars, NavBtn } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>Prototype</h1>
        </NavLink>
        <Bars />
        <NavBtn>Sign In</NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
