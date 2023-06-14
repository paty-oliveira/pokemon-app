import { renderWithProviders } from "@/utils/test-utils";
import { screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import Pokemon from "./page";
import { act } from "react-dom/test-utils";
import { server } from "../../mocks/server";

describe("Pokemon page", () => {

    beforeAll(() => server.listen());

    beforeEach(() => renderWithProviders(<Pokemon />));

    afterEach(() => server.resetHandlers());

    afterAll(() => server.close());

    it("it should render basic elements", () => {
        const input = screen.getByLabelText("search-input");
        expect(input).toBeInTheDocument();

        const button = screen.getByLabelText("search-button");
        expect(button).toBeInTheDocument();
    });

    it("The user should be able to write the pokemon name on the search bar", async () => {
        const input = screen.getByLabelText("search-input");

        await act(() => userEvent.type(input, "bulbasaur"));

        expect(input).toHaveValue("bulbasaur");
    });

    it("When the user navigates to Pokemon page, the search button must be disabled", () => {
        const button = screen.getByLabelText("search-button");
        expect(button).toBeDisabled();
    });

    it("When the user starts writing the pokemon to be searched, the search button must be enabled", async() => {
        const input = screen.getByLabelText("search-input");

        await act(() => userEvent.type(input, "bulbasaur"));

        const button = screen.getByLabelText("search-button");
        expect(button).not.toBeDisabled();
    });

    it("When the user types the pokemon to be searched, and then clicks on search button, the pokemon name and its image must be visible", async() => {
        const input = screen.getByLabelText("search-input");
        await act(() => userEvent.type(input, "bulbasaur"));

        const button = screen.getByLabelText("search-button");
        await act(() => userEvent.click(button));

        expect(await screen.findByText(/bulbasaur/i)).toBeInTheDocument();

        const img = screen.findByAltText("Pokemon Image");
        expect(await img).toBeInTheDocument();
        expect(await img).toHaveAttribute("src", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg");
    })
})
