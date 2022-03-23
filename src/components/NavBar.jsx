import styled from "styled-components";
import { NavButton } from "./NavButton";

const NavBar = styled.div`
  display: flex;
  position: relative;
  height: 100%;
  width: 30%;
  flex-direction: row;
  left: 5%;
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
