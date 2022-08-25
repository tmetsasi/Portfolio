import styled from "styled-components";
import { NavigationBar } from "./NavBar";
import { BurgerMenu } from "./BurgerMenu";
import { React, useState, useEffect } from "react";

const StyledHeader = styled.div`
  display: flex;
  background-color: #143c4b;
  width: 100%;
  height: 4rem;
  text-align: center;
  position: fixed;
  z-index: 1;
`;

const NavImage = styled.img`
  display: flex;
  position: relative;
  height: 100%;
  left: 10%;
`;

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [button, setButton] = useState(true);
  const showButton = () => {
    if (window.innerWidth <= 650) {
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
        <NavImage src={"/images/HeaderLogo.png"} />
        <BurgerMenu open={open} setOpen={setOpen} />
      </StyledHeader>
    );
  else
    return (
      <StyledHeader>
        <NavImage src={"/images/HeaderLogo.png"} />
        <NavigationBar />
      </StyledHeader>
    );
};
