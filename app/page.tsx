"use client";

import {LandingPageContainer} from "@/app/_components/containers/LandingPageContainer";
import {Button} from "@/app/_components/buttons/Button";

export default function Home(){
  return (
    <main>
      <LandingPageContainer>
        <h2>Welcome to Pokemón App! </h2>
        <Button>Start</Button>
      </LandingPageContainer>
    </main>
  )
}
