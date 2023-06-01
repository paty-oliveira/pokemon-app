// @ts-ignore
import styled, {StyledComponent} from "styled-components";

export const StyledCard: StyledComponent<any, any> = styled.div`
  width: 10%;
  padding: 2rem;
  background-color: var(--main-color-dark);
  border-radius: 1rem;
  box-shadow: 0.7rem 0.4rem 0.4rem rgba(145, 7, 27, 0.46);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  &:hover {
    opacity: 0.5;
  }
`;

export const StyledText: StyledComponent<any, any> = styled.p`
  color: var(--text-card-color);
  font-weight: bold;
  text-transform: capitalize;
`;
