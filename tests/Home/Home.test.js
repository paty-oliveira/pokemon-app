import { renderWithProviders } from "@/utils/test-utils";
import { screen } from "@testing-library/react";
import Home from "../../app/page";

describe("<LandingPage />", () => {
    it("should render the basic elements", () => {
        renderWithProviders(<Home />);

        const heading = screen.getByRole("heading", { name: "Welcome to Pokemón App!" });
        expect(heading).toBeInTheDocument();

        const pokemonPageLink = screen.getByRole("link", { name: "Start" });
        expect(pokemonPageLink).toBeInTheDocument();
        expect(pokemonPageLink).toHaveAttribute("href", "/pokemon");
    })
})