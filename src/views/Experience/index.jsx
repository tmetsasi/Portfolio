import styled, { css } from "styled-components";
import { ContainerL, ContainerS } from "../../components/Container";
import { Heading1 } from "../../types/typography";

const ExpFrame = styled.div`
  display: flex;
  width: 100%;
  height: 20%;
  flex-direction: row;
  column-gap: 2%;
  position: relative;
  top: 10%;
`;

export const ExperienceView = () => {
  return (
    <ExpFrame>
      <Heading1> Frontend </Heading1>
      <ContainerS />
      <Heading1> Backend </Heading1>
      <ContainerL />
    </ExpFrame>
  );
};
