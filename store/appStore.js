import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import toastReducer from "./slices/toastSlice"
const appStore = configureStore({
    reducer: {
        cart: cartReducer,
        toast: toastReducer
    }
});

export default appStore;