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
`

const StartButton = styled.button`
  background: rgb(240, 191, 76);
  font-weight: bold;
  font-size: 1rem;
  padding: 1em 1em;
  width: 12rem;
  border-radius: 2rem;
  border: 3px solid rgb(245, 107, 102);
  cursor: pointer;
  box-sizing: content-box;
`

export default function LandingPage() {

	return (
		<LandingPageContainer>
			<h2>Welcome to Pokemón App! </h2>
			<Link href={"/pokemon"}>
				<StartButton>Start</StartButton>
			</Link>
		</LandingPageContainer>
	);
}