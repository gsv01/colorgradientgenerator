import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    bgcolor1: 'magenta',
    bgcolor2: 'black',
};


export const myReducer = createSlice({
    name: 'color' ,
    initialState: initialState,
    reducers:{
        updateState: (state,action) => {
            return {
                bgcolor1: action.payload.bgcolor1,
                bgcolor2: action.payload.bgcolor2
            }
        }
    }
});


export const {updateState} = myReducer.actions;
export const selectData = (state) => state.reducer;
