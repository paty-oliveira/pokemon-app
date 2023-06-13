import { renderWithProviders } from "@/utils/test-utils";
import { screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import Pokemon from "./page";
import { act } from "react-dom/test-utils";

describe("Pokemon page", () => {

    beforeEach(() => renderWithProviders(<Pokemon />));

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
})
