
import { createSlice } from "@reduxjs/toolkit";

const intialStateValue = { name: '', age: 0, email: '' }

export const userSlice = createSlice({
    name: 'user',
    initialState: { value: intialStateValue },
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        },
        logout:(state)=>{
            state.value=intialStateValue
        },
    }

})

export const { login,logout } = userSlice.actions

export default userSlice.reducer