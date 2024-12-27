import {createSlice} from "@reduxjs/toolkit";

const cartSlice= createSlice({
    name: 'cart',
    initialState: {
        items: [],
        restaurantName: "",
        location: ""
    },
    reducers: {
        // gets access to state mention in initial state and action
        // mutating the state (directly modifying the state)
        // we can consider reducer as an api to communicate with redux store
        addRestaurantName: (state, action) => {
            state.restaurantName = action.payload;
        },

        addLocation: (state, action) => {
            state.location = action.payload;
        },
        addItem: (state, action) => {
            const itemIndex = state.items.findIndex(e => e.id == action.payload.id);
            if(itemIndex < 0) {
                action.payload.quantity = 1;
                action.payload.totalPrice = action.payload.price / 100;
                state.items.push(action.payload);
            }
            else {
                state.items[itemIndex].quantity = state.items[itemIndex].quantity + 1;
                state.items[itemIndex].totalPrice = state.items[itemIndex].quantity * (state.items[itemIndex].price? state.items[itemIndex].price / 100 : state.items[itemIndex].defaultPrice/100)
            }
                
        },
        removeItem: (state, action) => {
            // delete item[action.payload];
            if(action.payload.quantity == 1)
                state.items = state.items.filter(item => item.id != action.payload.id)
            else {
                const itemIndex = state.items.findIndex(e => e.id == action.payload.id);
                state.items[itemIndex].quantity = state.items[itemIndex].quantity - 1;
                state.items[itemIndex].totalPrice = state.items[itemIndex].quantity * (state.items[itemIndex].price? state.items[itemIndex].price / 100 : state.items[itemIndex].defaultPrice/100)
            }
        },
        clearCart: (state) => {
            state.items.length = 0;
        }
    }
});

export const {addItem, removeItem, clearCart, addRestaurantName, addLocation} = cartSlice.actions;

export default cartSlice.reducer;