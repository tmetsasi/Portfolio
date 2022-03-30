import styled from "styled-components";
import { NavButton } from "./NavButton";
import { React, useState } from "react";

const NavBar = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  width: 100%;
  flex-direction: row;
  justify-content: right;
  padding-right: 5rem;
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
      <NavButton text="Esittely" />
      <NavButton text="Työkalumme" />
      <NavButton text="Projektit" />
      <NavButton text="Ota yhteyttä" />
    </NavBar>
  );
};
