import styled from "styled-components";

export const Main = styled.main<{}>`
  flex: 1;
  height: 100%;
  width: 100%;
  position: relative;

  background-image: url("/images/pokemon-hero.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const MainText = styled.p<{}>`
  position: absolute;
  margin: auto;
  inset: 0;

  width: 100%;
  max-width: 36rem;
  height: max-content;
  padding: .8rem;

  color: var(--font-secondary-color);
  text-align: center;
  font-size: var(--font-size-xxl);
  font-weight: var(--font-weigth-bold);
`;