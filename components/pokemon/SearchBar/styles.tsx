// @ts-ignore
import styled from "styled-components";

export const SearchBarContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
`;

export const Input = styled.input`
  border-radius: 0.75rem;
  width: 20%;
  padding: 0.5rem;
  background-color: var(--main-color-dark);
  border: var(--main-color-dark) solid 2px;

  &::placeholder {
    color: rgba(0, 0, 0, 0.42);
  }
`;

export const SearchButton = styled.button`
  padding: 0.5rem;
  border-radius: 0.75rem;
  width: 7%;
  background-color: var(--button-color);
  border: var(--button-color);
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }

  &:enabled:hover {
    opacity: 0.5;
  }
`;
