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

export const NavigationBar = () => {
  return (
    <NavBar>
      <NavButton text="About Us" />
      <NavButton text="Skills" />
      <NavButton text="Experience" />
      <NavButton text="Contacts" />
    </NavBar>
  );
};
