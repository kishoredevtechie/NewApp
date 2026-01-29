import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    isLoggedIn: false,
    username: null,
}
const loginSlice = createSlice({
    name: 'loginSlice',
    initialState: initialState,
    reducers:{
        login:(state,action)=>{
            state.isLoggedIn = true;
            state.username = action.payload;
        },
        logout:(state)=>{
            return initialState
        }
    }
})

export const {login , logout} = loginSlice.actions;
export default loginSlice.reducer;