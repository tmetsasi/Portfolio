import styled from "styled-components";

const NavigationButton = styled.button`
  background-color: #5e5e5e;
  border: none;
  color: #dddddd;
  height: 100%;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    color: #ffffff;
  }
  margin-right: 0.3rem;
`;

export const NavButton = (props) => {
  return <NavigationButton> {props.text} </NavigationButton>;
};
