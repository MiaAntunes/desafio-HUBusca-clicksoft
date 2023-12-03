import styled from "styled-components";

export const ArticleContainer = styled.article`
  border: 1px solid rgba(0, 0, 0, 0.62);
  background: #fff;
  display:flex ;
  flex-direction: column;
  overflow: hidden;
  gap: .5em;
  width: 100%;
  height: auto;
  padding: .5em;
  

  @media screen and (min-width: 801px) and (max-width: 1200px) {
  }

  @media screen and (min-width: 1201px) and (max-width: 2000px) {
  }

  @media screen and (min-width: 2001px) {
  }
`;

export const ContainerUser = styled.div`
  display: flex;
  cursor: pointer;
  gap: 1em;
  align-items: center;
  @media screen and (min-width: 801px) and (max-width: 1200px) {
  }

  @media screen and (min-width: 1201px) and (max-width: 2000px) {
  }

  @media screen and (min-width: 2001px) {
  }
`;
