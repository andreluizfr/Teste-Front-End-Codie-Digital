import styled from "styled-components";

export const Main = styled.main<{}>`
  flex: 1;
  height: 100%;
  width: 100%;
  max-width: 28.4rem;
  padding: 2.5rem 1rem;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

export const TitleText = styled.h1<{}>`
  width: 100%;
  text-align: left;
  color: var(--font-primary-color);
  font-weight: var(--font-weigth-bold);
  font-size: var(--font-size-great-medium);
  margin-bottom: 2rem;
`;

export const SubtitleText = styled.h2<{}>`
  width: 100%;
  text-align: left;
  color: var(--font-primary-color);
  font-weight: var(--font-weigth-semi-bold);
  font-size: var(--font-size-medium);
  margin-bottom: 2rem;
`;

export const Text = styled.h2<{}>`
  width: 100%;
  text-align: left;
  color: var(--font-primary-color);
  font-weight: var(--font-weigth-semi-bold);
  font-size: var(--font-size-great-normal);
  margin-bottom: 2rem;
`;
