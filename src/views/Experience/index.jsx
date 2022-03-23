import styled, { css } from "styled-components";
import { ContainerL, ContainerS } from "../../components/Container";

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
      <ContainerS />
      <ContainerL />
    </ExpFrame>
  );
};
