import styled from "styled-components";
import { Heading1 } from "../types/typography";
import { NavigationBar } from "./NavBar";
import { BurgerMenu } from "./BurgerMenu";
import { React, useState, useEffect } from "react";

const StyledHeader = styled.div`
  background-color: #5e5e5e;
  width: 100%;
  height: 4rem;
  text-align: center;
`;

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [button, setButton] = useState(true);
  const showButton = () => {
    if (window.innerWidth <= 700) {
      setButton(true);
    } else {
      setButton(false);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  if (button)
    return (
      <StyledHeader>
        <BurgerMenu open={open} setOpen={setOpen} />
      </StyledHeader>
    );
  else
    return (
      <StyledHeader>
        <NavigationBar />
      </StyledHeader>
    );
};
