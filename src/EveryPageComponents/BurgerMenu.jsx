import React, { FC } from "react";
import styled from "styled-components";

const StyledBurgerMenu = styled.button`
  all: unset;
  position: absolute;
  left: 88%;
  padding-right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem;
  height: 1.5rem;
  top: 1.2rem;

  > :first-child {
    transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0deg)")};
  }
  > :nth-child(2) {
    opacity: ${({ open }) => (open ? "0" : "1")};
    transform: ${({ open }) => (open ? "translateX(0%)" : "translateX(0)")};
  }
  > :nth-child(3) {
    transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0deg)")};
  }
`;

const Burger = styled.div`
  background-color: #ffff;
  height: 3px;
  border-radius: 2px;
  transition: all 0.3s ease-in-out;
  transform-origin: 1px;
`;

export const BurgerMenu = ({ open, setOpen }) => {
  return (
    <StyledBurgerMenu open={open} onClick={() => setOpen(!open)}>
      <Burger />
      <Burger />
      <Burger />
    </StyledBurgerMenu>
  );
};
