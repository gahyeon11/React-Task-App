import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    madalActive: false,
    boardArray: []
}

const boardSlice = createSlice({
    name: 'boards',
    initialState,
    reducers:{

    }
})

export const boardsReducer = boardSlice.reducer;