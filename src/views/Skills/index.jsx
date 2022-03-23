import styled, { css } from "styled-components";
import { ContainerL, ContainerS } from "../../components/Container";

const SkillsFrame = styled.div`
  display: flex;
  width: 100%;
  height: 20%;
  flex-direction: row;
  column-gap: 2%;
  position: relative;
  top: 5%;
`;

export const SkillsView = () => {
  return (
    <SkillsFrame>
      <ContainerL />
      <ContainerS />
    </SkillsFrame>
  );
};
