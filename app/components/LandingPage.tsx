// @ts-ignore
import styled from "styled-components";
import Link from "next/link";

const LandingPageContainer = styled.div`
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
`

export default function LandingPage() {

	return (
		<LandingPageContainer>
			<h2>Welcome to Pokemón App! </h2>
			<Link href={"/pokemon"} className={"nav-link-start"}>Start</Link>
		</LandingPageContainer>
	);
}