import styled from "styled-components";

export const HeaderContainer = styled.header<{$isLargeSize: boolean;}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  margin: ${props => props.$isLargeSize? ".8rem 4rem" : ".8rem 2rem"};
  flex-direction: ${props => props.$isLargeSize? "row" : "column"};
  row-gap: 1rem;
`;

export const LogoContainer = styled.div<{ $hide: boolean; }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  width: ${props => props.$hide? "4rem" : "15rem"};
  padding: .8rem;
  border-radius: 4rem;
  background-color: var(--background-secondary-color);
  transition: width 400ms;
  overflow: hidden; //texto pode aparecer do lado de fora, quando o width ainda não está no tamanho máximo
  cursor: pointer;
  
  &:hover {
    width: 15rem !important;
  }
  &:hover > #logo-text {
    display: block !important;
    opacity: 1 !important;
  }
`;

export const LogoText = styled.span<{ $hide: boolean; }>`
  display: ${props => props.$hide? "none" : "block"};
  opacity: ${props => props.$hide? "0" : "1"};
  transition: all 400ms;

  color: var(--font-secondary-color);
  font-size: var(--font-size-large);
  font-weight: var(--font-weight-bold);
  white-space: nowrap;
`;

export const NavbarContainer = styled.nav<{}>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const NavbarItem = styled.div<{ $active: boolean; }>`
  padding: 1rem 1.8rem;
  border-radius: 2rem;
  
  font-size: var(--font-size-normal);
  font-weight: ${props => props.$active? "600" : "400"};
  color: ${props => props.$active? "var(--font-secondary-color)" : "var(--font-primary-color)"};
  text-decoration: none;
  white-space: nowrap;

  background-color: ${props => props.$active? "var(--background-secondary-color)" : "var(--background-primary-color)"};
  transition: background-color 300ms;
  cursor: pointer;
`;