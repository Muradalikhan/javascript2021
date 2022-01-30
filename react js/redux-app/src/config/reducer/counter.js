
import { createSlice } from "@reduxjs/toolkit";

const intialStateValue = 0

export const counterSlice = createSlice({
    name: "counter",
    initialState: { value: intialStateValue },
    reducers: {
        increament: (state, action) => {
            state.value =state.value +1
        },
        decreament:(state)=>{
            state.value=state.value-1
        },
    }



})

export  const {increament,decreament} =counterSlice.actions

export default counterSlice.reducer