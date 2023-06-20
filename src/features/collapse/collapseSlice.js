import { createSlice } from '@reduxjs/toolkit'

export const collapseSlice = createSlice({
  name: 'collapse',
  initialState: {
    value: false,
  },
  reducers: {
    show: (state) => {
      state.value = false;
    },
    hide: (state)  => {
      state.value = true;
    }
  },
})

// Action creators are generated for each case reducer function
export const { show, hide } = collapseSlice.actions

export default collapseSlice.reducer