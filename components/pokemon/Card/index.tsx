// @ts-ignore
import Image from "next/image";
import {StyledCard, StyledText} from "@/components/pokemon/Card/styles";
import {CardProps} from "@/components/pokemon/Card/types";

export default function Card({ name, imageUrl }: CardProps) {

	return (
		<StyledCard>
			<Image src={imageUrl} alt={"Pokemon Image"} className={"pokemon-img"} width={100} height={100} priority/>
			<StyledText>{name}</StyledText>
		</StyledCard>
	)
}