import styled from "styled-components";
import { NavButton } from "./NavButton";
import { React, useState } from "react";
import {Link} from "react-router-dom";

const NavBar = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  width: 100%;
  flex-direction: row;
  justify-content: right;
  padding-right: 5rem;
  z-index: 1;
`;

const NavImage = styled.img`
  display: flex;
  height: auto;
  width: auto;
  margin-left: auto;
  margin-right: auto;
`;

export const NavigationBar = () => {
  return (
    <NavBar>
      <Link to="/"> 
      <NavButton text="Etusivu" />
      </Link>
      <Link to="/me"> 
      <NavButton text="Meistä" />
      </Link>
      <Link to="/palvelut"> 
      <NavButton text="Palvelut" />
      </Link>
      <Link to="/tyokalut"> 
      <NavButton text="Työkalut" />
      </Link>
      <Link to="/"> 
      <NavButton text="Projektit" />
      </Link>
      <Link to="/"> 
      <NavButton text="Yhteystiedot" />
      </Link>
    </NavBar>
  );
};
