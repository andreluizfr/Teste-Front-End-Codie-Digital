import styled from "styled-components";

export const BreadcrumbContainer = styled.aside<{}>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  padding: 2rem 6rem;

  background-color: var(--background-secondary-color);
`;

export const BreadcrumbLinks = styled.div<{}>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: .5rem;

  color: var(--font-secondary-color); //para ">"
  font-size: var(--font-size-smaller); //para ">"
  font-weight: var(--font-weight-light); //para ">"
`;

export const BreadcrumbLink = styled.span<{}>`
  color: var(--font-secondary-color);
  font-size: var(--font-size-small);
  font-weight: var(--font-weight-bold);
  
  cursor: pointer;
`

export const PageTitle = styled.p<{}>`
  color: var(--font-secondary-color);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
`;

export const PageDescription = styled.p<{}>`
  margin-bottom: 2rem;

  color: var(--font-secondary-color);
  font-size: var(--font-size-small);
  font-weight: var(--font-weight-light);
`;