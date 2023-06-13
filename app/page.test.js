import { renderWithProviders } from "@/utils/test-utils";
import { screen } from "@testing-library/react";
import Home from "./page";

describe("Home page", () => {
    it("should render the basic elements", () => {
        renderWithProviders(<Home />);

        const heading = screen.getByRole("heading", { name: "Welcome to Pokemón App!" });
        expect(heading).toBeInTheDocument();

        const pokemonPageLink = screen.getByRole("link", { name: "Start" });
        expect(pokemonPageLink).toBeInTheDocument();
        expect(pokemonPageLink).toHaveAttribute("href", "/pokemon");
    })
})