import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./pokeselected";
import paginationReducer from "./paginationSlice";

export const makeStore = () => {
    return configureStore({
        reducer: {
            pokeselected: pokemonReducer,
            pagination: paginationReducer
        }
    });
}

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];