import styled from "styled-components";

export const FormWrapper = styled.article<{}>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1.5rem;
`;

export const FormTitle = styled.h1<{}>`
  margin-bottom: 2rem;
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  text-align: center;
`;

export const FormContainer = styled.form<{}>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 32rem;
  gap: 2rem;
`;

export const Form = styled.form<{}>`
  width: 100%;
  max-width: 120rem;
`;

export const FirstSection = styled.section<{}>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  gap: .4rem;
  margin-bottom: 4rem;
`;

export const InputLabeled = styled.div<{}>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  flex: 1 0 14rem;
  max-width: 16rem;

  & label {
    margin-bottom: .4rem;
    font-size: var(--font-size-smaller);
    font-weight: var(--font-weight-extra-bold);
    color: var(--font-primary-color);
  }

  & input {
    width: 100%;
    padding: .8rem .6rem;
    border: 1px solid rgba(0,0,0,0.24);
    border-radius: .4rem;

    font-size: var(--font-size-small);
    font-weight: var(--font-weight-semi-bold);
    color: var(--font-tertiary-color);
  }
`;

export const SelectLabeled = styled.div<{}>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  position: relative;
  flex: 1 0 14rem;
  max-width: 16rem;

  & label {
    margin-bottom: .4rem;
    font-size: var(--font-size-smaller);
    font-weight: var(--font-weight-extra-bold);
    color: var(--font-primary-color);
  }

  & select {
    width: 100%;
    padding: .8rem .6rem;
    border: 1px solid rgba(0,0,0,0.24);
    border-radius: .4rem;

    font-size: var(--font-size-small);
    font-weight: var(--font-weight-semi-bold);
    color: var(--font-quaternary-color);

    -moz-appearance: none; /* Firefox */
    -webkit-appearance: none; /* Safari and Chrome */
    appearance: none;
    cursor: pointer;
  }

  &::after {
    content: "V";
    display: block;
    position: absolute;
    bottom: .6rem;
    right: .8rem;

    font-size: var(--font-size-large);
    font-weight: var(--font-weight-normal);
    color: var(--font-tertiary-color);
  }

  &:has(select:focus) {
    &::after {
      transform: rotate(180deg);
    }
  }
`;

export const SecondSection = styled.section<{}>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;
`;

export const SectionTitle = styled.h2<{}>`
  font-size: var(--font-size-smaller);
  font-weight: var(--font-weight-extra-bold);
  color: var(--font-primary-color);
`;

export const SectionDescription = styled.h3<{}>`
  font-size: var(--font-size-smaller);
  font-weight: var(--font-weight-semi-bold);
  color: var(--font-tertiary-color);
`;

export const PokemonAddedWrapper = styled.div<{}>`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  width: 100%;
  margin-bottom: 1rem;

  & select {
    width: 100%;
    padding: .8rem .6rem;
    border: 1px solid rgba(0,0,0,0.24);
    border-radius: .4rem;

    font-size: var(--font-size-small);
    font-weight: var(--font-weight-semi-bold);
    color: var(--font-tertiary-color);

    -moz-appearance: none; /* Firefox */
    -webkit-appearance: none; /* Safari and Chrome */
    appearance: none;
    cursor: pointer;
  }

  &::after {
    content: "V";
    display: block;
    position: absolute;
    bottom: .6rem;
    right: .8rem;

    font-size: var(--font-size-large);
    font-weight: var(--font-weight-normal);
    color: var(--font-tertiary-color);
  }

  &:has(select:focus) {
    &::after {
      transform: rotate(180deg);
    }
  }
`;

export const PokemonAddedCount =  styled.span<{}>`
  width: max-content;
  white-space: nowrap;
  font-size: var(--font-size-small);
  font-weight: var(--font-weight-extra-bold);
  color: var(--font-primary-color);
`;

export const AddPokemon = styled.button<{}>`
  position: relative;
  width: 100%;
  max-width: 15rem;
  border: 1px solid #000;
  padding: .8rem 1rem .8rem .8rem;
  border-radius: 1rem;
  background-color: var(--background-primary-color);

  text-align: left;
  font-size: var(--font-size-smaller);
  font-weight: var(--font-weight-extra-bold);
  color: var(--font-primary-color);

  cursor: pointer;

  &:disabled {
    border: 1px solid var(--font-quaternary-color);
    color: var(--font-quaternary-color);

    cursor: initial;

    &::after {
      color: var(--font-quaternary-color);
    }
  }

  &::after {
    content: "+";
    display: block;
    position: absolute;
    bottom: .5rem;
    right: .8rem;

    font-size: var(--font-size-large);
    font-weight: var(--font-weight-extra-bold);
    color: var(--font-primary-color);
  }
`;

export const ThirdSection = styled.section<{}>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .4rem;
`;

export const Divider = styled.hr<{}>`
  width: 100%;
  background-color: var(--font-tertiary-color);
`;

export const FourthSection = styled.section<{}>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: .5rem;
`;

export const SchedulingInfos = styled.div<{}>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & span{
    font-size: var(--font-size-small);
    font-weight: var(--font-weight-normal);
    color: var(--font-quaternary-color);
  }
`;

export const FeeAdvertise = styled.p<{}>`
  width: 100%;
  text-align: left;
  font-size: var(--font-size-smallest);
  font-weight: var(--font-weight-semi-bold);
  color: var(--font-quaternary-color);
`;

export const LastSection = styled.section<{}>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & span {
    font-size: var(--font-size-large);
    font-weight: var(--font-weight-bold);
    color: var(--font-primary-color);
  }

  & button {
    padding: .6rem;
    border-radius: 1rem;
    background-color: var(--background-secondary-color);
    border: none;

    text-align: center;
    font-size: var(--font-size-smaller);
    font-weight: var(--font-weight-bold);
    color: var(--font-secondary-color);

    cursor: pointer;
  }
`;