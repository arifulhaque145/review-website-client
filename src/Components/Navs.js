import React from "react";
import { NavLink } from "react-router-dom";
import { Links, NavContainer } from "../styles";

function Navs() {
  return (
      <NavContainer className="shadow-lg p-4">
        <h2 className="font-medium text-4xl tracking-widest">LEXICON</h2>
        <Links className="text-sm">
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
