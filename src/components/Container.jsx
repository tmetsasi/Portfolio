import styled, { css } from "styled-components";

export const ContainerLarge = styled.div`
  background-color: #ffff;
  border-radius: 0.5rem;
  height: 100%;
  width: 60%;
`;

export const ContainerSmall = styled.div`
  background-color: #ffff;
  border-radius: 0.5rem;
  height: 100%;
  width: 37%;
`;

export const ContainerL = () => {
  return <ContainerLarge />;
};

export const ContainerS = () => {
  return <ContainerSmall />;
};
