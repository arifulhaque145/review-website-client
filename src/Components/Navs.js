import React from "react";
import { NavLink } from "react-router-dom";
import { Links, NavContainer } from "../styles";

function Navs() {
  return (
    <NavContainer>
      <h2>LEXICON</h2>
      <Links>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/feedback">Feedback</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/services">Services</NavLink>
      </Links>
    </NavContainer>
  );
}

export default Navs;
