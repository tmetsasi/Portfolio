import styled from "styled-components";
import { Heading1 } from "../types/typography";
import { NavigationBar } from "./NavBar";
import { BurgerMenu } from "./BurgerMenu";
import { React, useState } from "react";

const StyledHeader = styled.div`
  display: flex;
  background-color: #5e5e5e;
  width: 100%;
  height: 4rem;
  text-align: center;
  flex-direction: row;
`;

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <StyledHeader>
      <NavigationBar />
      <BurgerMenu open={open} setOpen={setOpen} />
    </StyledHeader>
  );
};
