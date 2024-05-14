import { createSlice } from "@reduxjs/toolkit";
import { Pokemon } from "./definitions";
import { RootState } from "./store";

const initialState:Pokemon = {};

const pokeselectedSlice = createSlice({
    name: "pokeselected",
    initialState: initialState,
    reducers: {
        pokemonSelected(state, action) {
            const newPokemon:Pokemon = action.payload;
            state.sprites = newPokemon.sprites;
            state.abilities = newPokemon.abilities;
            state.height = newPokemon.height;
            state.name = newPokemon.name;
            state.stats = newPokemon.stats;
            state.types = newPokemon.types;
            state.weight = newPokemon.weight;
        }
    }
});

export const {pokemonSelected} = pokeselectedSlice.actions;

export default pokeselectedSlice.reducer;

export const getSelectedPokemon = (state:RootState) => state.pokeselected; 