import styled from "styled-components";

export const ContainerDetailsUser = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 1em;
  height: 100%;

  @media screen and (min-width: 801px) and (max-width: 1200px) {
    width: 100%;
  }

  @media screen and (min-width: 1201px) {
    width: 100%;
  }
`;

export const ContainerOne = styled.div`
  display: flex;
  overflow: hidden;
`;

export const ContainerTwo = styled.div`
    overflow: hidden;

  @media screen and (min-width: 801px) and (max-width: 1200px) {
  }

  @media screen and (min-width: 1201px) {
  }
`;

export const ContainerThree = styled.div`
 overflow-y: scroll;
 overflow-x: hidden;


 height: 60%;
 padding: .5em;

  @media screen and (min-width: 1201px) {
    height: 70%;
    padding: .5em;
  }
`;
