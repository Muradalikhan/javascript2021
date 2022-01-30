import { createSlice } from "@reduxjs/toolkit";

const intitialStateValue = []

export const baskitSlice = createSlice({
    name: 'baskit',
    initialState: { value: intitialStateValue },
    reducers: {
        baskitItem: (state, action) => {
            state.value = action.payload
        },

    }
})

export const { baskitItem } = baskitSlice.actions

export default baskitSlice.reducer















