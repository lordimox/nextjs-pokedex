import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

const initialState:{value:number} = {value:0};

const paginationSlice = createSlice({
    name: "pagination",
    initialState: initialState,
    reducers: {
        changePagination(state, action) {
            const page = action.payload;
            state.value = page;
        }
    }
});

export const {changePagination} = paginationSlice.actions;

export default paginationSlice.reducer;

export const getPagination = (state:RootState) => state.pagination.value;