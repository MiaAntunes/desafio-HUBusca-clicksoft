import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  height: 8vh; // Rever esse número
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  border: 0.5px solid #000;
  background: #f6f8fa;

  @media screen and (min-width: 801px) and (max-width: 1200px) {
    gap: 0.5em;
    height: 8vh;
    justify-content: baseline;
  }

  @media screen and (min-width: 1201px) and (max-width: 2000px) {
    gap: 0.5em;
    height: 8vh;
    justify-content: baseline;
  }

  @media screen and (min-width: 2001px) {
    gap: 0.5em;
    height: 8vh;
    justify-content: baseline;
  }
`;

export const ImgLogo = styled.img`
  width: 2em;

  @media screen and (min-width: 801px) and (max-width: 1200px) {
    width: 2em;
  }

  @media screen and (min-width: 1201px) and (max-width: 2000px) {
    width: 2em;
  }

  @media screen and (min-width: 2001px) {
    width: 2em;
  }
`;

export const TitleLogo = styled.h1`
  color: #000;
  font-family: Fira Code;
  font-size: 1.8em;
  font-style: normal;

  @media screen and (min-width: 801px) and (max-width: 1200px) {
    font-size: 1.8em;
  }

  @media screen and (min-width: 1201px) and (max-width: 2000px) {
    font-size: 1.8em;
  }

  @media screen and (min-width: 2001px) {
    font-size: 1.8em;
  }
`;
