// @ts-ignore
import styled, {StyledComponent} from "styled-components";

export const LandingPageContainer: StyledComponent<any, any> = styled.div`
  padding: 10rem;
  margin: auto;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  
  .nav-link-start {
    background: var(--button-color);
    font-weight: bold;
    font-size: 1rem;
    padding: 1rem;
    width: 15%;
	border-radius: 2rem;
	cursor: pointer;
	text-align: center;
	text-decoration: none;
	color: black;
  }
`;
