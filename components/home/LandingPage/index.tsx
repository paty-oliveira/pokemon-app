import Link from "next/link";
import {LandingPageContainer} from "@/components/home/LandingPage/styles";

export default function LandingPage() {

	return (
		<LandingPageContainer>
			<h2>Welcome to Pokemón App!</h2>
			<Link href={"/pokemon"} className={"nav-link-start"}>Start</Link>
		</LandingPageContainer>
	);
}