import { create } from 'zustand';

type State = {
    searchPokemon: string;
}

type Action = {
    updateSearchPokemon: (searchPokemon: State["searchPokemon"]) => void;
}

type PokemonStore = State & Action

export const usePokemonStore = create<PokemonStore>()((set) => ({
    searchPokemon: "",
    updateSearchPokemon: (newPokemon) => set(() => ({ searchPokemon: newPokemon}))
}))
