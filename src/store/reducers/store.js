import { configureStore } from "@reduxjs/toolkit";
import ProductReducer, { productReducer } from "./ProductReducer";
import { errorReducer } from "./errorReducer";
import carReducer, { cartReducer } from "./cartReducer";
import { authReducer } from "./authReducer";
import paymentMethodReducer from "./paymentMethodReducer";
import { orderReducer } from "./OrderReducer";
import adminReducer from "./adminReducer";
import { sellerReducer } from "./sellerReducer";


const user = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : null;

const cartItems = localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [];

const selectUserCheckoutAddress = localStorage.getItem("CHECKOUT_ADDRESS")
    ? JSON.parse(localStorage.getItem("CHECKOUT_ADDRESS"))
    : [];

const initialState = {
    auth: { user: user, selectUserCheckoutAddress },
    carts: { cart: cartItems },
};

export const store = configureStore({
    reducer: {
        products: productReducer,
        errors: errorReducer,
        carts: cartReducer,
        auth: authReducer,
        payment: paymentMethodReducer,
        admin: adminReducer,
        order: orderReducer,
        seller: sellerReducer,
    },
    preloadedState: initialState,
});

export default store;