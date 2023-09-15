import {createSlice} from "@reduxjs/toolkit";
import exp from "constants";


interface IFilter {
    category: string,
    startIndex: number,
    maxResults: number,
}

const initialState: IFilter = {
    category: '',
    startIndex: 0,
    maxResults: 20
};

const filterSlice = createSlice({
    name: 'filter',
    initialState: initialState,
    reducers: {
        setCategory: (state, action) => {
            state.category = action.payload;
        },
        setStartIndex: (state, action) => {
            state.startIndex = action.payload;
        },
        setMaxResults: (state, action) => {
            state.maxResults = action.payload;
        },
    }
});

export default filterSlice.reducer;