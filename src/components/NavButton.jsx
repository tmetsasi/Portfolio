import styled from "styled-components";

const NavigationButton = styled.button`
  background-color: #5e5e5e;
  border: none;
  color: #dddddd;
  height: 90%;
  font-size: 15px;
  cursor: pointer;
  &:hover {
    color: #ffffff;
  }
  margin-right: 0.15rem;
  margin-left: 0.15rem;
`;

export const NavButton = (props) => {
  return <NavigationButton> {props.text} </NavigationButton>;
};
