import styled from "styled-components";

export const MainContainerIdUser = styled.main`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  gap: 2em;
  width: 100vw;
  height: 100vh;

  @media screen and (min-width: 801px) and (max-width: 1200px) {
    gap: 1.5em;
    width: 100vw;
    height: 95vh;
  }

  @media screen and (min-width: 1201px) {
    gap: 1.5em;
    width: 100vw;
    height: 100vh;
    gap: 4em;
  }
`;

export const ContainerButtonBack = styled.div`
  margin: 2em;
  height: auto;
  overflow: hidden;

`;

export const ButtonBack = styled.button`
  display: flex;
  align-items: center;
  overflow: hidden;
  background-color: transparent;
  color: #000;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  gap: 1em;
  font-size: 0.9em;
  height: 5vh;

  @media screen and (min-width: 801px) and (max-width: 1200px) {
    height: 6vh;
  }

  @media screen and (min-width: 1201px) and (max-width: 2000px) {
    height: 8vh;
  }

  @media screen and (min-width: 2001px) {
    height: 8vh;
  }
`;

export const ImgButton = styled.img`
  width: 20%;

`;

export const ContainerSection = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  overflow: hidden;
  justify-content: center;


`

export const SectionSearchIdUser = styled.section`
  border: 0.5px solid #000;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  padding: .5em;

  box-shadow: 7px 7px 7px 0px rgba(0, 0, 0, 0.25);
  width: 80%;
  height: 70%;

  @media screen and (min-width: 801px) and (max-width: 1200px) {
    width: 50%;
    height: 95vh;
  }

  @media screen and (min-width: 1201px) and (max-width: 2000px) {
    width: 40%;
    height: 80%;
    padding: 1em;
  }

  @media screen and (min-width: 2001px) {
    width: 30%;
    height: 95%;
    padding: 1em;
  }
`;