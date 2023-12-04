import styled from "styled-components";

export const ArticleContainer = styled.article`
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.25);
  background: #f6f8fa;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  width: 100%;
  height: auto;
  margin: 1em 0;
  padding: 1em;
  gap: .5em;

  @media screen and (min-width: 801px) and (max-width: 1200px) {
  }

  @media screen and (min-width: 1201px) {
  }
`;

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  gap: 0.5em;
  justify-content: space-between;

  @media screen and (min-width: 801px) and (max-width: 1200px) {
    flex-direction: row;
  }

  @media screen and (min-width: 1201px) {
    flex-direction: row;
  }
`;

export const ContainerDate = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  gap: 0.5em;
  justify-content: space-between;

  @media screen and (min-width: 801px) and (max-width: 1200px) {
    flex-direction: row;
  }

  @media screen and (min-width: 1201px) {
    flex-direction: row;
  }
`;

export const LinkRepo = styled.a`
  color: #0B69D5;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  font-size: .7em;
  margin: .2em;

  @media screen and (min-width: 801px) and (max-width: 1200px) {
    font-size: .8em;
  }

  @media screen and (min-width: 1201px) {
    font-size: .85em;
  }
`;
