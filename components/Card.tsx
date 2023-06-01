// @ts-ignore
import styled from "styled-components";
import Image from "next/image";

const StyledCard = styled.div`
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

const StyledText = styled.p`
  color: var(--text-card-color);
  font-weight: bold;
  text-transform: capitalize;
`;

type CardProps = {
	name: string;
	imageUrl: string;
}

export default function Card({ name, imageUrl }: CardProps) {

	return (
		<StyledCard>
			<Image src={imageUrl} alt={"Pokemon Image"} className={"pokemon-img"} width={100} height={100} priority/>
			<StyledText>{name}</StyledText>
		</StyledCard>
	)
}