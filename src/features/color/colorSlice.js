import { createSlice } from "@reduxjs/toolkit";

export const colorSlice = createSlice({
    name: 'color',
    initialState: {
        value: 'rgba(0,255,0,0.05)'
    },
    reducers: {
        changeColor: (state, actions) => {
            state.value = actions.payload.value;
        }
    }
});

export const { changeColor } = colorSlice.actions;

export default colorSlice.reducer;