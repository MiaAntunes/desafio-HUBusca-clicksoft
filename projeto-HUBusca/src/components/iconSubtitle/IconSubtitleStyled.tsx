import styled from "styled-components";

export const ContainerImage = styled.div`
  display: flex;
  gap: 0.2em;
  align-items: center;

  @media screen and (min-width: 1201px)  {
    gap: 0.5em;
  }


`;

export const ContainerSubtitle = styled.span`
  display: flex;
  width: 100%;

  gap: .2em;
  margin: .2em;


  @media screen and (min-width: 1201px)  {
    gap: .5em;
   
  }

`;

export const Image = styled.img`
  display: none;


  @media screen and (min-width: 1201px) and (max-width: 2000px) {
    display: block;
    width: .5em;
    height: .5em;
  }

  @media screen and (min-width: 2001px) {
    display: block;
    width: .8em;
    height: .8em;
  }
`;

export const Title = styled.p`
  color: #000;
  font-family: Montserrat;
  font-size: .75em;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  @media screen and (min-width: 801px) and (max-width: 1200px) {
    font-size: .8em;
  }

  @media screen and (min-width: 1201px) and (max-width: 2000px) {
    font-size: .95em;
  }

  @media screen and (min-width: 2001px) {
    font-size: .95em;
  }
`;

export const Text = styled.p`
  color: #000;
  font-family: Montserrat;
  font-size: .7em;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  @media screen and (min-width: 801px) and (max-width: 1200px) {
    font-size: .8em;
  }

  @media screen and (min-width: 1201px) and (max-width: 2000px) {
    font-size: .95em;
  }

  @media screen and (min-width: 2001px) {
    font-size: .95em;
  }


`;
