import { createSlice } from "@reduxjs/toolkit";

const toastSlice = createSlice({
    name: 'toast',
    initialState: {
        alert: false,
        errorMessage: null
    },
    reducers: {
        setAlert: (state, action) => {
            state.alert = action.payload;
        },
        setErrorMessage: (state, action) => {
            state.errorMessage = action.payload
        }
    }
})

export const {  setAlert, setErrorMessage   } = toastSlice.actions;

export default toastSlice.reducer;