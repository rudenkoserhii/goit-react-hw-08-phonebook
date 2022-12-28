import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: {value: ""},
  extraReducers: {
    [addFilter.pending](state, action) {
        state.value = action.payload.toLowerCase()
    },
  },
});

export const filterReducer = filterSlice.reducer;