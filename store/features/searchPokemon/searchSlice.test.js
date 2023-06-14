import reducer, { setSearch, selectSearchPokemonName, selectSkipPreFetchFlag } from "./searchSlice";

describe("searchSlice reducer", () => {
	it("should return the default state", function () {
		const initialState = reducer(undefined, {});
		const expectedState = {
			searchTerm: null,
			skipPreFetch: true
		};

		expect(initialState).toEqual(expectedState);
	});

	it("should update the search term when the user types on the Pokemon name on the Search Bar", function () {
		const initialState = {
			searchTerm: null
		};

		const userSearchTerm = "bulbasaur";

		const expectedState = {
			searchTerm: "bulbasaur"
		};

		const currentState = reducer(initialState, setSearch(userSearchTerm));

		expect(currentState).toEqual(expectedState);
	});
});

describe("selectSearchPokemonName selector", () => {
	it("it should retrieve the searchTerm from the store state", () => {
		const currentState = {
			searchPokemon: {
				searchTerm: "bulbasaur",
				skipPreFetch: true
			}
		}

		const actualResult = selectSearchPokemonName(currentState);
		const expectedResult = "bulbasaur";

		expect(actualResult).toEqual(expectedResult);
	})
});

describe("selectSkipPreFetchFlag selector", () => {
	it("", () => {
		const currentState = {
			searchPokemon: {
				searchTerm: "bulbasaur",
				skipPreFetch: true
			}
		}

		const actualResult = selectSkipPreFetchFlag(currentState);
		expect(actualResult).toBeTruthy();
	});
});