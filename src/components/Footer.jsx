import styled from "styled-components";

const Box = styled.div`
  display: flex;
  position: fixed;
  bottom: 0px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5rem;
  background-color: #5e5e5e;
  color: #ffff;
`;

export const Footer = () => {
  return <Box> Contact Us !</Box>;
};
