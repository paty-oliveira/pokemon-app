import reducer, { setSearch, selectSearchPokemonName } from "./searchSlice";

describe("searchSlice reducer", () => {
	it("should return the default state", function () {
		const initialState = reducer(undefined, {});
		const expectedState = {
			searchTerm: ""
		};

		expect(initialState).toEqual(expectedState);
	});

	it("should update the search term when the user types on the Pokemon name on the Search Bar", function () {
		const initialState = {
			searchTerm: ""
		};

		const userSearchTerm = "bulbasaur";

		const expectedState = {
			searchTerm: "bulbasaur"
		};

		const currentState = reducer(initialState, setSearch(userSearchTerm));

		expect(currentState).toEqual(expectedState);
	});
});
