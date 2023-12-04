import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  align-items: center;
  gap: 2em;
  width: 100vw;
  height: 100vh;

  @media screen and (min-width: 801px) and (max-width: 1200px) {
    gap: 1.5em;
    width: 100vw;
    height: 95vh;
    justify-content: center;
  }

  @media screen and (min-width: 1201px) {
    gap: 1.5em;
    width: 100vw;
    height: 95vh;
    justify-content: center;
    gap: 4em;
  }
`;

export const SectionTitle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  margin: 2em 0;
  gap: 1em;

  @media screen and (min-width: 801px) and (max-width: 1200px) {
    width: 70%;
    gap: 1em;
  }

  @media screen and (min-width: 1201px) and (max-width: 2000px) {
    width: 60%;
    gap: 1em;
    margin: 0;
  }

  @media screen and (min-width: 2001px) {
    width: 50%;
    margin: 0;
    gap: 1em;
  }
`;

export const TitleHome = styled.h2`
  text-align: center;
  color: #000;
  font-family: Fira Code;

  font-size: 1.3em;
  width: 90%;

  @media screen and (min-width: 801px) and (max-width: 1200px) {
    font-size: 1.5em;
  }

  @media screen and (min-width: 1201px) and (max-width: 2000px) {
    font-size: 1.6em;
  }

  @media screen and (min-width: 2001px) {
    font-size: 1.8em;
  }
`;

export const TextHome = styled.p`
  color: #000;
  text-align: center;
  font-family: Fira Code;

  font-size: 0.7em;
  width: 80%;

  @media screen and (min-width: 801px) and (max-width: 1200px) {
    font-size: 0.9em;
    width: 80%;
  }

  @media screen and (min-width: 1201px) and (max-width: 2000px) {
    font-size: 0.9em;
    width: 80%;
  }

  @media screen and (min-width: 2001px) {
    font-size: 0.9em;
    width: 50%;
  }
`;

export const SectionSearch = styled.section`
  border: 0.5px solid #000;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  box-shadow: 7px 7px 7px 0px rgba(0, 0, 0, 0.25);
  width: 80%;
  height: 50%;
  @media screen and (min-width: 801px) and (max-width: 1200px) {
    width: 50%;
    height: 60%;
  }

  @media screen and (min-width: 1201px) and (max-width: 2000px) {
    width: 40%;
    height: 60%;
    padding: 1em;
  }

  @media screen and (min-width: 2001px) {
    width: 25%;
    height: 60%;
    padding: 1em;
  }
`;

export const FormHome = styled.form`
  display: flex;
  flex-direction: column;

  margin: 1em;
  gap: 0.5em;

  @media screen and (min-width: 801px) and (max-width: 1200px) {
    gap: 0.5em;
    width: 100%;
    padding: 1em;
  }

  @media screen and (min-width: 1201px) {
    margin: .5em;
    gap: 0.5em;
    width: 100%;
    padding: 1em;
  }

`;

export const LabelHome = styled.label`
  color: #000;
  font-family: Montserrat;
  font-weight: 700;

  font-size: 0.9em;

  @media screen and (min-width: 801px) and (max-width: 1200px) {
    font-size: 0.9em;
  }

  @media screen and (min-width: 1201px)  {
    font-size: 1em;
  }
`;

export const InputHome = styled.input`
  display: flex;
  border: 1px solid #000;
  background: #fff;
  align-items: center;

  width: 90%;
  height: 3vh;
  padding: 0.5em 1em;
  border-radius: 50px;

  @media screen and (min-width: 801px) and (max-width: 1200px) {
    width: 100%;
    height: 3.5vh;
    padding: 0.5em 1em;
  }

  @media screen and (min-width: 1201px) and (max-width: 2000px) {
    width: 100%;
    height: 4vh;
    padding: 1em;
  }

  @media screen and (min-width: 2001px) {
    width: 100%;
    height: 4vh;
    padding: 1em;
  }
`;

export const ButtonHome = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000;
  color: #fff;
  overflow: hidden;

  border-radius: 30px;
  width: 40%;
  height: 2em;
  padding: 0.5em;
  font-size: 0.8em;

  @media screen and (min-width: 801px) and (max-width: 1200px) {
    width: 20%;
    height: 3.5vh;
  }

  @media screen and (min-width: 1201px) and (max-width: 2000px) {
    width: 20%;
    height: 3.5vh;
    font-size: 0.9em;
  }

  @media screen and (min-width: 2001px) {
    width: 20%;
    height: 3vh;
    padding: 0.5em;
    font-size: 0.9em;
  }
`;

export const ButtonContainer = styled.button`
  width: 90%;
  margin: 1em;

  @media screen and (min-width: 801px) and (max-width: 1200px) {
    margin: 0;
  }

  @media screen and (min-width: 1201px) and (max-width: 2000px) {
    width: 70%;
    margin: 0;
  }

  @media screen and (min-width: 2001px) {
    margin: 0;
  }
`;
