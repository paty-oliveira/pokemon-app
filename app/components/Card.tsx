// @ts-ignore
import styled from "styled-components";

const StyledCard = styled.div`
  width: 10%;
  padding: 2rem;
  background-color: var(--main-color-dark);
  border-radius: 1rem;
  box-shadow: 0.7rem 0.4rem 0.4rem rgba(145, 7, 27, 0.46);
  cursor: pointer;
  
  &:hover {
    opacity: 0.5;
  }
`;

const StyledText = styled.p`
  color: var(--text-card-color);
  font-weight: bold;
`;

export default function Card() {

	return (
		<StyledCard>
			<StyledText>Name: </StyledText>
			<StyledText>Description: </StyledText>
			<StyledText>Image</StyledText>
		</StyledCard>
	)
}