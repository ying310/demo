import { createSlice } from "@reduxjs/toolkit";

export const visitingSlice = createSlice({
    name: 'visiting',
    initialState: localStorage.getItem('visiting') && parseInt(localStorage.getItem('visiting')) ? parseInt(localStorage.getItem('visiting')) : 0,
    reducers: {
        increment: (state) => {
          state.value += 1;
          localStorage.setItem(state.value)
        },
    },
});

export const { increment } = visitingSlice.actions;
export default visitingSlice.reducer;