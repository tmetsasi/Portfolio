import styled from "styled-components";
import { Heading1 } from "../types/typography";

const StyledHeader = styled.div`
  background-color: #979797;
  width: 100%;
  height: 3rem;
  text-align: center;
`;

export const Header = () => {
  return (
    <div>
      <StyledHeader>
        <Heading1>About Us</Heading1>
      </StyledHeader>
    </div>
  );
};
